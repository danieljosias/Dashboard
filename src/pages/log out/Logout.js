import React from 'react';
import './Logout.css';
import {Link} from 'react-router-dom';

export default function Logout() {
 return (
   <div>
       <div className="container-logout">
           <div className="title-logout">
               <h1>Log out</h1>
           </div>
           <div className="container-section-logout">
                <section className="section-logout">
                    
                    <div className="texto-logout">
                        <p>Tem certeza que vc quer deslogar?</p>
                    </div>

                    <div className="btn-logout">
                        <span><button className="btn1">Sim</button></span>
                        <Link to="/painel"><span><button className="btn2">Não</button></span></Link>
                    </div>

                </section>
            </div>
       </div>
   </div>
 );
}