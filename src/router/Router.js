import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home"
import Peliculas from "../components/Peliculas/Peliculas"
import Biografia from "../components/Biografia/Biografia"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/peliculas" element={<Peliculas/>}/>
                <Route path="/biografia" element={<Biografia/>}/>                
            </Routes>
        </BrowserRouter>
    )
}


