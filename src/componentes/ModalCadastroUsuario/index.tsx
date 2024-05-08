import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import React, { useState } from 'react'
import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
const [nome, setNome] = useState(''); 
const [email, setEmail] = useState(''); 
const [endereco, setEndereco] = useState(''); 
const [complemento, setComplemento] = useState(''); 
const [cep, setCep] = useState(''); 
const [senha, setSenha] = useState(''); 
const [confirmarSenha, setConfirmarSenha] = useState(''); 

    return (
    <AbModal 
        aberta={true} 
        aoFechar={() => console.log('fecha ai')}
        titulo='Cadastro' >
        <div className="corpoModalCadastro">
        <figure>
            <img src={imagemPrincipal} alt="Um notebook com uma fechadura e uma pessoa segurando uma chave" />
        </figure>
        <form>
            <AbCampoTexto
                value={nome}
                label='Nome'
                onChange={setNome}
            />
            <AbCampoTexto
                value={email}
                label='Email'
                onChange={setEmail}
            />
            <AbCampoTexto
                value={endereco}
                label='Endereço'
                onChange={setEndereco}
            />
            <AbCampoTexto
                value={complemento}
                label='Complemento'
                onChange={setComplemento}
            />
            <AbCampoTexto
                value={cep}
                label='CEP'
                onChange={setCep}
            />
            <AbCampoTexto
                value={senha}
                label='Senha'
                onChange={setSenha}
            />
            <AbCampoTexto
                value={confirmarSenha}
                label='Confirmar senha'
                onChange={setConfirmarSenha}
            />
            <footer>
                <AbBotao texto='Cadastrar' />
            </footer>
        </form>
        </div>
    </AbModal>
  )
}

export default ModalCadastroUsuario