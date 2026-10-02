import { Link } from "react-router-dom";

function PagError() {
  return (
    // Pantalla de error genérica para capturar rutas inexistentes (Error 404)
    <section className="pagina-error">
      <h2>404 — Página no encontrada</h2>
      <p>La ruta que buscás no existe.</p>
      {/* Boton para regresar a la raíz del sitio */}
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default PagError;