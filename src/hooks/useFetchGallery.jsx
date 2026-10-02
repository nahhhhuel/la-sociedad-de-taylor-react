import { useState } from "react";
import { useEffect } from "react";
import { URL_GALLERY } from "../utils/api";

function useFetchGallery() {

    const [fotos, setFotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchGallery = async () => {

        setLoading(true);
        setError(null);

        try {
            const respuesta = await fetch(URL_GALLERY);
            if (!respuesta.ok) {
                throw new Error(
                    `Error al obtener fotos: ${respuesta.status} ${respuesta.statusText},`
                )
            }

            const fotosParseadas = await respuesta.json();

            setFotos(fotosParseadas);
        } catch (error) {
            setError(error.message ||  "No se pudo obtener las fotos desde la API")
        } finally {
            setLoading(false);
        }
    }
useEffect(() => {
    const cargaInicial = async () => {
        try {
            const respuesta = await fetch(URL_GALLERY);
            if(!respuesta.ok) {
                throw new Error(
                    `Error al obtener fotos: ${respuesta.status} ${respuesta.statusText}`,);
            }
            
            const fotosParseadas = await respuesta.json();

            setFotos(fotosParseadas);
        } catch(error) {
            setError(error.message || "No se pudo obtener las fotos desde la API")
        } finally {
            setLoading(false);
        }
    }
    cargaInicial();
}, []);

return {fotos, loading, error, fetchGallery, setFotos}
}

export default useFetchGallery;