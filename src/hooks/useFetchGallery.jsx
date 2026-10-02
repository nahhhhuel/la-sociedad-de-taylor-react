import { useState } from "react";
import { useEffect } from "react";
import { URL_GALLERY } from "../utils/api";

// Hook para manejar el consumo de la API de la galeria y su ciclo de vida
function useFetchGallery() {

    // useState para almacenar datos, estado de carga y posibles errores
    const [fotos, setFotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Funcion asincrona dedicada a realizar el fetch
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

// Efecto que se ejecuta en el montaje del componente
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

// Retorna los valores para ser desestructurados para utilizarlos posteriormente
return {fotos, loading, error, fetchGallery, setFotos}
}

export default useFetchGallery;