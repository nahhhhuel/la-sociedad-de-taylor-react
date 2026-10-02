import { useState } from "react";
import '../styles/Contacto.css'

function Contacto() {
    
    // Manejo de estados individuales para crear un formulario controlado
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    //  Para limpiar todos los campos del formulario manualmente
    const handleReset = () => {
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
    };

    // Funcion que se ejecuta al hacer el submit
    const handleSubmit = async (evento) => {
        // Evita que la pagina se recargue 
        evento.preventDefault()

        // console log para submit
        console.log("=== DATOS DEL FORMULARIO ENVIADOS ===");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Asunto:", asunto);
        console.log("Mensaje:", mensaje);

        // Resetea los campos despues del submit
        setNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
    }

    return(
        <main>
            <section className="contacto">
            <div className="header-contacto">
                <h2>Contacto</h2>
                <h3>Agradecemos su interés por ponerse en contacto con nosotros.</h3>
                <p>Le dejamos el siguiente formulario donde puede rellenar la información con cualquier inquietud, sugerencia o  problema que haya tenido con la página.</p>
            </div>

            {/* vinculacion al handleSubmit para control de datos al enviar */}
            <form onSubmit={handleSubmit} className="form-contacto">

            <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} 
                onChange={(evento) => {
                // actualiza estado y loguea en la consola mientras se modifica el input
                setNombre(evento.target.value);
                console.log("Escribiendo nombre:", evento.target.value);
                }} 
                placeholder="ej: Nahuel" required/>
            </div>

            <div className="campo">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} 
            onChange={(evento) => {
                setEmail(evento.target.value);
                console.log("Escribieno email:", evento.target.value);
            }} placeholder="Ej: ejemplo@email.com" required/>
            </div>

            <div className="campo">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" value={asunto}
            onChange={(evento) => {
                setAsunto(evento.target.value);
                console.log("Asunto:", evento.target.value);
            }} placeholder="Ej: Tengo un problema..." required/>
            </div>

            <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea className="message" name="mensaje" id="mensaje" value={mensaje}
            onChange={(evento) => {
                setMensaje(evento.target.value);
                console.log("Mensaje:", evento.target.value);
            }} placeholder="Tu mensaje..." required></textarea>

            </div>
            <div className="botones">
            <button type="submit" className="submit">Enviar mensaje</button>
            <button type="button" onClick={handleReset} className="submit">Borrar mensaje</button>
            </div>
            </form>
            </section>
            
        </main>
    )
}

export default Contacto;