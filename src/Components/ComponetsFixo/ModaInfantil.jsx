import imgCrianca1 from '../img/crianca1.webp'
import imgCrianca2 from '../img/crianca2.webp'
import imgCrianca3 from '../img/crianca3.webp'
import './Css/CssContent/ModaInfantil.css'
export default function ModaInfantil(){

    return(
        <div className="base-modaI">
            <div className="modaI">
                <h2>Roupas Femininas</h2>
            </div>
            <div className="base_conteudo_infantil">
               <h3>APOSTAS DA ESTAÇÃO</h3>
                <div className="conteudo_infantil">
                    <img src={imgCrianca1} alt="" />
                    <img src={imgCrianca2} alt="" />
                    <img src={imgCrianca3} alt="" />
                </div>
                    <div className="base_titulos">
                        <div className="titulos">
                            <p className='blusas'>BLUSAS E CAMISETAS</p>
                            <p className='bermudas'>BERMUDAS E CALÇAS</p>
                            <p className='conjutinhos'>CONJUNTINHOS</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}