import DiaguitaDivider from "../components/DiaguitaDivider";
import Patrimonio from "../components/Patrimonio";

export default function Historia() {
  return (
    <section className="section">
      <Patrimonio />

      <div className="autor-historia">
        <img src="/img/autor/Lorandi.jpeg" alt="Ana María Lorandi" />

        <div>
          <h3>Ana María Lorandi</h3>

          <span>
            Arqueóloga, investigadora del CONICET y docente universitaria
          </span>

          <p>
            "...el éxito de la resistencia activa en el valle Calchaquí
            consistió justamente en que fue un pueblo que entendió que con estos
            nuevos invasores la pérdida del poder político arrastraba también la
            capacidad de autogestión en todos los planos de la vida comunitaria
            e individual." (Lorandi, 1988, p. 109).
          </p>
        </div>
      </div>

      <DiaguitaDivider />

      <div className="autor-historia">
        <img
          src="/img/autor/FradkinGaravaglia.jpeg"
          alt="Fradkin y Garavaglia"
        />

        <div>
          <h3>Fradkin y Garavaglia</h3>

          <span>
            Historiadores e investigadores del CONICET y docentes de la
            Universidad Nacional de Cuyo
          </span>

          <p>
            "La resistencia indígena fue muy importante en toda el área y ello
            obligó a los españoles a conformarse con situar sus primeros
            poblados en las llanuras bajas... Los españoles no harían más que
            calcar la conducta que habían tenido un siglo antes los incas, que
            sólo habían conseguido dominar parcialmente a los grupos étnicos
            valliserranos." (Fradkin y Garavaglia, 2009, p. 42-43) (Fradkin,
            2009).
          </p>
        </div>
      </div>

      <DiaguitaDivider />

      <div className="autor-historia">
        <img src="/img/autor/Scattolin.jpeg" alt="Scattolin" />

        <div>
          <h3>Maria Cristina Scattolin</h3>

          <span>
            Historiadora, docente Asociada de la Universidad Nacional de La
            Plata (UNLP) e Investigadora Principal del CONICET
          </span>

          <p>
            "Todas estas piezas, correspondientes al tipo cerámico Ordinario
            Alisado, tenían rastros de exposición al fuego y, en algunos casos,
            restos adheridos carbonizados y hollín, indicativos de su uso
            culinario." (Scattolin et al., 2023, p. 50) (Scattolin, 2023).
          </p>
        </div>
      </div>

      <DiaguitaDivider />

      <div className="autor-historia">
        <img src="/img/autor/Troncoso.jpeg" alt="Troncoso" />

        <div>
          <h3>Claudia Alejandra Troncoso</h3>

          <span>
            Investigadora independiente en CONICET. Especialidad: Geografía del
            turismo
          </span>

          <p>
            "Siguiendo a Troncoso (2023), quien sostiene que las
            representaciones turísticas influyen en la forma en que se
            interpreta y valora el patrimonio cultural, la propuesta Tolombón
            Inmersivo procura ofrecer una experiencia fundamentada en
            investigaciones históricas y arqueológicas que fortalezca el
            conocimiento y la preservación de la identidad territorial del Valle
            de Yocavil.""
          </p>
        </div>
      </div>
    </section>
  );
}
