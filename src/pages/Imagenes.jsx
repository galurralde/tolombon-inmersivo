import { useState } from "react";

export default function Imagenes() {

  const [imagenActiva, setImagenActiva] = useState(null);

  const imagenes = [
    {
      src: "/img/galeriaFotos/RutaTolombon.jpeg",
      titulo: "Ruta hacia Tolombón"
    },
    {
      src: "/img/galeriaFotos/ValleYocavil.jpeg",
      titulo: "Valle de Yocavil"
    },
    {
      src: "/img/galeriaFotos/PlazaTolombon.jpeg",
      titulo: "Plaza de Tolombón"
    }
  ];

  return (
    <section className="section">

      <h2 className="section-title">
        Galería Fotográfica
      </h2>

      <p className="section-text">
        Imágenes representativas del territorio, el patrimonio cultural
        y los paisajes que forman parte de la experiencia Tolombón Inmersivo.
      </p>

      <div className="galeria-grid">

        {imagenes.map((img, index) => (
          <div
            key={index}
            className="galeria-card"
            onClick={() => setImagenActiva(img)}
          >
            <img
              src={img.src}
              alt={img.titulo}
            />

            <div className="galeria-overlay">
              <span>{img.titulo}</span>
            </div>

          </div>
        ))}

      </div>

      {imagenActiva && (

        <div
          className="modal-galeria"
          onClick={() => setImagenActiva(null)}
        >

          <div
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="cerrar-modal"
              onClick={() => setImagenActiva(null)}
            >
              ✕
            </button>

            <img
              src={imagenActiva.src}
              alt={imagenActiva.titulo}
            />

            <h3>{imagenActiva.titulo}</h3>

          </div>

        </div>

      )}

    </section>
  );
}