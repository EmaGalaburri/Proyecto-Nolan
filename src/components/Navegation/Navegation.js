import { Link } from "react-router-dom"
import "./Navegation.css"

export default function Navegation() {
    return(
        
        <header className="d-flex justify-content-between bg-black">
            <h3>Christopher Nolan Tribute</h3>
            <nav>
                <ul className="d-flex text-decoration-none ">
                    <li className="mx-2"><Link to="/">Home</Link></li>
                    <li className="mx-2"><Link to="/peliculas">Peliculas</Link></li>
                    <li className="mx-2"><Link to="/biografia">Biografia</Link></li>
                </ul>
            </nav>
        </header>
    )
}