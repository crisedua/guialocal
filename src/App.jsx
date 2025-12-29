import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import KineLanding from './routes/salud/kine/clientes';

// Home Component (The original content of main App)
function Home() {
  return (
    <>
      {/* 1. SECCIÓN HERO */}
      <header className="hero">
        <div className="container">
          <h1>Guía local para entender y encontrar servicios de salud</h1>
          <p className="hero-subtitle">
            Información clara sobre especialidades y dónde encontrar atención profesional cerca de usted.
          </p>
          <p className="hero-aux">Seleccione una categoría para comenzar.</p>
        </div>
      </header>

      <main className="container">
        {/* 2. NAVEGACIÓN PRINCIPAL POR ESPECIALIDAD */}
        <section className="specialties-section">
          <h2>Explorar por especialidad</h2>
          <div className="specialties-grid">
            <div className="card">
              <h3>Kinesiología</h3>
              <p>Ayuda en la recuperación del movimiento, alivio del dolor y rehabilitación física mediante terapias manuales y ejercicios.</p>
            </div>

            <div className="card">
              <h3>Salud Física</h3>
              <p>Orientación general para el bienestar corporal, actividad física y prevención de dolencias comunes.</p>
            </div>

            <div className="card">
              <h3>Medicina Estética</h3>
              <p>Información sobre tratamientos enfocados en la estética y el cuidado de la piel, y cuándo son apropiados.</p>
            </div>

            <div className="card">
              <span className="tag-coming-soon">Próximamente</span>
              <h3>Salud Mental</h3>
              <p>Recursos y orientación para el bienestar emocional y apoyo psicológico.</p>
            </div>
          </div>
        </section>

        {/* 3. CÓMO FUNCIONA ESTA GUÍA */}
        <section className="how-it-works-section">
          <h2>Cómo funciona esta guía</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Aprender</h3>
              <p>Lea explicaciones sencillas sobre qué es cada especialidad y para qué casos está recomendada.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Evaluar</h3>
              <p>Entienda cuándo es necesario buscar ayuda profesional y qué esperar de una consulta.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Conectar</h3>
              <p>Encuentre referencias de servicios locales organizados por ubicación y especialidad.</p>
            </div>
          </div>
        </section>
      </main>

      {/* 4. PROPÓSITO / POR QUÉ EXISTE ESTE SITIO */}
      <section className="purpose-section">
        <div className="container">
          <h2>Por qué existe esta guía</h2>
          <p className="purpose-content">
            Muchas personas buscan información de salud confiable antes de tomar decisiones importantes. Esta guía reúne explicaciones claras y neutrales, junto con referencias locales, para ayudarle a entender sus opciones. Nuestro objetivo es facilitar el acceso a información útil para que pueda tomar decisiones informadas sobre su bienestar, sin presiones comerciales.
          </p>
        </div>
      </section>

      {/* 5. ESPECIALIDAD DESTACADA */}
      <section className="featured-section container">
        <div className="featured-card">
          <div className="featured-header">Especialidad destacada</div>
          <h3>Kinesiología</h3>
          <p>
            La kinesiología es una disciplina de salud enfocada en el estudio del movimiento humano. Es fundamental para tratar lesiones, aliviar dolores musculoesqueléticos y rehabilitar la función física. Puede ser una opción efectiva si experimenta dolor de espalda, problemas articulares o necesita recuperación post-lesión.
          </p>
          {/* Internal Link using React Router */}
          <Link to="/salud/kine/cliente" className="link-button">Ver Guía de Kinesiología &rarr;</Link>
        </div>
      </section>

      {/* 6. CONTENT DEL FOOTER */}
      <footer>
        <div className="container">
          <h4>Guía Salud</h4>
          <p>Guía informativa sobre servicios de salud locales.</p>
          <p><em>Enfoque geográfico: Región de Valparaíso, Chile</em></p>

          <div className="disclaimer">
            Aviso educativo: La información contenida en este sitio tiene fines exclusivamente educativos e informativos y no sustituye el consejo, diagnóstico o tratamiento médico profesional.
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for the specific landing page */}
        <Route path="/salud/kine/cliente" element={<KineLanding />} />
        <Route path="*" element={
          <div style={{ padding: '2rem', textAlign: 'center', color: '#333' }}>
            <h2>404 - Página no encontrada</h2>
            <p>La ruta que buscas no existe.</p>
            <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Volver al inicio</Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
