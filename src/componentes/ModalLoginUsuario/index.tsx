import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import React, { useState } from 'react'
import './ModalLoginUsuario.css'

import imagemPrincipal from './assets/login.png'
import { usePersistirToken } from '../../shared/hooks/token'
import http from '../../http'

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({ aberta, aoFechar, aoEfetuarLogin } : ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const criarToken = usePersistirToken();

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        http.post('public/login', usuario)
            .then(resposta => {
                criarToken(resposta.data.access_token)
                setEmail('')
                setSenha('')
                aoFechar()
                aoEfetuarLogin()
            })
            .catch(erro => {
                if(erro?.response?.data?.message){
                    alert(erro.response.data.message)
                } else {
                    alert('Ocorreu um erro inesperado. Entre em contato com o suporte.')
                }
            })
    }

  return (
    <AbModal 
        aberta={aberta}
        titulo='Login'
        aoFechar={() => aoFechar()}
    >
        <section className="corpoModalLogin">
            <figure>
                <img src={imagemPrincipal} alt="Um notebook com uma fechadura e uma pessoa segurando uma chave" />
            </figure>
            <div className="corpoFormularioLogin">
                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto 
                        value={email}
                        label='E-mail'
                        onChange={setEmail}
                        type='email'
                    />
                    <AbCampoTexto 
                        value={senha}
                        label='Senha'
                        onChange={setSenha}
                        type='password'
                    />
                    <footer>
                        <a href="/">Esqueci minha senha</a>
                        <AbBotao 
                            texto='Fazer login'
                        />
                    </footer>
                </form>
                <hr className='separadorLogin' />
                <div className='corpoCriarConta'>
                    <h2>Ainda não tem uma conta?</h2>
                    <AbBotao 
                        texto='Criar conta'
                    />
                </div>
            </div>
        </section>
     </AbModal>
  )
}

export default ModalLoginUsuario