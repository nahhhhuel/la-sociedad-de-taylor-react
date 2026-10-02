import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
    return(
        <>
        {/* Navbar persistente en todas las rutas */}
        <Navbar />
        <main>
            {/* Outlet renderiza el componente de la ruta activa dinamicamente */}
            <Outlet />
        </main>
        {/* Footer persistente en todas las rutas  */}
        <Footer />
        </>
     )
}

export default Layout;