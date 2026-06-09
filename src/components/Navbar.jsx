import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>

      <NavLink to="/webar">
        WebAR
      </NavLink>

      <NavLink to="/gastronomia">
        Experiencia Gastronómica
      </NavLink>

      <NavLink to="/nosotros">
        Nosotros
      </NavLink>

      <NavLink to="/bibliografia">
        Bibliografía
      </NavLink>

      <NavLink to="/imagenes">
        Imágenes
      </NavLink>
    </nav>
  );
}