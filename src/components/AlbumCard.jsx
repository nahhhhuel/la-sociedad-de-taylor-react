import { useState } from "react"

function AlbumCard({ album }){

    const [abierto, setAbierto]  = useState(false);
    const { titulo, info, descripcion, vinilo, cover, spotifyUrl, premios } = album;

    return(
        
            <article className={`album-card ${abierto ? "open" : ""}`} >


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
                    <ul class="list-awards">
                        { premios.map((premio, index) => 
                        (<li key={index}>{premio}</li>))}
                    </ul>
                </div>
            </article>
    )
}

export default AlbumCard