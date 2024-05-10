import { AbBotao } from 'ds-alurabooks'
import './Pedidos.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IPedido } from '../../interfaces/IPedido'

const Pedidos = () => {

  const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})

  const [pedidos, setPedidos] = useState<IPedido[]>([])
  
  useEffect(() => {
    
    const token = sessionStorage.getItem('token')

    axios.get<IPedido[]>('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then (resposta => setPedidos(resposta.data))
    .catch(erro => console.log(erro))
  }, [])

  const excluirPedido = (pedido: IPedido) => {
    const token = sessionStorage.getItem('token')
    axios.delete(`http://localhost:8000/pedidos/${pedido.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      setPedidos(pedidos.filter(p => p.id !== pedido.id))
    })
    .catch(erro => console.log(erro))
  }


  return (
    <section className="pedidos">
        <h2>Pedidos</h2>
        {pedidos.map(pedido => (<div className='pedido' key={pedido.id}>
            <ul>
                <li>Pedidos: <strong>{pedido.id}</strong></li>
                <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                <li>Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
            </ul>
            <AbBotao texto='Excluir' tipo='secundario' onClick={() => excluirPedido(pedido)} />
            <AbBotao texto='Detalhes' />
        </div>))}
    </section>
  )
}

export default Pedidos