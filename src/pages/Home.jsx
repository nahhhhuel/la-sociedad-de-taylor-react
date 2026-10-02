import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
    return(
        <>
        <main className="page-content">
        <section><a href="https://taylor.lnk.to/tsthelifeofashowgirl"><video className="video-mobile" autoPlay loop muted src="/img/0722.mp4"></video></a></section>
        <section><a href="https://taylor.lnk.to/tsthelifeofashowgirl"><video className="video-desktop" autoPlay loop muted src="/img/0722(1).mp4"></video></a></section>
        <section className="redirect">
        <h1>CONOCE A TAYLOR SWIFT</h1>
        <p>Recorre su discografia completa</p>
        {/* Link para redireccionar mediante el router sin refrescar la página */}
        <Link to="/music" className="btn-redirect">Descubrir</Link>
        </section>
        </main>
        </>
    )
}

export default Home;