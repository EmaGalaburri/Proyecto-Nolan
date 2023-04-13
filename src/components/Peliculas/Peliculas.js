import {useState} from "react";
import "../Peliculas/Peliculas.css"

export default function Peliculas({info}){

    const [ocultar,setOcultar]=useState(true);
    const mostrar =()=>{
        console.log(info)
        setOcultar(!ocultar)
    }

    const ocultarInfo=()=>{
        setOcultar(true)
    }

    return(
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner position-relative ">
                <div class="carousel-item active">
                    <img src="./Images/oppenheimer.jpg" class="img-peliculaI" alt="open-img"/>
                    <div class="carousel-caption d-none d-md-block">
                        
                        <button className="bg-black" id="botonI" onClick={mostrar}>Oppenheimer ↓</button>
                    </div>
                    {ocultar === false?
                    <div>
                        <button className="bg-black" onClick={ocultarInfo}>X</button>
                        <ul className="list-group">
                            <li className="list-group-item bg-black text-secondary">Prologo: Basada en el físico teórico al que se atribuye ser el "padre de la bomba atómica".</li>
                            <li className="list-group-item bg-black text-secondary">Estreno: 21 julio, 2023</li>
                            <li className="list-group-item bg-black text-secondary">Genero: Drama</li>
                            <li className="list-group-item bg-black text-secondary">Plataformas: Proximamente en Cines</li>
                            <li className="list-group-item bg-black text-secondary">Duracion: 2hs 30min</li>
                        </ul>
                    </div>: ""}
            </div>
            <div>                
                <div class="carousel-item">
                    <img src="./Images/interstellar.png" class="img-peliculaII" alt="interstellar-img"/>
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">Interstellar ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item bg-black text-secondary">Prologo: Ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir, cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad.</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 26 octubre, 2014</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Drama y Ciencia Ficcion</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: HBO, Amazon Prime</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 2hs 49min</li>
                    </ul>
                </div>:""}
                </div>
                <div class="carousel-item">
                    <img src="./Images/inception.jpg" class="img-peliculaIII" alt="inception-img"/>
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">Inception ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item bg-black text-secondary">Prologo: Un ladrón, prófugo de la justicia estadounidense por el supuesto asesinato de su esposa, especializado en infiltrarse en los sueños para robar ideas y claves de bancos mientras sus víctimas duermen.</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 26 julio, 2010</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Ciencia Ficcion</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: HBO, Apple Tv</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 2hs 28min</li>
                    </ul>
                </div>:""}
                </div>
                <div class="carousel-item">
                    <img src="./Images/batman.jpg" class="img-peliculaIV" alt="batman-img"/>
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">Batman ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item bg-black text-secondary">Prologo: Trilogía cinematográfica basada en el personaje Batman de DC Comics</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 2005, 2008, 2012</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Accion</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: HBO</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 2hs 20min, 2hs 32min, 2hs 45min</li>
                    </ul>
                </div>:""}
                </div>
                <div class="carousel-item">
                    <img src="./Images/memento.jpg" alt="memento-img" class="img-peliculaV" />
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">Memento ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item bg-black text-secondary">Prologo: Leonard, un hombre que tras un golpe sufre un trauma cerebral que le causa amnesia anterógrada.</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 7 febrero, 2002</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Suspenso</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: Apple Tv</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 1h 53min</li>
                    </ul>
                </div>:""}
                </div>
                <div class="carousel-item">
                    <img src="./Images/dunkerque.jpg" alt="dunkerque-img" class="img-peliculaVI" />
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">Dunkerque ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item bg-black text-secondary">Prologo: Film tríptico, contada desde tres perspectivas: el aire (aviones), la tierra (en la playa) y el mar (la evacuación por la marina).</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 21 julio, 2017</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Belico</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: HBO, Apple Tv</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 1h 46min</li>
                    </ul>
                </div>:""}
                </div>
                <div class="carousel-item">
                    <img src="./Images/The Prestige.jpg" alt="prestige-img" class="img-peliculaVII"/>
                    <div class="carousel-caption d-none d-md-block">
                        <button className="bg-black">The Prestige ↓</button>
                    </div>
                    {ocultar === false?
                <div>
                    <button className="bg-black" onClick={ocultarInfo}>X</button>
                    <ul className="list-group">
                    <li className="list-group-item bg-black text-secondary">Prologo: Robert es un ilusionista respetado que se obsesiona con uno de los trucos de su rival. Para conseguir el truco hará todo lo posible, sin saber hasta qué punto cambiará su vida.</li>
                        <li className="list-group-item bg-black text-secondary">Estreno: 30 noviembre, 2006</li>
                        <li className="list-group-item bg-black text-secondary">Genero: Drama</li>
                        <li className="list-group-item bg-black text-secondary">Plataformas: HBO</li>
                        <li className="list-group-item bg-black text-secondary">Duracion: 2hs 10min</li>
                    </ul>
                </div>:""}
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}