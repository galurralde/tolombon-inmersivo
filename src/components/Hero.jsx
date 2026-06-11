export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Turismo Cultural + Realidad Aumentada
        </span>

        <h2>
          Descubrí la historia del Pueblo Tolombón mediante experiencias
          inmersivas
        </h2>

        <p>
          Un recorrido interactivo por las Guerras Calchaquíes, la memoria
          territorial y el patrimonio cultural del Valle de Yocavil.
        </p>

        <div className="hero-buttons">
          <button onClick={() => window.open("/ar/index.html", "_blank")}>
            📷 Abrir Cámara AR
          </button>

          <button className="btn-secondary">Conocer el Proyecto</button>
        </div>
      </div>
    </main>
  );
}
