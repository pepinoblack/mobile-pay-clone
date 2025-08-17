"use client";
import "./style.css";
import { useEffect, useState } from "react";

export default function Navbar({ username }) {
  const [hidden, setHidden] = useState(false);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    let montoGuardado = localStorage.getItem("montoDisponible");

    // ✅ Si no hay monto guardado, se establece 100 millones
    if (!montoGuardado) {
      montoGuardado = "78665895";
      localStorage.setItem("montoDisponible", montoGuardado);
    }

    setBalance(parseFloat(montoGuardado));

    const actualizarBalance = () => {
      const nuevoMonto = parseFloat(localStorage.getItem("montoDisponible") || "0");
      setBalance(nuevoMonto);
    };

    window.addEventListener("storage", actualizarBalance);
    return () => window.removeEventListener("storage", actualizarBalance);
  }, []);

  const formatted = hidden
    ? "••••••"
    : balance !== null
    ? balance.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      })
    : "Cargando...";

  return (
    <div className="padre">
      <div className="navbar">
        <div className="left">
          <div className="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="#fff6f6" strokeWidth="1">
                <path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                <circle cx="12" cy="7" r="3" />
              </g>
            </svg>
          </div>
          <div className="hello flex">
            <p>Hola,</p>
            <h2>{username}</h2>
          </div>
        </div>

        <div className="right">
          <button className="icon-btn" aria-label="Notificaciones">
            <svg viewBox="0 0 24 24">
              <path d="M6 8a6 6 0 1112 0v5l2 2H4l2-2z" />
              <path d="M9 19a3 3 0 006 0" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Ayuda">
            <svg viewBox="0 0 24 24">
              <path d="M12 18h.01M9.09 9a3 3 0 115.82 1c0 2-3 2-3 4" />
              <circle cx="12" cy="12" r="10" fill="none" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Seguridad">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 118 0v3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="balance">
        <div className="label">
          <span>Depósito Alto Monto</span>
          <button onClick={() => setHidden(!hidden)} className="eye-btn">
            {hidden ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36">
                <path fill="#fff" d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43" />
                <circle cx="18.09" cy="18.03" r="6.86" fill="#fff" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36">
                <path fill="#fff" d="M18.37 11.17a6.8 6.8 0 0 0-2.37.43l8.8 8.8a6.8 6.8 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.83" />
                <path fill="#fff" d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.8 16.8 0 0 0-5.24.85L14.84 10a14.8 14.8 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.8 17.8 0 0 1-4.37 5.1l1.42 1.42a19.9 19.9 0 0 0 5-6l.26-.48Z" />
                <path fill="#fff" d="m4.87 5.78l4.46 4.46a19.5 19.5 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.9 16.9 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm8.3 8.3a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.9 14.9 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.3 17.3 0 0 1 6.12-6.3Z" />
              </svg>
            )}
          </button>
        </div>
        <h1>{formatted}</h1>
        <p>Total {formatted}</p>
        <button className="tuplata">Tu plata ▾</button>
      </div>
    </div>
  );
}
