export default function WebAR() {
  return (
    <section className="section">

      <h2 className="section-title">
        Experiencia WebAR
      </h2>

      <p className="section-text">
        Escaneá el marcador para visualizar el patrimonio de Tolombón
        mediante realidad aumentada.
      </p>

      <div className="webar-container">

        <h3>Marcador AR</h3>

        <img
          src="/ar/guerrero.png"
          alt="Marcador Tolombón"
          className="marcador-img"
        />

        <h3>Modelo 3D</h3>

        <model-viewer
          src="/ar/jarron.glb"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{
            width: "100%",
            height: "500px"
          }}
        >
        </model-viewer>

        <h3>Audio Narrativo</h3>

        <audio controls>
          <source src="/ar/personaje.mp3" type="audio/mpeg" />
        </audio>

      </div>

    </section>
  );
}