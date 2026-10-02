import { Link } from "react-router-dom";

function Footer() {
  return (
    // Componente reutilizable para el pie de página
    <footer className="main-footer">
      © Todos los derechos reservados 2026
      <ul>
        <li>
          {/* Uso del componente Link para navegación sin recarga de pagina */}
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;