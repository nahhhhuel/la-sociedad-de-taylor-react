import { useState } from "react"

function AlbumCard({ album }){
    // useState para controlar si la tarjeta muestra los detalles o no
    const [abierto, setAbierto]  = useState(false);
    // Desestructuración de las propiedades del álbum recibidas por props para un codigo mas limpio
    const { titulo, info, descripcion, vinilo, cover, spotifyUrl, premios } = album;

    return(
            // Alterna la clase "open" si el usuario clickea en la imagen o no
            <article className={`album-card ${abierto ? "open" : ""}`} >

                {/* Al clickear en la imagen, se invierte el valor del estado "abierto" */}
                <div className="album-media" onClick={() => setAbierto(!abierto)}>
                    <img className="vinilo" src={ vinilo }/>
                    <img className="cover" src={ cover }/>
                </div>

                <div className="album-info">
                    <h3>{ titulo }</h3>
                    <p>{ info }</p>
                    <p>{ descripcion }</p>
                </div>

                <div className="album-details">
                    <iframe
                    src={spotifyUrl}
                    width="100%"
                    height="352"
                    style={{ borderRadius: "12px", border: 0 }}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"/>
                </div>

                <div className="awards">
                    <p>Premios</p>
                    {/* Renderizado de la lista de premios con map */}
                    <ul className="list-awards">
                        { premios.map((premio, index) => 
                        (<li key={index}>{premio}</li>))}
                    </ul>
                </div>
            </article>
    )
}

export default AlbumCard