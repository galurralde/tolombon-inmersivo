import DiaguitaDivider from "../components/DiaguitaDivider";

export default function WebAR() {
  return (
    <section className="section">
      <h2 className="section-title">Experiencia WebAR</h2>

      <p className="section-text">
        Escaneá los marcadores para visualizar contenidos patrimoniales mediante
        Realidad Aumentada.
      </p>

      <DiaguitaDivider />

      {/* PARADA 1 */}

      <div className="ar-card">
        <h3>Parada 1: El Umbral del Territorio Autónomo</h3>

        <p>
          Comprender la importancia estratégica del Valle de Yocavil, los
          sistemas agrícolas y las causas del conflicto entre las comunidades
          diaguita-calchaquíes y el sistema colonial.
        </p>

        <h4>Marcador AR</h4>

        <img
          src="/ar/parada1/marcador1.png"
          alt="Marcador Parada 1"
          className="ar-marker"
        />

        <h4>Modelo 3D</h4>
        <p>El colorado Fogones excavacion</p>

        <model-viewer
          src="/ar/parada1/modelo1.glb"
          camera-controls
          auto-rotate
          className="ar-model"
        />

        <h4>Audio Narrativo</h4>

        <audio controls>
          <source src="/ar/parada1/audio1.mp3" type="audio/mpeg" />
        </audio>
      </div>

      <DiaguitaDivider />

      {/* PARADA 2 */}

      <div className="ar-card">
        <h3>Parada 2: La Vida Cotidiana en Tolombón</h3>

        <p>
          Organización familiar y comunitaria, producción cerámica,
          almacenamiento de alimentos y tecnología agrícola local.
        </p>

        <h4>Marcador AR</h4>

        <img
          src="/ar/parada2/marcador2.png"
          alt="Marcador Parada 2"
          className="ar-marker"
        />

        <h4>Modelo 3D</h4>
        <p>
          Puco Diaguita. con decoracion de personajes antropomorfos que llevan
          camelidos por medio de una soga - Inventario N°4927
        </p>

        <model-viewer
          src="/ar/parada2/modelo2.glb"
          camera-controls
          auto-rotate
          className="ar-model"
        />

        <h4>Audio Narrativo</h4>

        <audio controls>
          <source src="/ar/parada2/audio2.mp3" type="audio/mpeg" />
        </audio>
      </div>

      <DiaguitaDivider />

      {/* PARADA 3 */}

      <div className="ar-card">
        <h3>Parada 3: El Pucará y la Resistencia Calchaquí</h3>

        <p>
          Liderazgo de Pivanti, estrategias militares y resistencia indígena
          frente al avance colonial.
        </p>

        <h4>Marcador AR</h4>

        <img
          src="/ar/parada3/marcador3.png"
          alt="Marcador Parada 3"
          className="ar-marker"
        />

        <h4>Modelo 3D</h4>
        <p>
          Las piedras tacitas (conocidas tambien como morteros comunitarios) son
          un elemento material frecuente en muchas comunidades. El uso de estos
          soportes para el procesamientos de vegetales (principalmente molienda) habria sufrido un incremento asociado a la intensificacion de las practicas de recoleccion y el uso de recursos naturales.
        </p>

        <model-viewer
          src="/ar/parada3/modelo3.glb"
          camera-controls
          auto-rotate
          className="ar-model"
        />

        <h4>Audio Narrativo</h4>

        <audio controls>
          <source src="/ar/parada3/audio3.mp3" type="audio/mpeg" />
        </audio>
      </div>

      <DiaguitaDivider />

      {/* PARADA 4 */}

      <div className="ar-card">
        <h3>Parada 4: Memoria, Identidad y Territorio Vivo</h3>

        <p>
          Relación entre patrimonio arqueológico, comunidad indígena de Tolombón
          e identidad territorial contemporánea.
        </p>

        <h4>Marcador AR</h4>

        <img
          src="/ar/parada4/marcador4.png"
          alt="Marcador Parada 4"
          className="ar-marker"
        />

        <h4>Modelo 3D</h4>
        <p>
          Objeto en piedra con pigmento rojo. Objeto perteneciente al museo Inti
          Quilla de punta de Balasto.
        </p>

        <model-viewer
          src="/ar/parada4/modelo4.glb"
          camera-controls
          auto-rotate
          className="ar-model"
        />

        <h4>Audio Narrativo</h4>

        <audio controls>
          <source src="/ar/parada4/audio4.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
}
