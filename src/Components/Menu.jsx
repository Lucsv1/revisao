import { Link } from 'react-router-dom'
import './ComponetsFixo/Css/Menu.css'
export default function Menu(){

    return(
        <div>
            <div className="barra_base">
                <div className="barra">
                    <h1>ModasLoja.com</h1>
                    <nav>
                        <ul>
                            <li><Link className='delunder' to='/'>Menu</Link></li>
                            <li><Link className='delunder2' to='/modaFeminina'>Moda feminina</Link></li>
                            <li><Link className='delunder3' to='/modaMasculina'>Moda masculina</Link></li>
                            <li><Link className='delunder4' to='/modaInfantil'>Moda infantil</Link></li>
                            <li className='sobreInfo'><Link  className='delunder4' to='/sobre'>Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}