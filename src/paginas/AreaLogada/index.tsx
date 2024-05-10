import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AreaLogada.css";

const AreaLogada = () => {
  return (
    <>
      <h2 className="AreaLogada__titulo">Minha conta</h2>
      <section className="AreaLogada">
        <ul className="navegacao">
          <h3>Pedidos</h3>
          <li>
            <Link to="/minha-conta/pedidos">Pedidos</Link>
          </li>
          <li>
            <Link to="/minha-conta/trocas">Trocas</Link>
          </li>
          <li>
            <Link to="/minha-conta/cupons">Cupons</Link>
          </li>
          <li>
            <Link to="/minha-conta/dados">Seus dados</Link>
          </li>
        </ul>
        <div className="conteudo">
            <Outlet />
        </div>
      </section>
    </>
  );
};

export default AreaLogada;
