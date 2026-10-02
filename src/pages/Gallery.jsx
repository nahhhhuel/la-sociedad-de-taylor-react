import useFetchGallery from "../hooks/useFetchGallery";
import Foto3D from "../components/Foto3D"
import "../styles/Gallery.css"

function Gallery() {

    // Extrae los estados del custom hook para mantener el componente limpio
    const { fotos, loading, error } = useFetchGallery();

    // Renderizado condicional mientras se cargan los datos
    if (loading){
        return <p>Cargando fotos...</p>
    }

    // Renderizado condicional en caso de que la request falle
    if (error) {
        return <p>{error}</p>
    }

    return(
        <main>
        <section className="gallery-header">
            <h1>Galeria</h1>
            <p>Recorre sus años en la industria musical</p>
        </section>
        <section className="gallery-section">
            {/* Delega el renderizado de las imágenes al componente hijo pasando la prop */}
            <Foto3D fotos={fotos}/>
        </section>
        </main>
    )
}

export default Gallery;