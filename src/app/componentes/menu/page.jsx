"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";
import Popup from "./popup";
import PopupEnvio from "./popupenvio";

export default function BottomMenu() {
  const items = [
    { key: "home", label: "Inicio", active: true },
    { key: "moves", label: "Movimientos", active: false },
    { key: "services", label: "Servicios", active: false },
  ];

  // Estados de los popups
  const [AbrirPopup, SetAbrirPopup] = useState(false);
  const [AbrirPopupEnvio, SetAbrirPopupEnvio] = useState(false);
  const [disponible, setDisponible] = useState(0);

  // Inicializar el monto desde localStorage
  useEffect(() => {
    const montoGuardado = localStorage.getItem("montoDisponible");
    if (!montoGuardado) {
      localStorage.setItem("montoDisponible", "100000000"); // ← MONTO POR DEFECTO
      setDisponible(100000000);
    } else {
      setDisponible(parseInt(montoGuardado));
    }
  }, []);

  // Abre/cierra el popup principal. Si estaba abierto el de Envío, lo cerramos.
  const Abrir = () => {
    SetAbrirPopup((prev) => {
      const next = !prev;
      if (next) SetAbrirPopupEnvio(false);
      return next;
    });
  };

  // Cierra todo (útil para overlays y "X")
  const cerrarTodo = () => {
    SetAbrirPopup(false);
    SetAbrirPopupEnvio(false);
  };

  // Se llama desde <Popup /> cuando presionas "Envía"
  const irAEnvio = () => {
    SetAbrirPopup(false);
    SetAbrirPopupEnvio(true);
  };

  return (
    <>
      <nav className="bottom-menu">
        {/* Oculta el menú inferior cuando cualquiera de los popups esté abierto */}
        {!AbrirPopup && !AbrirPopupEnvio && (
          <div className="menu-items">
            {items.map((item) => (
              <button
                key={item.key}
                className={`menu-item ${item.active ? "active" : ""}`}
                aria-current={item.active ? "page" : undefined}
              >
                {/* Iconos */}
                {item.key === "home" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z"
                    />
                  </svg>
                )}

                {item.key === "moves" && (
                  <svg width="22" height="22" viewBox="-4 -2 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2m0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2"
                    />
                  </svg>
                )}

                {item.key === "services" && (
                  <Icon icon="mdi:apps" width="22" height="22" />
                )}

                <span className="label">{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Botón $ */}
        <button onClick={Abrir} className="money-btn" aria-label="Acciones de dinero">
          <svg width="40" height="40" viewBox="0 0 56 56" aria-hidden="true">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M29 30v10c3.519-.316 5-2.287 5-4.89c0-2.507-1.152-3.99-5-5.11m-3-5v-9c-3.273.415-5 2.33-5 4.43s1.364 3.647 5 4.57m2.84.737l1.072.277C35.784 27.423 39 29.917 39 34.836c0 5.658-4.466 8.868-10.16 9.284V48h-2.523v-3.88c-5.672-.439-10.16-3.741-10.317-9.284h4.622c.402 2.702 2.1 4.688 5.695 5.08V29.849l-.916-.231c-5.672-1.363-8.731-3.996-8.731-8.684c0-5.173 4.02-8.591 9.647-9.03V8h2.523v3.903c5.582.462 9.624 3.926 9.803 9.169h-4.645c-.29-2.91-2.3-4.596-5.158-4.966z"
            />
          </svg>
        </button>
      </nav>

      {/* Popups */}
      <Popup AbrirPopup={AbrirPopup} SetAbrirPopup={SetAbrirPopup} onIrAEnvio={irAEnvio} />
      <PopupEnvio abierto={AbrirPopupEnvio} onClose={cerrarTodo} />
    </>
  );
}
