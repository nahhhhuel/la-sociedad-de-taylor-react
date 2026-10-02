# La Sociedad de Taylor - React

Proyecto integrador desarrollado para el **Trabajo Práctico Final (Opción A)** del Curso Inicial de Front-End (React.js) de la UTN. El objetivo de este proyecto es la migración de un sitio web estático (previamente maquetado en HTML/CSS) a una SPA (Single Page Application) moderna, interactiva y modularizada utilizando React.

## 🚀 Características Principales

* **Arquitectura Basada en Componentes:** Estructura limpia y escalable dividida en componentes de interfaz reutilizables (Navbar, Footer, Cards) y vistas de página (Home, Music, Gallery, Contacto).
* **Enrutamiento Dinámico (Client-Side Routing):** Navegación fluida sin recarga de página implementada con `react-router-dom` (v6+), incluyendo un `Layout` global y captura de rutas inexistentes (Error 404).
* **Consumo de API Propia (Local):** Los datos de la aplicación (álbumes y fotos) se consumen dinámicamente desde una base de datos local (`db.json`) mediante peticiones asíncronas, simulando un entorno de backend real.
* **Custom Hooks:** Lógica de peticiones HTTP abstraída en hooks personalizados (`useFetchGallery`, `useFetchAlbums`) que gestionan el ciclo de vida de los datos, el estado de carga (`loading`) y la captura de errores.
* **Formulario 100% Controlado:** Sección de contacto conectada al estado de React (`useState`), con logs en tiempo real, prevención de recarga nativa (`preventDefault`) y funciones de reseteo (manual y post-envío).
* **Interactividad y Efectos Visuales:** Galería de imágenes con un carrusel interactivo en 3D que calcula dinámicamente las clases CSS en base al estado de la posición actual.

## 🛠️ Tecnologías Utilizadas

* **Core:** React, Vite
* **Navegación:** React Router DOM
* **Estilos:** CSS puro 
* **Backend Simulado:** JSON Server (o entorno local para servir `db.json`)

## 📁 Estructura del Proyecto

La estructura del código respeta las convenciones y buenas prácticas de React:

```text
src/
├── assets/         # Imágenes, videos y recursos estáticos
├── components/     # Componentes visuales reutilizables (Navbar, Footer, AlbumCard, Foto3D)
├── hooks/          # Custom Hooks (useFetchAlbums, useFetchGallery)
├── pages/          # Vistas principales vinculadas a las rutas
├── styles/         # Hojas de estilo independientes para cada vista/componente
├── utils/          # Configuraciones globales (ej. URLs de la API)
├── App.jsx         # Configuración del enrutador central y anidación de rutas
└── main.jsx        # Punto de entrada de la aplicación
```

## ⚙️ Instalación y Ejecución Local

Para correr este proyecto en tu computadora, necesitarás tener instalado [Node.js](https://nodejs.org/).

### 1. Clonar el repositorio e instalar dependencias
Abre tu terminal y ejecuta:

```bash
git clone https://github.com/nahhhhuel/la-sociedad-de-taylor-react
cd la-sociedad-de-taylor-react
npm install
```

### 2. Iniciar la API Local
Como el proyecto consume una API propia basada en un archivo `db.json`, es necesario levantar ese servicio primero para que las secciones de Música y Galería reciban los datos. Abre una terminal y ejecuta:

```bash
npx json-server --watch db.json --port 3000
```

### 3. Iniciar el servidor de desarrollo (Vite)
Abre una **nueva** pestaña en tu terminal (sin cerrar la de la API) y ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/` (o el puerto que te indique la consola).

## ✍️ Autor
Desarrollado por **Nahuel Matias Villavicencio** para el Trabajo Práctico Final de frontend para la UTN.