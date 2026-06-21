import { useEffect, useState } from "react";

import DiaguitaDivider from "../components/DiaguitaDivider";

export default function Gastronomia() {
  const imagenes = [
    "/img/tukma/Tukma1.webp",
    "/img/tukma/Tukma2.webp",
    "/img/tukma/Tukma3.webp",
    "/img/tukma/Tukma4.jpg",
    "/img/tukma/Tukma5.jpg",
    "/img/tukma/Tukma6.jpg",
    "/img/tukma/Tukma7.png",
    "/img/tukma/Tukma8.webp",
    "/img/tukma/Tukma9.webp",
    "/img/tukma/Tukma10.webp",
  ];

  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const [mostrarTour, setMostrarTour] = useState(false);

  const [imagenActual, setImagenActual] = useState(0);

  const imagenesTour = [
    "/img/folleto/folleto1.jpeg",
    "/img/folleto/folleto2.jpeg",
    "/img/folleto/mapaTolombon.jpeg",
  ];

  return (
    <section className="section">
      <div className="tour-tolombon">
        <div>
          <img
            src="public\img\folleto\recepcionTolombon.png"
            alt="Recepcion Tolombón"
            className="tour-img"
          />
        </div>

        <h3 className="subtitulo-gastro">Tour por las ruinas de Tolombon</h3>
        <p className="section-text">
          Experiencia turística-cultural que propone un recorrido interpretativo
          por uno de los paisajes patrimoniales más significativos de los Valles
          Calchaquíes. A través de un circuito guiado por las Ruinas de Tolombón
          y otros espacios de valor histórico, los visitantes podrán conocer la
          ocupación ancestral del territorio, las formas de organización
          comunitaria y los procesos de resistencia indígena documentados por
          autores como Ana María Lorandi, Fradkin y Garavaglia. La propuesta
          incorpora recursos de realidad aumentada y contenidos inmersivos 360°
          accesibles mediante códigos QR, permitiendo visualizar
          reconstrucciones virtuales de viviendas, actividades cotidianas,
          sistemas productivos y personajes históricos vinculados a la memoria
          territorial de Tolombón, sustentadas en investigaciones arqueológicas
          recientes de María Cristina Scattolin. El recorrido invita además a
          interpretar el paisaje cultural como resultado de la interacción entre
          patrimonio arqueológico, producción agrícola y desarrollo turístico
          contemporáneo. La experiencia culmina con una degustación de
          gastronomía inspirada en ingredientes ancestrales y vinos regionales,
          integrando pasado y presente en una propuesta de turismo identitario.
          Desde una perspectiva patrimonial crítica, en línea con los aportes de
          Claudia Troncoso, la experiencia promueve una valoración responsable
          del patrimonio cultural, fortaleciendo el vínculo entre memoria,
          comunidad y desarrollo turístico sostenible en el Valle de Yocavil.
        </p>

        <button className="tour-btn" onClick={() => setMostrarTour(true)}>
          Ver itinerario completo
        </button>
      </div>
      <DiaguitaDivider />

      <div className="tapeos-container">
        <h3 className="subtitulo-gastro">
          Sabores con identidad del Valle de Yocavil
        </h3>

        <p className="section-text">
          La experiencia Tolombón Inmersivo propone completar el recorrido
          histórico y patrimonial con una propuesta gastronómica regional. Los
          tapeos elaborados con ingredientes locales permiten descubrir sabores
          vinculados al territorio, la memoria y las tradiciones de los pueblos
          originarios. Antes de degustar estos sabores, imaginemos el Valle de
          Yocavil hace más de cuatro siglos. Los Tolombones cultivaban maíz y
          quinoa en terrazas agrícolas, recolectaban algarroba de los montes
          cercanos y conservaban carne mediante el secado al sol para producir
          charqui. Estos alimentos no solo alimentaban a las familias; también
          hicieron posible una de las resistencias indígenas más prolongadas de
          la historia colonial argentina.
        </p>

        <div className="tapeo-card">
          <img src="/img/Tapeo1.png" alt="Tapeo Regional 1" />
        </div>

        <div className="tapeo-card">
          <img src="/img/Tapeo2.png" alt="Tapeo Regional 2" />
        </div>

        <div className="tapeo-card">
          <img src="/img/Tapeo3.png" alt="Tapeo Regional 3" />
        </div>

        <div className="tapeo-card">
          <img src="/img/Tapeo4.png" alt="Tapeo Regional 4" />
        </div>

        <div className="tapeo-card">
          <img src="/img/Tapeo5.png" alt="Tapeo Regional 5" />
        </div>
      </div>
      <DiaguitaDivider />

      <h3 className="subtitulo-gastro">Experiencia Enoturismo</h3>
      <p className="section-text">
        Nada mejor para acompañar esta propuesta que un vino de identidad local.
        Por ello sugerimos conocer los vinos de Bodega Tukma, proyecto que
        recupera la historia y la esencia del Valle de Yocavil. Diversos relatos
        tradicionales indican que Tukma era el nombre de un antiguo e importante
        cacique diaguita. Otras interpretaciones sostienen que el término puede
        traducirse como "valle rico" o "valle floreciente", una referencia
        directa a la fertilidad y riqueza cultural del territorio.
      </p>

      <div className="slider-tukma">
        <img
          src={imagenes[actual]}
          alt="Experiencia Tukma"
          className="slider-img"
        />
      </div>

      <div className="tukma-box">
        <h3>Una experiencia gastronómica acompañado de vinos locales</h3>

        <div className="tukma-links">
          <a
            href="https://www.instagram.com/bodegatukma/?hl=es-la"
            target="_blank"
            rel="noreferrer"
          >
            Instagram Bodega Tukma
          </a>

          <a href="https://casatukma.com/" target="_blank" rel="noreferrer">
            Sitio Oficial Casa Tukma
          </a>

          <a
            href="https://www.altalaluna.com/gastronomia"
            target="_blank"
            rel="noreferrer"
          >
            Gastronomía Alta La Luna
          </a>
        </div>
      </div>

      {mostrarTour && (
        <div className="tour-modal" onClick={() => setMostrarTour(false)}>
          <div
            className="tour-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tour-close"
              onClick={() => setMostrarTour(false)}
            >
              ✕
            </button>

            <h2>Tour por las Ruinas</h2>

            <img src="/img/folleto/folleto1.jpeg" alt="Folleto Página 1" />

            <img src="/img/folleto/folleto2.jpeg" alt="Folleto Página 2" />

            <img src="/img/folleto/mapaTolombon.jpeg" alt="Mapa Tolombón" />
          </div>
        </div>
      )}
      {mostrarTour && (
        <div className="tour-modal" onClick={() => setMostrarTour(false)}>
          <div
            className="tour-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tour-close"
              onClick={() => setMostrarTour(false)}
            >
              ✕
            </button>

            <img
              src={imagenesTour[imagenActual]}
              alt="Itinerario Tolombón"
              className="tour-slide"
            />

            <div className="tour-navigation">
              <button
                onClick={() =>
                  setImagenActual(
                    imagenActual === 0
                      ? imagenesTour.length - 1
                      : imagenActual - 1,
                  )
                }
              >
                ◀
              </button>

              <span>
                {imagenActual + 1} / {imagenesTour.length}
              </span>

              <button
                onClick={() =>
                  setImagenActual(
                    imagenActual === imagenesTour.length - 1
                      ? 0
                      : imagenActual + 1,
                  )
                }
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
