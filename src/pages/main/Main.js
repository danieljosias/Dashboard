import './Main.css';
import hello from '../../img/user2.jpg';


const Main = () => {
    return(
        <main className="main__container">
            <div className="main__title">
                <img src={hello} alt="hello"/>

                <div className="main__greeting">
                    <h1>Olá, Daniel J.</h1>
                    <p>Bem vindo ao seu painel.</p>
                </div>
            </div>

            <div className="main__cards">
                <div className="card">
                    <i className="fa fa-file-text fa 2x text-lightblue"> Pedidos</i>

                    <div className="card_inner">
                        <p className="text-primary-p"></p>
                        <span className="font-bold text-title">30</span>
                    </div>

                </div>

                <div className="card">
                    <i className="fa fa-money fa 2x text-red"> Pagamento</i>

                    <div className="card_inner">
                        <p className="text-primary-p"></p>
                        <span className="font-bold text-title">R$500</span>
                    </div>  

                </div>

                <div className="card">
                    <i className="fa fa-archive fa 2x text-yellow"> Produtos</i>

                    <div className="card_inner">
                        <p className="text-primary-p"></p>
                        <span className="font-bold text-title">50</span>
                    </div>  

                </div>

                <div className="card">
                    <i className="fa fa-bars fa 2x text-green"> Categorias</i>

                    <div className="card_inner">
                        <p className="text-primary-p"></p>
                        <span className="font-bold text-title">20</span>
                    </div>  

                </div>

            </div>

        </main>
    )
}

export default Main;