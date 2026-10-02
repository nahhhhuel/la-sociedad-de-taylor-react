import useFetchGallery from "../hooks/useFetchGallery";
import Foto3D from "../components/Foto3D"
import "../styles/Gallery.css"

function Gallery() {

    const { fotos, loading, error } = useFetchGallery();

    if (loading){
        return <p>Cargando fotos...</p>
    }

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
            <Foto3D fotos={fotos}/>
        </section>
        </main>
    )
}

export default Gallery;
