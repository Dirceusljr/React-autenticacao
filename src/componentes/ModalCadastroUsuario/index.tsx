import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import React, { useState } from 'react'
import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'
import axios from 'axios'

interface ModalCadastroUsuarioProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalCadastroUsuario = ( { aberta, aoFechar } : ModalCadastroUsuarioProps)  => {

const [nome, setNome] = useState(''); 
const [email, setEmail] = useState(''); 
const [endereco, setEndereco] = useState(''); 
const [complemento, setComplemento] = useState(''); 
const [cep, setCep] = useState(''); 
const [senha, setSenha] = useState(''); 
const [confirmarSenha, setConfirmarSenha] = useState(''); 

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const usuario = {
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
            confirmarSenha
        }
        axios.post('http://localhost:8000/public/registrar', usuario)
        .then(() => {
            alert('Usuário cadastrado com sucesso!')
            setNome('')
            setEmail('')
            setEndereco('')
            setComplemento('')
            setCep('')
            setSenha('')
            setConfirmarSenha('')
            aoFechar()
        })
        .catch(() => {
            alert('Ops... Aconteceu algum erro!')
        })

    }


    return (
    <AbModal 
        aberta={aberta} 
        aoFechar={() => aoFechar()}
        titulo='Cadastro' >
        <div className="corpoModalCadastro">
        <figure>
            <img src={imagemPrincipal} alt="Um notebook com uma fechadura e uma pessoa segurando uma chave" />
        </figure>
        <form onSubmit={aoSubmeterFormulario}>
            <AbCampoTexto
                value={nome}
                label='Nome'
                onChange={setNome}
            />
            <AbCampoTexto
                value={email}
                label='Email'
                onChange={setEmail}
                type='email'
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
                type='password'
                />
            <AbCampoTexto
                value={confirmarSenha}
                label='Confirmar senha'
                onChange={setConfirmarSenha}
                type='password'
            />
            <footer>
                <AbBotao 
                    texto='Cadastrar' 
                />
            </footer>
        </form>
        </div>
    </AbModal>
  )
}

export default ModalCadastroUsuario