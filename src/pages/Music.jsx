import useFetchAlbums from "../hooks/useFetchAlbums";
import AlbumCard from "../components/AlbumCard";
import "../styles/Music.css";

function Music() {

    const { albums, loading, error } = useFetchAlbums();

    if (loading){
        return <p>Cargando música...</p>;
    }

    if (error){
        return <p>{error}</p>
    }    

    return(
        <section className= "albums-container">
            { albums.map((album) => 
            <AlbumCard key={album.id} album={album} />)}
        </section>
    )
}

export default Music;
