import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-content">
          <img src="/logo-helpline.png" alt="HelpLine Logo" className="logo" />
          <span className="brand-name">HelpLine Consultores S.L</span>
          <button className="cta-button">Solicita Presupuesto</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Soluciones Profesionales en Instalaciones</h1>
          <p className="hero-subtitle">
            Confía en HelpLine Consultores S.L para tus necesidades técnicas en hogar y empresa
          </p>
          <button className="cta-secondary">Contacta con Nosotros</button>
        </div>
      </section>

      {/* Servicios */}
      <section className="services-section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {[
            {
              title: "Instalaciones Eléctricas",
              icon: "https://cdn-icons-png.flaticon.com/512/9424/9424714.png",
              description: "Montaje, mantenimiento y reformas eléctricas seguras y certificadas.",
            },
            {
              title: "Climatización y Calefacción",
              icon: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
              description: "Instalación de sistemas eficientes para confort todo el año.",
            },
            {
              title: "Fontanería",
              icon: "https://cdn-icons-png.flaticon.com/512/5904/5904173.png",
              description: "Reparación e instalación de redes de agua y saneamiento.",
            },
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={`Icono de ${service.title}`} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="contact-section">
        <h2 className="section-title">Contáctanos</h2>
        <form className="contact-form">
          <label>Nombre<input type="text" /></label>
          <label>Email<input type="email" /></label>
          <label>Teléfono<input type="tel" /></label>
          <label>Mensaje<textarea rows="5"></textarea></label>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Calle Monasterio de Irache, 9 · 28691 Villanueva de la Cañada (Madrid)</p>
        <p>Tel: 659 90 60 20 · 659 90 60 22</p>
        <p>© {new Date().getFullYear()} HelpLine Consultores S.L - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}