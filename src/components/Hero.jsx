import { useState } from "react";

export default function Hero() {
  const [mostrarProyecto, setMostrarProyecto] = useState(false);

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

          <button
            className="btn-secondary"
            onClick={() => setMostrarProyecto(true)}
          >
            Conocer el Proyecto
          </button>
        </div>
      </div>

      {mostrarProyecto && (
        <div
          className="proyecto-modal"
          onClick={() => setMostrarProyecto(false)}
        >
          <div
            className="proyecto-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="proyecto-close"
              onClick={() => setMostrarProyecto(false)}
            >
              ✕
            </button>

            <h2>Tolombón Inmersivo</h2>

            <h3>"Una experiencia que resignifica la historia"</h3>

            <p>
              <strong>Vive el patrimonio como nunca antes</strong>
            </p>

            <p>
              Las Ruinas de Tolombón no son solo vestigios arqueológicos: son
              territorios vivos que cuentan la resistencia de las comunidades
              Diaguita-Calchaquí y su memoria frente a la conquista.
            </p>

            <p>
              Tolombón Inmersivo te invita a recorrer el Valle Calchaquí desde
              una mirada crítica y participativa, integrando historia,
              tecnología y comunidad en un producto turístico único.
            </p>

            <h4>¿A quién está dirigido?</h4>

            <ul>
              <li>
                Estudiantes universitarios que buscan experiencias educativas y
                rigurosas.
              </li>

              <li>
                Turistas culturales interesados en propuestas auténticas y con
                sentido histórico.
              </li>

              <li>
                Interesados en la historia regional que desean profundizar en
                las memorias del territorio.
              </li>

              <li>
                Visitantes interpretativos que prefieren alternativas éticas y
                sostenibles, lejos del turismo masivo.
              </li>
            </ul>

            <h4>Lo que vas a encontrar</h4>

            <ul>
              <li>Recorridos inmersivos con narrativas críticas.</li>
              <li>Tecnología aplicada a la interpretación patrimonial.</li>
              <li>
                Participación comunitaria que da voz a los protagonistas
                locales.
              </li>
              <li>Una experiencia cultural transformadora y sostenible.</li>
            </ul>

            <div className="proyecto-cta">
              👉 Explora Tolombón Inmersivo y sé parte de una nueva forma de
              vivir la historia.
            </div>

            <button
              className="proyecto-btn"
              onClick={() => setMostrarProyecto(false)}
            >
              Continuar explorando
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
