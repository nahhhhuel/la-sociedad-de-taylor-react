import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="main-footer">
      © Todos los derechos reservados 2026
      <ul>
        <li>
          <Link to="contacto">Contacto</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;