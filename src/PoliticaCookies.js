import React from "react";
import "./style.css";

export default function PoliticaCookies() {
  return (
    <div className="page-wrapper cookies-page">
      <h1>Política de Cookies</h1>
      <p>
        En HelpLine Consultores S.L queremos que nuestros usuarios estén perfectamente informados sobre el uso de cookies en esta web. Nuestro objetivo es garantizar una experiencia transparente, segura y conforme con la legislación vigente.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al navegar por internet. Se utilizan para recordar información sobre la visita y facilitar futuras interacciones con el sitio web.
      </p>

      <h2>Tipos de cookies utilizadas</h2>

      <h3>1. Cookies propias:</h3>
      <ul>
        <li><strong>cookieConsent</strong> – Almacena el consentimiento del usuario para mostrar o no el aviso de cookies. (Caducidad: 12 meses)</li>
        <li><strong>sessionId</strong> – Identificador de sesión anónimo temporal. (Caducidad: sesión)</li>
        <li><strong>cartId</strong> – Identificador del carrito de compras si aplica. (Caducidad: sesión)</li>
      </ul>

      <h3>2. Cookies de terceros:</h3>
      <p>Actualmente esta web no utiliza cookies de terceros.</p>

      <h2>Finalidades del uso de cookies</h2>
      <ul>
        <li>Garantizar el correcto funcionamiento del sitio web.</li>
        <li>Recordar preferencias del usuario (por ejemplo, idioma o sesión).</li>
        <li>Mejorar la experiencia de navegación.</li>
      </ul>

      <h2>Legislación aplicable</h2>
      <p>
        Esta política cumple con la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD), así como con el estándar internacional del <em>Data Privacy Framework</em>.
      </p>

      <h2>Cómo gestionar o eliminar cookies</h2>
      <p>
        Puedes configurar tu navegador para aceptar, bloquear o eliminar cookies instaladas. Consulta los siguientes enlaces:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/windows" target="_blank">Microsoft Edge</a></li>
      </ul>

      <p>Última actualización: 1 de agosto de 2025</p>
    </div>
  );
}