import { BrowserRouter, Routes, Route  } from "react-router-dom"

import Menu from "./Components/Menu"
import RodaPe from "./Components/RodaPé"
import Home from "./Components/ComponetsFixo/Home"
import ModaFeminina from "./Components/ComponetsFixo/ModaFeminina"
import ModaInfantil from "./Components/ComponetsFixo/ModaInfantil"
import ModaMasculina from "./Components/ComponetsFixo/ModaMasculina"
import Sobre from "./Components/ComponetsFixo/Sobre"

export default function App(){

    return(
       <BrowserRouter>
       <Menu/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/modaFeminina" element = {<ModaFeminina/>}/>
        <Route path="/modaMasculina" element = {<ModaMasculina/>}/>
        <Route path="/modaInfantil" element = {<ModaInfantil/>}/>
        <Route path="/sobre" element = {<Sobre/>}/>
       </Routes>
       <RodaPe/>
       </BrowserRouter>
    )
}