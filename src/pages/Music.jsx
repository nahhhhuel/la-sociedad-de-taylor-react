import useFetchAlbums from "../hooks/useFetchAlbums";
import AlbumCard from "../components/AlbumCard";
import "../styles/Music.css";

function Music() {

    // Inicializa el hook personalizado para manejar los datos de la API
    const { albums, loading, error } = useFetchAlbums();

    // Feedback de estado de carga para el usuario
    if (loading){
        return <p>Cargando música...</p>;
    }

    // Control de errores de red o servidor
    if (error){
        return <p>{error}</p>
    }   

    return(
        <section className= "albums-container">
            {/* Mapea sobre el array de albums para renderizar las tarjetas dinamicamente */}
            { albums.map((album) => 
            <AlbumCard key={album.id} album={album} />)}
        </section>
    )
}

export default Music;