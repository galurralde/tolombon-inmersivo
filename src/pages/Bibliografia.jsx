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
            Castellanos, M. C., & Williams, V. I. (2023).
            <em>
              {" "}
              Circuitos de interacción y evidencias materiales entre las
              quebradas altas del Valle Calchaquí y la Puna (siglos X-XVI)
            </em>
            . Relaciones de la Sociedad Argentina de Antropología, 48(Número
            Especial 2), 127-151.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Lorandi, A. M. (1988).
            <em>
              {" "}
              La resistencia y rebeliones de los diaguito-calchaquíes en los
              siglos XVI y XVII
            </em>
            . Cuadernos de Historia, 8, 99-121.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Mandrini, R. (2013).
            <em> La Argentina aborigen. De los primeros pobladores a 1910</em>.
            Siglo XXI Editores.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Mandrini, R. (2008).
            <em> Los pueblos originarios de la Argentina</em>. Sudamericana.
          </p>
        </div>

        <div className="biblio-item">
          <p>
            Williams, V. I. (2019).
            <em>
              {" "}
              Paisajes, poblaciones y organización social en los Valles
              Calchaquíes
            </em>
            . Universidad de Buenos Aires.
          </p>
        </div>
      </div>
    </section>
  );
}
