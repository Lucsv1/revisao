import imgHomem1 from "../img/homem1.webp" 
import imgHomem2 from "../img/homem2.webp" 
import imgHomem3 from "../img/homem3.webp" 
import "./Css/CssContent/ModaMasculina.css"

export default function ModaMasculina(){

    return(
        <div className="base-modaM">
            <div className="modaM">
                <h2>Roupas Masculinas</h2>
            </div>
            <div className="base_conteudo_masculino">
               <h3>APOSTAS DA ESTAÇÃO</h3>
                <div className="conteudo_masculino">
                    <img src={imgHomem1} alt="" />
                    <img src={imgHomem2} alt="" />
                    <img src={imgHomem3} alt="" />
                </div>
                    <div className="base_titulos">
                        <div className="titulos">
                            <p>CAMISETAS E REGATAS</p>
                            <p>BERMUDAS</p>
                            <p>CAMISAS</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}