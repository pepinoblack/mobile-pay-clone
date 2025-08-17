"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import "./popupenvio.css";

export default function PopupEnvio({ abierto, onClose }) {
  const router = useRouter();

  if (!abierto) return null;

  const stop = (e) => e.stopPropagation();
    return (
        <div className="popupenvio-overlay" role="dialog" aria-modal="true" onClick={onClose}>
            <div className="popupenvio-sheet popupenvio-anim" onClick={stop}>
                {/* handle superior */}
                <div className="popupenvio-handle" />

                {/* header y botón X */}
                <div className="popupenvio-header">
                    <h3 className="popupenvio-title">Opciones para enviar</h3>
                    <button className="popupenvio-x" onClick={onClose} aria-label="Cerrar">
                        <Icon icon="mdi:close" width="22" height="22" />
                    </button>
                </div>

                {/* lista */}
                <div className="popupenvio-list">
                    {/* Nequi */}
                    <button className="envio-card" type="button" onClick={() => router.push("/enviaranequi")}>
                        <span className="envio-ico">
                            <Icon icon="mdi:account-multiple-outline" width="24" height="24" />
                        </span>
                        <span className="envio-text">
                            <span className="envio-title">Nequi</span>
                            <span className="envio-sub">Número de celu</span>
                        </span>
                        <span className="envio-right">
                            <Icon icon="mdi:chevron-right" width="22" height="22" />
                        </span>
                    </button>

                    {/* A Bancolombia */}
                    <button className="envio-card" type="button">
                        <span className="envio-ico">
                            <Icon icon="ph:paper-plane-tilt" width="24" height="24" />
                        </span>
                        <span className="envio-text">
                            <span className="envio-title">A Bancolombia</span>
                            <span className="envio-sub">Cuentas</span>
                        </span>
                        <span className="envio-right">
                            <Icon icon="mdi:chevron-right" width="22" height="22" />
                        </span>
                    </button>

                    {/* Enviar con llaves + badge "Nuevo" */}
                    <button className="envio-card" type="button">
                        <span className="envio-ico">
                            <Icon icon="mdi:key-outline" width="24" height="24" />
                        </span>
                        <span className="envio-text">
                            <span className="envio-title">Enviar con llaves</span>
                            <span className="envio-sub">A otros bancos en segundos</span>
                        </span>
                        <span className="envio-badge">Nuevo</span>
                        <span className="envio-right">
                            <Icon icon="mdi:chevron-right" width="22" height="22" />
                        </span>
                    </button>

                    {/* Transfiya */}
                    <button className="envio-card" type="button">
                        <span className="envio-ico">
                            <Icon icon="mdi:cellphone" width="24" height="24" />
                        </span>
                        <span className="envio-text">
                            <span className="envio-title">Transfiya</span>
                            <span className="envio-sub">Número de celu a otros bancos</span>
                        </span>
                        <span className="envio-right">
                            <Icon icon="mdi:chevron-right" width="22" height="22" />
                        </span>
                    </button>

                    {/* A otros bancos */}
                    <button className="envio-card" type="button">
                        <span className="envio-ico">
                            <Icon icon="mdi:bank-outline" width="24" height="24" />
                        </span>
                        <span className="envio-text">
                            <span className="envio-title">A otros bancos</span>
                            <span className="envio-sub">Número de cuenta</span>
                        </span>
                        <span className="envio-right">
                            <Icon icon="mdi:chevron-right" width="22" height="22" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
