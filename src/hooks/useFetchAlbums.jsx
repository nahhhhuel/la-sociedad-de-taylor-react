import { useEffect } from "react";
import { useState } from "react";
import { URL_ALBUMS } from "../utils/api";

// Hook para englobar la peticion de los albums a la API
function useFetchAlbums() {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAlbums = async () => {
        setLoading(true);
        setError(null);

        try {
            const respuesta = await fetch(URL_ALBUMS);
            if (!respuesta.ok) {
                throw new Error(
                    `Error al obtener albums: ${respuesta.status} ${respuesta.statusText}`,);
            }

            const albumsParseados = await respuesta.json();
            setAlbums(albumsParseados);
        } catch (error) {
            setError(error.message || "No se pudó obtener los albums desde la API")
        } finally {
            setLoading(false);
        }
    }

// Hook para hacer la carga de datos la primera vez que se renderiza el componente
useEffect(() => {
    const cargaInicial = async () => {
        try {
            const respuesta = await fetch(URL_ALBUMS);
            if (!respuesta.ok) {
                throw new Error(
                    `Error al obtener albums: ${respuesta.status} ${respuesta.statusText}`,);
            }

            const albumsParseados = await respuesta.json();
            setAlbums(albumsParseados);
        } catch (error) {
            setError(error.message || "No se pudó obtener los albums desde la API")
         } finally {
            setLoading(false);
         }  
    }
    cargaInicial();
}, []);

return {albums, loading, error, fetchAlbums, setAlbums};
}

export default useFetchAlbums;