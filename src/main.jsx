import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';

// Punto de entrada principal de React donde se enchufa la aplicación en el DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Montaje del componente App que contiene toda la logica de las rutas */}
    <App />
  </StrictMode>,
)