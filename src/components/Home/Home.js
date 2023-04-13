import Navegation from "../Navegation/Navegation"
import "../Home/Home.css"

export default function Home (){

    return(
        <header className="bg-light">
            <div>
            <Navegation/>
            <main>
                <img src="./Images/home.jpg" alt="img-homeI" class="img-home"/>
                <img src="./Images/homeIV.jpg" alt="img-homeII" class="img-home"/>
                <img src="./Images/home.jpg" alt="img-homeIII" class="img-home"/>
                <img src="./Images/homeIV.jpg" alt="img-homeIV" class="img-home"/>
            </main>
            </div>
        </header>
    )
}