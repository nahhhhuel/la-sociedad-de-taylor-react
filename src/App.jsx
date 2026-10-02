import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Contacto from './pages/Contacto.jsx';
import Music from './pages/Music.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import PagError from './pages/PagError.jsx';

// Configuracion central del enrutador de la aplicacion definiendo los paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Componente padre que provee la estructura base (Navbar y Footer)
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/music",
        element: <Music />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/contacto",
        element: <Contacto />
      },
      {
        // Ruta comodín: para manejar cualquier URL que no coincida con las anteriores
        path: "*",
        element: <PagError />
      },
    ],
  },
]);

// Componente principal que vincula todas las secciones mediante el RouterProvider
function App() {
  return <RouterProvider router={router} />;
}

export default App;