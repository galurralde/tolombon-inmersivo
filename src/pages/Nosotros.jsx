import { useEffect, useState } from "react";

export default function Nosotros() {
  const testimonios = [
  {
    texto:
      "Una experiencia diferente que permite comprender la historia regional de forma dinámica y atractiva.",
    autor: "Persona 1",
  },
  {
    texto:
      "La combinación entre patrimonio, gastronomía y tecnología genera una propuesta muy innovadora.",
    autor: "Persona 2",
  },
  {
    texto:
      "Una excelente iniciativa para acercar la cultura local a las nuevas generaciones.",
    autor: "Persona 3",
  },
  {
    texto:
      "Tolombón Inmersivo demuestra el potencial del turismo cultural apoyado en herramientas digitales.",
    autor: "Persona 4",
  },
];

const [indiceActual, setIndiceActual] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setIndiceActual((prev) =>
      prev === testimonios.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(intervalo);
}, []);
  return (
    <section className="section">

      <h2 className="section-title">
        Nosotros
      </h2>

      <div className="nosotros-container">

        <div className="nosotros-card">
          <h3>Propósito Principal</h3>

          <p>
            Conectamos la historia viva de Salta con el futuro del turismo.
            Somos creadores de <strong>Tolombón Inmersivo</strong>, una
            experiencia turística mixta que fusiona el conocimiento académico,
            el respeto por el patrimonio regional y la tecnología para hacerte
            vivir el pasado de una forma completamente nueva.
          </p>
        </div>

        <div className="nosotros-card">
          <h3>Nuestra Historia</h3>

          <p>
            Este proyecto nació en las aulas de la Universidad Nacional de
            Salta (UNSa). Como estudiantes de la Tecnicatura Universitaria en
            Gestión de Turismo, el destino y la afinidad nos unieron dentro de
            la facultad.
          </p>

          <p>
            Nos elegimos mutuamente para transformarnos en un equipo de trabajo
            apasionado dentro de la materia Historia Regional.
          </p>

          <p>
            Guiados por el equipo de cátedra, encontramos en los autores, la
            bibliografía y las herramientas teóricas la base perfecta para dar
            un salto ambicioso: transformar un proyecto final académico en una
            propuesta turística real, innovadora y de triple impacto para la
            localidad de Tolombón.
          </p>
        </div>

        <div className="nosotros-card">
          <h3>Misión</h3>

          <p>
            Diseñar experiencias turísticas alternativas que revaloricen la
            historia regional de Salta, educando y emocionando a los viajeros
            mediante formatos interactivos.
          </p>
        </div>

        <div className="nosotros-card">
          <h3>Visión</h3>

          <p>
            Convertirnos en un referente regional de turismo joven e inmersivo,
            demostrando que la academia y el desarrollo local pueden trabajar
            juntos.
          </p>
        </div>

        <div className="nosotros-card">
          <h3>Nuestros Valores</h3>

          <ul>
            <li>
              <strong>Rigurosidad Histórica:</strong> cada detalle de nuestra
              experiencia está respaldado por investigación académica.
            </li>

            <li>
              <strong>Compañerismo:</strong> la confianza mutua con la que nos
              elegimos en la universidad es el motor que impulsa la calidad del
              proyecto.
            </li>

            <li>
              <strong>Innovación Cultural:</strong> proponemos una vivencia
              mixta (física y digital) orientada a las nuevas generaciones.
            </li>
          </ul>
        </div>

        <div className="nosotros-card">
          <h3>El Diferenciador</h3>

          <p>
            No somos una agencia tradicional; somos técnicos en formación
            acompañados por especialistas. Diseñamos este viaje desde el
            corazón de la universidad pública, integrando historia,
            patrimonio, tecnología y desarrollo local.
          </p>
        </div>

      </div>

      <div className="agradecimiento-box">

        <h3>Agradecimientos</h3>

        <p>
          Expresamos nuestro profundo agradecimiento al equipo docente de la
          Universidad Nacional de Salta por acompañarnos durante este proceso
          formativo. Sus aportes académicos, históricos, cronológicos y
          sociales resultaron fundamentales para comprender la riqueza
          patrimonial de Tolombón y transformarla en una experiencia turística
          innovadora.
        </p>

      </div>
      <div className="equipo-section">

  <h3>Equipo de Trabajo</h3>

  <div className="equipo-grid">

    <div className="integrante-card">
      <img src="/img/mujerPerfil.png" alt="Pamela Alegre" />
      <h4>Alegre Pamela</h4>
    </div>

    <div className="integrante-card">
      <img src="/img/hombre.webp" alt="Walter Alurralde Digan" />
      <h4>Alurralde Digan Walter Gustavo</h4>
    </div>

    <div className="integrante-card">
      <img src="/img/mujerPerfil.png" alt="Gimena García Liz" />
      <h4>García Liz Gimena</h4>
    </div>

    <div className="integrante-card">
      <img src="/img/mujerPerfil.png" alt="Mariela Rodríguez" />
      <h4>Rodriguez Mariela Soledad</h4>
    </div>

    <div className="integrante-card">
      <img src="/img/mujerPerfil.png" alt="Agustina Schirado" />
      <h4>Schirado Agustina Magali</h4>
    </div>

  </div>

</div>

      <div className="testimonios-section">

        <h3></h3>

        <div className="testimonios-section">

  <h3>Experiencias de Visitantes</h3>

  <div className="testimonio-slider">

    <div className="testimonio-card">

      <p>
        <em>
          "{testimonios[indiceActual].texto}"
        </em>
      </p>

      <span>
        {testimonios[indiceActual].autor}
      </span>

    </div>

    <div className="slider-dots">

      {testimonios.map((_, index) => (
        <span
          key={index}
          className={
            index === indiceActual
              ? "dot active"
              : "dot"
          }
        />
      ))}

    </div>

  </div>

</div>

      </div>

    </section>
  );
}