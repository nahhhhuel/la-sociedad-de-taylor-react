import { Link } from "react-router-dom";

function PagError() {
  return (
    <section className="pagina-error">
      <h2>404 — Página no encontrada</h2>
      <p>La ruta que buscás no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default PagError;