import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  // Estado para controlar la apertura y cierre del menu hamburguesa responsive
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="main-header">
      
      {/* Overlay oscuro que cierra el menú al hacerle click en el */}
      <div 
      className={`overlay ${menuAbierto ? "active" : ""}`}
      onClick={() => setMenuAbierto(false)}
      >
      </div>
      
      {/* Boton "hamburguesa" para el responsive para alternar el abrir o cerrar el menu */}
      <button
        className="btn-section"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <Link to="/">
        <img
          className="logo-img"
          src="https://fontmeme.com/permalink/260723/9c420202.png"
          alt="the-life-of-a-showgirl-font"
          border="0"
        />
      </Link>

      {/* Navegación principal, cambia la  clase "active" según el estado de menuAbierto */}
      <nav 
      className={`main-nav ${menuAbierto ? "active" : ""}`}
      >
        <div className="nav-top">
          <img
            className="logo-img-menu"
            src="https://fontmeme.com/permalink/260723/9c420202.png"
            alt="the-life-of-a-showgirl-font"
            border="0"
          />
          <button
            className="close-btn"
            aria-label="Cerrar menú"
            onClick={() => setMenuAbierto(false)}
          >
           &times;  
          </button>
        </div>

        {/* Enlaces de enrutamiento que ademas cierran el menu responsive al hacer click */}
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/music" onClick={() => setMenuAbierto(false)}>Música</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setMenuAbierto(false)}>Galería</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;