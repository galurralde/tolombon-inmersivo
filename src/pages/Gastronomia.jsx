export default function Gastronomia() {
  return (
    <section className="section">

      <h2 className="section-title">
        Experiencia Gastronómica
      </h2>

      <p className="section-text">
        "Antes de degustar estos sabores, imaginemos el Valle de Yocavil
        hace más de cuatro siglos. Los Tolombones cultivaban maíz y quinoa
        en terrazas agrícolas, recolectaban algarroba de los montes
        cercanos y conservaban carne mediante el secado al sol para
        producir charqui. Estos alimentos no solo alimentaban a las
        familias; también hicieron posible una de las resistencias
        indígenas más prolongadas de la historia colonial argentina.
        Cada plato que hoy degustamos recupera ingredientes que
        acompañaron la vida cotidiana, las ceremonias y la defensa
        del territorio de los pueblos diaguita-calchaquíes."
      </p>

      <div className="galeria-gastronomica">

        <div className="card-gastro">
          <img src="/img/Tapeo1.png" alt="Tapeo 1" />
        </div>

        <div className="card-gastro">
          <img src="/img/Tapeo2.png" alt="Tapeo 2" />
        </div>

        <div className="card-gastro">
          <img src="/img/Tapeo3.png" alt="Tapeo 3" />
        </div>

        <div className="card-gastro">
          <img src="/img/Tapeo4.png" alt="Tapeo 4" />
        </div>

        <div className="card-gastro">
          <img src="/img/Tapeo5.png" alt="Tapeo 5" />
        </div>

      </div>

    </section>
  );
}