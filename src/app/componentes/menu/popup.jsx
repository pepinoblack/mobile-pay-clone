"use client";
import { Icon } from "@iconify/react";
import "./popup.css";

/**
 * Popup principal con acciones rápidas.
 * onIrAEnvio: se ejecuta al presionar "Envía" (cierra este y abre el de envío).
 */
export default function Popup({ AbrirPopup, SetAbrirPopup, onIrAEnvio }) {
  if (!AbrirPopup) return null;

  const cerrar = () => SetAbrirPopup(false);

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" onClick={cerrar}>
      <div className="popup-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="popup-list">
          <button className="row" type="button">
            <span className="row-label">+ Servicios</span>
            <span className="icon blue" aria-hidden>
              <Icon icon="mdi:view-grid-outline" width="28" height="28" />
            </span>
          </button>

          <button className="row" type="button">
            <span className="row-label">Saca</span>
            <span className="icon magenta" aria-hidden>
              <Icon icon="mdi:arrow-down" width="28" height="28" />
            </span>
          </button>

          <button className="row" type="button">
            <span className="row-label">Pide</span>
            <span className="icon magenta" aria-hidden>
              <Icon icon="mdi:arrow-left" width="28" height="28" />
            </span>
          </button>

          {/* Envía -> abre popup de envío */}
          <button className="row" type="button" onClick={onIrAEnvio}>
            <span className="row-label">Envía</span>
            <span className="icon magenta" aria-hidden>
              <Icon icon="mdi:arrow-right" width="28" height="28" />
            </span>
          </button>

          <button className="row" type="button">
            <span className="row-label">Código QR</span>
            <span className="icon magenta" aria-hidden>
              <Icon icon="mdi:qrcode" width="26" height="26" />
            </span>
          </button>

          <button className="row" type="button">
            <span className="row-label">Recarga Nequi</span>
            <span className="icon magenta" aria-hidden>
              <Icon icon="mdi:arrow-up" width="28" height="28" />
            </span>
          </button>
        </div>

        {/* Cerrar */}
        <button className="close-fab" onClick={cerrar} aria-label="Cerrar">
          <Icon icon="mdi:close" width="30" height="30" />
        </button>
      </div>
    </div>
  );
}
