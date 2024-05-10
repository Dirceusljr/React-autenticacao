import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import { useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"
import { useObterToken } from "../../shared/hooks/token"

const BarraNavegacao = () => {

    const [modalCadastroUsuario, setModalCadastroUsuario] = useState(false)
    const [modalLoginUsuario, setModalLoginUsuario] = useState(false);

    const token = useObterToken();

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

    const aoEfetuarLogin = () => {
        setModalLoginUsuario(false)
        setUsuarioEstaLogado(true)
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {!usuarioEstaLogado && (<>
                <li>
                <BotaoNavegacao 
                    texto="Login" 
                    textoAltSrc="Icone representando um usuário" 
                    imagemSrc={usuario}
                    onClick={() => setModalLoginUsuario(true)}    
                />
                <ModalLoginUsuario
                    aberta={modalLoginUsuario} 
                    aoFechar={() => setModalLoginUsuario(false)}
                    aoEfetuarLogin={aoEfetuarLogin}    
                    />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() =>  setModalCadastroUsuario(true)}
                    />
                    <ModalCadastroUsuario 
                        aberta={modalCadastroUsuario} 
                        aoFechar={() => setModalCadastroUsuario(false)} 
                    />
                </li>
            </>)}
            {usuarioEstaLogado && (<>
            <li>
                <Link to='/minha-conta/pedidos'>
                    Minha conta
                </Link>
            </li>
            </>)}
        </ul>
    </nav>)
}

export default BarraNavegacao