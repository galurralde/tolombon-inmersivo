export default function Bibliografia() {
  return (
    <section className="section">
      <h2 className="section-title">Fuentes de Consultas</h2>

      <h3 className="subsection-title">Videoteca de Consulta</h3>

      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/cIfF7gTT2pg"
          title="Tolombón - Reconstrucción Virtual"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-caption">
        <p>
          <strong>
            Reconstrucción hipotética de la llacta diaguita con ocupación inca
            Tolombón
          </strong>
          , ubicada en la provincia de Salta, Argentina.
        </p>

        <p>
          Realizada en el curso de Arquitectura Peruana, a cargo del arquitecto
          Carlos Enrique Guzmán (UPC, Lima, Perú).
        </p>

        <p>
          Realización: Katherine Chempen Alvarez, Margiory Román, Sebastián
          Asto, Eva Ynga y Nataly Bernal Lopez (junio 2022).
        </p>

        <p>
          Material audiovisual utilizado con fines educativos, patrimoniales y
          de divulgación histórica.
        </p>
      </div>

      <h3 className="subsection-title">Bibliografía Académica</h3>
      <div className="bibliografia-tabla">
        <div className="biblio-item">
          <p>
            Fradkin, R. y Garavaglia, J. C. (2009).
            <em>
              {" "}
               La Argentina colonial: El Río de la Plata entre los siglos XVI y XIX

            </em>
            . Siglo XXI Editores.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Lorandi, A. M. (1988).
            <em>
              {" "}
Los Diaguitas y el Tawantinsuyu: Una hipótesis de conflicto.

            </em>
            BAR International Series, 442, 235-259.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Scattolin, M. C., Bugliani, M. F., Izeta, A. D., Lazzari, M., Pereyra Domingorena, L. y Cortés, L. I. (2023)
            <em> . Habitaciones, fogones y vasijas: Arqueología de la vida cotidiana en el Pucará de Tolombón (Salta, Argentina)</em>.
            . Revista de Arqueología Sudamericana, 19(2), 45-68.
          </p>
        </div>

        <div className="biblio-item">
          <p>
Troncoso, C. (2023). 
            <em> Promoción turística, imágenes oficiales y la construcción de la alteridad en la provincia de Salta</em>. Editorial de la Universidad Nacional de Salta.
          </p>
        </div>

        
      </div>
    </section>
  );
}
