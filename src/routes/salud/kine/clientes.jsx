import React from 'react';
import './KineLanding.css';
import ReservationForm from '../../../components/ReservationForm';


function KineLanding() {
    return (
        <div className="kinesiologia-page">
            <div className="app-container">
                {/* 1. H1 headline & 2. Subheadline & 3. CTA */}
                <header className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">¿Necesita kinesiología para el dolor lumbar?</h1>
                        <p className="hero-subtitle">Atención experta en kinesiología en Curauma, Valparaíso</p>
                        <a href="#book" className="btn-primary">Reserve una Evaluación Gratuita</a>
                    </div>
                </header>

                {/* 4. Quick Answer */}
                <section>
                    <div className="card quick-answer">
                        <h3>Respuesta Rápida</h3>
                        <p>
                            La kinesiología reduce el dolor lumbar y restaura la movilidad sin cirugía ni medicación excesiva. Recomendada si el dolor persiste más de dos semanas, empeora con el movimiento o limita su vida diaria. Una evaluación profesional determinará su idoneidad.
                            <br /><br />
                            <strong>Busque atención médica urgente si experimenta pérdida de control de la vejiga o los intestinos, entumecimiento progresivo o debilidad severa.</strong>
                        </p>
                    </div>
                </section>

                {/* 5. When Physical Therapy Helps Lower Back Pain */}
                <section>
                    <h2>Cuándo la Kinesiología Ayuda con el Dolor Lumbar</h2>
                    <p style={{ marginBottom: '2rem' }}>La kinesiología suele ser eficaz para:</p>
                    <div className="grid-3">
                        {[
                            { title: "Distensiones Musculares", desc: "Dolor por levantar objetos pesados o movimientos repentinos." },
                            { title: "Ciática", desc: "Dolor agudo o punzante que viaja por la pierna." },
                            { title: "Hernias Discales", desc: "Malestar causado por presión en los nervios espinales." },
                            { title: "Problemas de Postura", desc: "Dolor resultante de estar sentado por largos períodos en un escritorio." },
                            { title: "Artritis", desc: "Rigidez y dolor en las articulaciones de la espalda baja." },
                            { title: "Dolor Crónico", desc: "Dolor de espalda que ha persistido por más de tres meses." }
                        ].map((item, index) => (
                            <div className="card" key={index}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Seek Care Soon & 7. Not First Step */}
                <section>
                    <div className="grid-2" style={{ alignItems: 'start' }}>
                        <div>
                            <h3>Cuándo Debería Buscar Atención Pronto</h3>
                            <p className="mb-4">Considere buscar una evaluación profesional si:</p>
                            <ul className="bullet-list">
                                <li>El dolor no mejora después de 3-4 días de descanso.</li>
                                <li>Experimenta rigidez matutina que dura más de 30 minutos.</li>
                                <li>El dolor se extiende a las caderas, glúteos o piernas.</li>
                                <li>No puede pararse derecho o caminar cómodamente.</li>
                                <li>Los analgésicos de venta libre brindan poco alivio.</li>
                            </ul>
                        </div>

                        <div className="card warning-card">
                            <h3>Cuándo la Kinesiología Puede No Ser el Primer Paso</h3>
                            <p>Aunque la kinesiología es segura para la mayoría de los dolores de espalda, algunos síntomas requieren atención médica inmediata antes de comenzar la terapia:</p>
                            <ul className="bullet-list">
                                <li>Dolor abdominal severo.</li>
                                <li>Fiebre inexplicable o pérdida de peso.</li>
                                <li>Entumecimiento o debilidad en ambas piernas.</li>
                                <li>Pérdida de control intestinal o vesical (busque atención de emergencia).</li>
                                <li>Historial de cáncer o trauma severo reciente (como una caída).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 8. Process & 9. Duration */}
                <section style={{ backgroundColor: 'var(--color-bg-main)' }}>
                    <div className="grid-2">
                        <div>
                            <h2>Qué Sucede Durante la Kinesiología</h2>
                            <p className="mb-4">Nuestro proceso implica cinco pasos claros:</p>
                            <div className="process-steps">
                                {[
                                    { title: "Evaluación Inicial", desc: "Un kinesiólogo examina su movimiento, fuerza y niveles de dolor." },
                                    { title: "Plan Personalizado", desc: "Creamos un plan de recuperación personalizado basado en sus necesidades y objetivos específicos." },
                                    { title: "Terapia Manual", desc: "Técnicas como terapia manual y masaje para aliviar la tensión." },
                                    { title: "Ejercicios Guiados", desc: "Movimientos específicos para fortalecer los músculos adecuados y mejorar la flexibilidad." },
                                    { title: "Mantenimiento en Casa", desc: "Rutinas simples para prevenir el dolor futuro y mantener el progreso." }
                                ].map((step, idx) => (
                                    <div key={idx} className="step-item">
                                        <div className="step-number">{idx + 1}</div>
                                        <div>
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ backgroundColor: 'var(--color-secondary)' }}>
                                <h3>¿Cuánto Tiempo Toma la Kinesiología?</h3>
                                <p>La duración del tratamiento varía para cada persona. Algunos pacientes sienten alivio en pocas sesiones, mientras que otros con condiciones crónicas pueden necesitar atención durante varias semanas. Su terapeuta seguirá su progreso y ajustará su plan para asegurar que alcance sus objetivos de recuperación de manera eficiente.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. FAQ */}
                <section>
                    <h2>Preguntas Frecuentes</h2>
                    <div className="faq-list">
                        {[
                            { q: "¿Necesito una referencia médica?", a: "En muchos casos, puede ver a un kinesiólogo directamente sin una referencia médica. Podemos ayudarle a verificar los requisitos específicos de su seguro." },
                            { q: "¿Duele la kinesiología?", a: "La kinesiología no debería ser dolorosa. Puede sentir algo de dolor muscular al trabajar nuevas áreas, pero la terapia está diseñada para aliviar el dolor, no para causarlo. Comunicarse con su terapeuta ayuda a asegurar su comodidad." },
                            { q: "¿Lo cubrirá el seguro?", a: "La mayoría de los planes de seguro médico cubren la kinesiología cuando es médicamente necesaria. Recomendamos verificar su cobertura específica para deducibles y copagos." },
                            { q: "¿Cuánto duran las sesiones?", a: "Las sesiones suelen durar entre 45 y 60 minutos. Esto permite suficiente tiempo para el tratamiento manual, ejercicios y educación." },
                            { q: "¿Puede la kinesiología ayudar a evitar la cirugía?", a: "Sí, para muchas condiciones de espalda, la kinesiología es una opción de tratamiento no quirúrgico efectiva. Aborda la causa raíz del dolor y a menudo puede prevenir la necesidad de procedimientos invasivos." }
                        ].map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <div className="faq-question">{faq.q}</div>
                                <div className="faq-answer">{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 11. Why Choose & 13. Summary */}
                <section style={{ backgroundColor: '#fff', borderRadius: '24px' }}>
                    <div className="grid-2">
                        <div>
                            <h2>¿Por Qué Elegir Kinesiología para el Dolor de Espalda?</h2>
                            <ul className="bullet-list">
                                <li><strong>Alivio Natural del Dolor:</strong> Reduce la necesidad de medicación para el dolor.</li>
                                <li><strong>Restaura la Movilidad:</strong> Le ayuda a volver al trabajo, deportes y pasatiempos.</li>
                                <li><strong>Atención Personalizada:</strong> Tratamientos adaptados a su cuerpo y estilo de vida.</li>
                                <li><strong>Previene la Recurrencia:</strong> Le enseña cómo evitar futuras lesiones.</li>
                                <li><strong>Evita la Cirugía:</strong> Un enfoque conservador probado para la salud espinal.</li>
                            </ul>
                        </div>
                        <div className="card" style={{ border: '2px solid var(--color-primary)' }}>
                            <h3>Resumen Rápido</h3>
                            <ul className="bullet-list">
                                <li>Trata eficazmente dolor lumbar, ciática y lesiones.</li>
                                <li>Prioriza movimiento, fuerza y alivio sin fármacos.</li>
                                <li>Acceso directo, usualmente sin orden médica.</li>
                                <li>Tratamiento personalizado de duración variable.</li>
                                <li>Evaluación experta define los siguientes pasos.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 12. Local Entity & 14. CTA */}
                <footer id="book">
                    <div className="grid-2">
                        <div>
                            <h2>[Nombre de la Clínica]</h2>
                            <p><strong>Sirviendo a [CIUDAD] y áreas circundantes.</strong></p>
                            <br />
                            <p><strong>Dirección:</strong> [123 Calle Principal, Ciudad, Estado, Código Postal]</p>
                            <p><strong>Teléfono:</strong> [(555) 123-4567]</p>
                            <p><strong>Email:</strong> [contacto@nombreclinica.com]</p>
                        </div>
                        <div>
                            <ReservationForm />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default KineLanding;
