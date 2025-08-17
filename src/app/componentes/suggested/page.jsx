// suggested.jsx
import "./style.css";

export default function Suggested() {
  const sug = [
    { label: "Bre-B", img: "/bre-b.png" },
    { label: "Claro", img: "/claro.png" },
    { label: "Recarga de celular", img: "/recargar.png" },
    { label: "Tigo", img: "/tigo.png" },
  ];

  return (
    <div className="suggested">
      <h3>Sugeridos Nequi</h3>
      <div className="suggest-grid">
        {sug.map((s) => (
          <div key={s.label} className="suggest-item">
            <div className="suggest-icon">
              <img src={s.img} alt={s.label} />
            </div>
            <span className="suggest-text">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

