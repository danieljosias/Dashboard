import React from 'react';
import './Produtos.css';
import card1 from '../../img/card1.jpg'
import card2 from '../../img/card2.jpg'
import card3 from '../../img/card3.jpg'
import card4 from '../../img/card4.jpeg'
import card5 from '../../img/card5.jpg'
import card6 from '../../img/card6.jpg'

export default function Produtos() {
 return (
   <div className="container-produtos">
        
        <div className="container-title">
            <h1>Produtos</h1>
        </div>

       <div className="card-container">
            <div className="card2">
                <div className="card-inner2">
                    <img src={card1} alt=""/>
                    <h2>Coca-Cola</h2>
                    <p>R$4,50</p>
                    <div><button>Add ao Carrinho</button></div>
                </div>
            </div>

            <div className="card2">
                <div className="card-inner2">
                    <img src={card2} alt=""/>
                    <h2>Antártica</h2>
                    <p>R$4,00</p>
                    <div><button>Add ao Carrinho</button></div>
                </div>
            </div>

            <div className="card2">
                <div className="card-inner2">
                    <img src={card3} alt=""/>
                    <h2>Guaravita</h2>
                    <p>R$2,00</p>
                    <div><button>Add ao Carrinho</button></div>
                </div>
            </div>
       </div>

       <div className="card-container">
            <div className="card2">
                <div className="card-inner2">
                    <img src={card4} alt=""/>
                    <h2>Gotas de Cho..</h2>
                    <p>R$3,50</p>
                    <div><button>Add ao Carrinho</button></div>
                </div>
            </div>

            <div className="card2">
                <div className="card-inner2">
                    <img src={card5} alt=""/>
                    <h2>Baunilha</h2>
                    <p>R$3,50</p>
                    <div><button>Add ao Carrinho</button></div>
                    
                </div>
            </div>

            <div className="card2">
                <div className="card-inner2">
                    <img src={card6} alt=""/>
                    <h2>Chocolate</h2>
                    <p>R$3,50</p>
                    <div><button>Add ao Carrinho</button></div>
                </div>
            </div>
       </div>
       
   </div>
 );
}