"use client";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "./confirmar.css";
import LoaderNequi from "./loadernequi";
import { useRouter } from "next/navigation";
import { obtenerNombreAleatorioCensurado } from "../../utils/nombres";

export default function Confirmar({ celular, monto, onCerrar }) {
  const [cargando, setCargando] = useState(false);
  const [nombrePara, setNombrePara] = useState("");
  const router = useRouter();

  // ✅ Generar nombre censurado aleatorio al montar
  useEffect(() => {
    const nombre = obtenerNombreAleatorioCensurado();
    setNombrePara(nombre);
  }, []);

  const manejarConfirmacion = () => {
    setCargando(true);

    const montoNumerico = parseInt(monto.replace(/\D/g, ""), 10);
    const saldoActual = parseInt(localStorage.getItem("montoDisponible") || "0", 10);
    const nuevoDisponible = saldoActual - montoNumerico;
    localStorage.setItem("montoDisponible", nuevoDisponible.toString());

    // ✅ Incluir nombrePara en la URL
    setTimeout(() => {
      router.push(
        `/enviaranequi/archivofinal?celular=${encodeURIComponent(celular)}&monto=${encodeURIComponent(monto)}&disponible=${nuevoDisponible}&para=${encodeURIComponent(nombrePara)}`
      );
    }, 2000);
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        {!cargando ? (
          <>
            <div className="popup-header">
              <div className="popup-bar"></div>
              <button className="popup-close" onClick={onCerrar}>
                <Icon icon="mdi:close" width="22" />
              </button>
            </div>
            <h2 className="popup-titulo">Confirma el número</h2>

            {nombrePara && (
              <>
                <p className="popup-sub">Para:</p>
                <p className="popup-dato rosa">{nombrePara}</p>
              </>
            )}

            <p className="popup-sub">Al número de celular:</p>
            <p className="popup-dato rosa">{celular}</p>
            <p className="popup-sub">¿Cuánto?</p>
            <p className="popup-dato">${monto}</p>
            <p className="popup-sub">La plata saldrá de:</p>
            <div className="cuenta-disponible">
              <img src="/cuadro.png" alt="icono" />
              <span>Disponible</span>
            </div>
            <button className="btn-confirmar" onClick={manejarConfirmacion}>
              Confirma
            </button>
            <button className="btn-corrige" onClick={onCerrar}>
              Corrige algo
            </button>
          </>
        ) : (
          <LoaderNequi />
        )}
      </div>
    </div>
  );
}
