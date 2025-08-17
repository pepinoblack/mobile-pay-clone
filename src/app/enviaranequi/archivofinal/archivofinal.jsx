"use client";
import { useSearchParams, useRouter } from "next/navigation";
import "./archivofinal.css";
import { Icon } from "@iconify/react";

export default function ArchivoFinal() {
  const params = useSearchParams();
  const celular = params.get("celular");
  const monto = params.get("monto");
  const para = params.get("para");

  const fechaActual = new Date().toLocaleString("es-CO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const referencia = `M${Math.floor(Math.random() * 100000000)}`;
  const router = useRouter();

  const volverInicio = () => {
    router.push("/");
  };

  return (
    <div className="pagina-final">
      <header className="header-final">
        <Icon icon="mdi:arrow-left" className="icon-header" />
        <h1 className="titulo-final">Detalle del movimiento</h1>
        <div className="iconos-derecha">
          <Icon icon="mdi:help-circle-outline" className="icon-header" />
          <Icon icon="mdi:share-variant" className="icon-header" />
        </div>
      </header>

      <div className="padre-contenido-final">
        <main className="contenido-final">
          <p className="estado-envio-rojo"><span><svg id="flechaarrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="red" d="M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z" /></svg> </span>Envío Realizado</p>
          <img src="/qrnequi.png" alt="QR" className="qr-final" />
          <p className="scan-info">
            ¡Escanea este QR con Nequi para verificar tu envío al instante!
          </p>

          <div className="info-envio">
            <p>Para<br /><strong>{para}</strong></p>
            <p>¿Cuánto?<br /><strong>${monto}</strong></p>
            <p>Número Nequi<br /><strong>{celular}</strong></p>
            <p>Fecha<br /><strong>{fechaActual}</strong></p>
            <p>Referencia<br /><strong>{referencia}</strong></p>
            <p>¿De dónde salió la plata?<br /><strong>Disponible</strong></p>
          </div>
          <button className="btn-final" onClick={volverInicio}>Listo</button>
        </main>
      </div>
    </div>
  );
}
