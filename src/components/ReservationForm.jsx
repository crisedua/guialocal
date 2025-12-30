import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import './ReservationForm.css';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Assuming a table named 'reservations' exists or we can just log for now if specific table structure isn't known.
            // We'll try to insert into 'reservations'.
            const { error } = await supabase
                .from('reservations')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        reservation_date: formData.date,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', date: '', message: '' });
        } catch (error) {
            console.error('Error submitting reservation:', error);
            setStatus('error');
        }
    };

    return (
        <div className="reservation-form-container" id="reservar">
            <h2 className="reservation-form-title">Reserva tu Cita</h2>
            <p className="reservation-form-subtitle">Déjanos tus datos y te contactaremos para confirmar tu turno.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ej: Juan Pérez"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@ejemplo.com"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+56 9 1234 5678"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="date">Fecha Preferente</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="message">Mensaje (Opcional)</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos el motivo de tu consulta..."
                    />
                </div>

                <button type="submit" className="submit-button" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Enviando...' : 'Solicitar Cita'}
                </button>

                {status === 'success' && (
                    <div className="form-status success">
                        ¡Gracias! Tu solicitud ha sido enviada con éxito. Te contactaremos pronto.
                    </div>
                )}

                {status === 'error' && (
                    <div className="form-status error">
                        Hubo un error al enviar la solicitud. Por favor intenta nuevamente.
                    </div>
                )}
            </form>
        </div>
    );
};

export default ReservationForm;
