import React from 'react';
import './Pagamentos.css';
import hello from '../../img/user2.jpg';

export default function Pagamentos() {
 return (
   <div className="container-pagamentos">

        <div className="pagamentos-logo">
            <img src={hello} alt="hello"/>

            <div className="pagamentos-title">
                <h1>Olá, Daniel J.</h1>
                <p>Bem vindo a pagamentos e débitos.</p>
            </div>
        </div>

        <div className="card-principal">
            <div className="card4">
                <i className="fa fa-money fa 2x texto-green"> Pagamento</i>
                    <div className="card_dentro">
                        <p className="card-text">R$500</p>
                    </div>  
            </div>

            <div className="card4">
                <i className="fa fa-money fa 2x texto-red"> Débito</i>
                    <div className="card_dentro">
                        <p className="card-text">R$130</p>
                    </div>  
            </div>
        </div>
   </div>
 );
}