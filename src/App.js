import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function App() {
  const [cookiesVisible, setCookiesVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setCookiesVisible(true);
  }, []);

  const handleCookieChoice = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setCookiesVisible(false);
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-content">
          <img
            src="/logo-helpline.png"
            alt="HelpLine Logo"
            className="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <span className="brand-name" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            HelpLine Consultores S.L
          </span>
          <button className="cta-button" onClick={() => navigate("/")}>Solicita Presupuesto</button>
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
          <button className="cta-secondary" onClick={() => navigate("/")}>Contacta con Nosotros</button>
        </div>
      </section>

      {/* Servicios */}
      <section className="services-section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {[
            {
              title: "Instalaciones Eléctricas",
              icon: "/foto-inst-electricas.jpg",
              description: "Montaje, mantenimiento y reformas eléctricas seguras y certificadas."
            },
            {
              title: "Climatización y Calefacción",
              icon: "/foto-clima-calefa.jpg",
              description: "Instalación de sistemas eficientes para confort todo el año."
            },
            {
              title: "Fontanería",
              icon: "/foto-font.jpg",
              description: "Reparación e instalación de redes de agua y saneamiento."
            }
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
        <div className="contact-container">
          <h2 className="section-title">Contáctanos</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" placeholder="+34 600 000 000" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
            <button type="submit" className="cta-button-form">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Calle Monasterio de Irache, 9 · 28691 Villanueva de la Cañada (Madrid)</p>
        <p>Tel: 659 90 60 20 · 659 90 60 22</p>
        <p>© {new Date().getFullYear()} HelpLine Consultores S.L - Todos los derechos reservados</p>
        <a href="/politica-cookies" className="footer-link">Política de Cookies</a>
      </footer>

      {/* Cookies Modal */}
      {cookiesVisible && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <h2>Así utilizamos las cookies</h2>
            <p>
              HelpLine Consultores, como responsable del tratamiento de tus datos, utilizará si tú lo consientes cookies propias para garantizar el correcto funcionamiento de esta web y mejorar tu experiencia. Puedes obtener más información consultando nuestra{' '}
              <a href="/politica-cookies" target="_blank" rel="noopener noreferrer">Política de cookies</a>.
            </p>
            <div className="cookie-buttons-modal">
              <button onClick={() => handleCookieChoice("accept")} className="cookie-btn accept">Aceptar cookies</button>
              <button onClick={() => handleCookieChoice("reject")} className="cookie-btn reject">Rechazar cookies</button>
              <button onClick={() => handleCookieChoice("necessary")} className="cookie-btn neutral">Aceptar solo necesarias</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
