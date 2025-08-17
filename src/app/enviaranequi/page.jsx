"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Confirmar from "./confirmar";
import "./style.css";

export default function EnviaraNequi() {
  const [cel, setCel] = useState("");
  const [monto, setMonto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarNotif, setMostrarNotif] = useState(false);
  const [notiMostrada, setNotiMostrada] = useState(false);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const montoDisponible = 1000000000;

  const formatCel = (val) =>
    val
      .replace(/\D/g, "")
      .slice(0, 10)
      .replace(/(\d{3})(\d{0,3})(\d{0,4})/, (_, a, b, c) =>
        [a, b, c].filter(Boolean).join(" ")
      );

  const formatMonto = (val) => {
    const limpio = val.replace(/\D/g, "").slice(0, 9); // 👉 Limita a 9 dígitos = 999.999.999
    return limpio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    let timer;
    if (mostrarNotif) {
      timer = setTimeout(() => setMostrarNotif(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [mostrarNotif]);

  const montoNumerico = parseInt(monto.replace(/\D/g, "")) || 0;
  const habilitado = montoNumerico > 0 && montoNumerico <= montoDisponible;

  const handleFocus = () => {
    if (!notiMostrada) {
      setMostrarNotif(true);
      setNotiMostrada(true);
    }
  };

  return (
    <div className="enviaranequi-page">
      <header className="enviaranequi-header">
        <button className="back-btn" onClick={() => window.history.back()}>
          <Icon icon="mdi:arrow-left" width="26" />
        </button>
        <h1>Envía plata</h1>
      </header>

      <main className="enviaranequi-main">
        <div className="campo">
          <div className="input-cel">
            <input
              maxLength={13}
              placeholder="Cel"
              value={cel}
              onChange={(e) => setCel(formatCel(e.target.value))}
            />
            <Icon icon="mdi:account-plus-outline" className="icono-input" />
          </div>
          <p className="ayuda-texto">
            Revisa bien el número para enviarle a la persona correcta
          </p>
        </div>

        <div className="campo">
          <input
            type="text"
            placeholder="¿Cuánto?"
            value={monto}
            onChange={(e) => setMonto(formatMonto(e.target.value))}
            onFocus={handleFocus}
            maxLength={15} // Por si acaso, en texto
          />
        </div>

        <div className="campo">
          <input
            type="text"
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <p className="titulo-cuenta">Escoge de donde saldrá la plata</p>
        <div className="cuenta-disponible">
          <img src="/cuadro.png" alt="icono" />
          <span>Disponible</span>
          <Icon icon="mdi:chevron-right" width="22" />
        </div>

        {mostrarNotif && (
          <div className="alerta" onClick={() => setMostrarNotif(false)}>
            <Icon icon="mdi:information-outline" width="20" />
            <p>
              Revisa bien esta info, porque si le envías la plata a la persona
              incorrecta en Nequi no podremos recuperarla.
            </p>
          </div>
        )}
      </main>

      <button
        className={`btn-sigue ${habilitado ? "activo" : ""}`}
        disabled={!habilitado}
        onClick={() => setMostrarPopup(true)}
      >
        Sigue
      </button>

      {mostrarPopup && (
        <Confirmar
          celular={cel}
          monto={monto}
          disponible={montoDisponible}
          onCerrar={() => setMostrarPopup(false)}
        />
      )}
    </div>
  );
}
