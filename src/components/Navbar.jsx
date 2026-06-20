import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>

      <NavLink to="/webar">WebAR</NavLink>

      <NavLink to="/gastronomia">Experiencia Disponibles</NavLink>


      <NavLink to="/bibliografia">Bibliografía</NavLink>

      <NavLink to="/Historia">Historia</NavLink>

      <NavLink to="/imagenes">Imagenes</NavLink>
      
      <NavLink to="/nosotros">Nosotros</NavLink>
    </nav>
  );
}
