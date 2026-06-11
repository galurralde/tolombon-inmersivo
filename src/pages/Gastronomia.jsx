import { useEffect, useState } from "react";

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

  return (
    <section className="section">
      <div className="tapeos-container">
        <h3 className="subtitulo-gastro">
          Sabores con identidad del Valle de Yocavil
        </h3>

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

      <h2 className="section-title">Experiencia Gastronómica</h2>

      <p className="section-text">
        Antes de degustar estos sabores, imaginemos el Valle de Yocavil hace más
        de cuatro siglos. Los Tolombones cultivaban maíz y quinoa en terrazas
        agrícolas, recolectaban algarroba de los montes cercanos y conservaban
        carne mediante el secado al sol para producir charqui. Estos alimentos
        no solo alimentaban a las familias; también hicieron posible una de las
        resistencias indígenas más prolongadas de la historia colonial
        argentina.
      </p>

      <div className="slider-tukma">
        <img
          src={imagenes[actual]}
          alt="Experiencia Tukma"
          className="slider-img"
        />
      </div>

      <div className="tukma-box">
        <h3>Una experiencia gastronómica con identidad del Valle Calchaquí</h3>

        <p>
          La experiencia Tolombón Inmersivo propone completar el recorrido
          histórico y patrimonial con una propuesta gastronómica regional. Los
          tapeos elaborados con ingredientes locales permiten descubrir sabores
          vinculados al territorio, la memoria y las tradiciones de los pueblos
          originarios.
        </p>

        <p>
          Nada mejor para acompañar esta propuesta que un vino de identidad
          local. Por ello sugerimos conocer los vinos de Bodega Tukma, proyecto
          que recupera la historia y la esencia del Valle de Yocavil.
        </p>

        <p>
          Diversos relatos tradicionales indican que Tukma era el nombre de un
          antiguo e importante cacique diaguita. Otras interpretaciones
          sostienen que el término puede traducirse como "valle rico" o "valle
          floreciente", una referencia directa a la fertilidad y riqueza
          cultural del territorio.
        </p>

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
    </section>
  );
}
