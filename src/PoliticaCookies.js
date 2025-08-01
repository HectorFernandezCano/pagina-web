import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function PoliticaCookies() {
  const navigate = useNavigate();

  return (
    <div className="cookies-wrapper">
      <header className="cookies-header">
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img
            src="/logo-helpline.png"
            alt="Logo HelpLine"
            className="cookies-logo"
          />
        </div>
        <h1 className="cookies-title">Política de Cookies</h1>
      </header>

      <main className="cookies-content">
        <p>
          Esta Política de Cookies explica qué son las cookies y cómo las
          utilizamos en HelpLine Consultores S.L.
        </p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Su propósito es recordar tus
          preferencias y mejorar tu experiencia de navegación.
        </p>

        <h2>¿Qué tipos de cookies utilizamos?</h2>
        <ul>
          <li>
            <strong>Cookies técnicas o necesarias:</strong> Son esenciales para
            el funcionamiento básico del sitio.
          </li>
          <li>
            <strong>Cookies de personalización:</strong> Permiten adaptar el
            contenido a tus preferencias.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo
            interactúan los usuarios con nuestro sitio.
          </li>
        </ul>

        <h2>Cookies utilizadas</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cookieConsent</td>
              <td>Propia</td>
              <td>Almacena la elección del consentimiento</td>
              <td>1 año</td>
            </tr>
          </tbody>
        </table>

        <h2>Gestión de cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies desde la
          configuración de tu navegador.
        </p>

        <h2>Actualizaciones</h2>
        <p>
          Revisa esta política regularmente para estar al tanto de cualquier
          cambio.
        </p>
      </main>

      <footer className="cookies-footer">
        <p>
          © {new Date().getFullYear()} HelpLine Consultores S.L – Todos los
          derechos reservados
        </p>
      </footer>
    </div>
  );
}