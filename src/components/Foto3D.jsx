import { useState } from "react";

function Foto3D({fotos}){
    // useState para saber que foto está activa actualmente en el centro
    const [posicion, setPosicion] = useState(0);

    // Funcion para retroceder en el carrusel de forma circular
    const anterior = () => {
        if (posicion === 0) {
            setPosicion(fotos.length - 1);
        } else {
            setPosicion(posicion - 1)
        }
    };

    // Funcion para avanzar en el carrusel de forma circular
    const siguiente = () => {
        if (posicion === fotos.length - 1) {
            setPosicion(0);
        } else {
            setPosicion(posicion + 1);
        }
    };

    return(
        <div className="fotos-container">
            <button onClick={anterior}>
            {`<`}
            </button>

            <div className="escenario-fotos">
            {/* Mapeo de fotos para renderizarlas con sus respectivas clases de posición 3D */}
            {fotos.map((foto, index) => { 
                const {id, url, titulo } = foto;

                // Calcula la distancia relativa de esta foto respecto a la posición actual
                const distancia = index - posicion;

                // Asignación dinamica de clase segun posicion
                let clase = "oculta";
                if (distancia === 0) clase = "activa";
                else if (distancia === -1) clase = "izquierda";
                else if (distancia === 1) clase = "derecha";
                
                return (
                    <div key={id} className={`photo ${clase}`} onClick={() => setPosicion(index)}>
                        <img src={url} alt={titulo} />
                    </div>
                );
                }
            )}
            </div>

            <button onClick={siguiente}>
            {`>`}
            </button>
        </div>
    )
}

export default Foto3D;