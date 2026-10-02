import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import Layout from './pages/Layout.jsx';
import Contacto from './pages/Contacto.jsx';
import Music from './pages/Music.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import PagError from './pages/PagError.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      { path: "*",
        element: <PagError />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
