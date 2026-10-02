import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false)


  return (

    <header className="main-header">
    
      <div 
      className={`overlay ${menuAbierto ? "active" : ""}`}
      onClick={() => setMenuAbierto(false)}
      >

      </div>
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
