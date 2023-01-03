import './Css/CssContent/Home.css'
import img from '../img/inicioImg.jpg'
import img2 from '../img/inicioImg2.jpg'
export default function Home(){

    return(
        <div className="base_home">
            <div className="home">
                <h2>As melhores roupas para todas as categorias!!!!</h2>
                <img src={img} alt="" />
                <p>Conheça as nossas iniciativas para tornar a moda mais responsável com as pessoas e com o planeta</p>
            </div>
            <div className="base_conteudo">
                <div className="conteudo">
                    <img src={img2} alt="" />
                    <h3>SUA <span> ROUPA USADA</span> PODE GANHAR UM NOVO USO</h3>
                    <p>As roupas descartadas no nosso coletor Ecoestilo serão recicladas, reutilizadas ou doadas. Em todas as lojas, você também pode deixar frascos e embalagens vazios de perfumaria.</p>
                </div>
            </div>
        </div>
    )
}