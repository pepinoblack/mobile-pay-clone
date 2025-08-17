// favorites.jsx
import "./style.css";

export default function Favorites() {
  const favs = [
    { label: "Mi Negocio", img: "/negocios.png" },
    { label: "Tus llaves", img: "/llave.png" },
    { label: "WOM", img: "/wom.png" },
    { label: "Créditos", img: "/creditos.png" },
  ];

  return (
    <div className="favorites">
      <div className="favorites-header">
        <h3 className="title">
          <span className="heart">♡</span> Tus favoritos
        </h3>
        <button className="edit-btn" aria-label="Editar favoritos">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 17.25V21h3.75l11-11.03l-3.75-3.75L3 17.25ZM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83l3.75 3.75l1.84-1.82Z" />
          </svg>
        </button>
      </div>

      <div className="fav-row">
        {favs.map((f) => (
          <div key={f.label} className="fav-item">
            <div className="fav-icon">
              <img src={f.img} alt={f.label} />
            </div>
            <span className="fav-text">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

