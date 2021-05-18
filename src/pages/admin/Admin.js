import React from 'react';
import './Admin.css';

export default function Admin() {
 return (
   <div>
       <div className="container-admin">
           <div className="title-admin">
               <h1>Recuperar Senha</h1>
           </div>
           <div className="container-form">
                <form className="formulario">
                    
                    <fieldset>
                        <h2 for="senha">Senha </h2>
                        <input type="password" id="senha" placeholder="Digite sua senha"/>
                        
                        
                        <h2 for="novaSenha">Nova senha </h2>
                        <input type="password" id="novaSenha" placeholder="Digite sua nova senha"/>
                        
                    </fieldset>

                    <span><button>Enviar</button></span>

                </form>
            </div>
       </div>
   </div>
 );
}