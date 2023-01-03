import imgMulher1 from '../img/mulher1.webp'
import imgMulher2 from '../img/mulher2.webp'
import imgMulher3 from '../img/mulher3.webp'
import './Css/CssContent/ModaFeminina.css'
export default function ModaFeminina(){

    return(
        <div className="base-modaF">
            <div className="modaF">
                <h2>Roupas Femininas</h2>
            </div>
            <div className="base_conteudo_feminina">
               <h3>APOSTAS DA ESTAÇÃO</h3>
                <div className="conteudo_feminina">
                    <img src={imgMulher1} alt="" />
                    <img src={imgMulher2} alt="" />
                    <img src={imgMulher3} alt="" />
                </div>
                    <div className="base_titulos">
                        <div className="titulos">
                            <p>VESTIDOS</p>
                            <p>BLUSAS E CAMISETAS</p>
                            <p>CALÇAS</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}