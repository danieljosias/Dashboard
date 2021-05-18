import './Sidebar.css';
import logo from '../img/PERFIL.jpeg'
import { Link } from 'react-router-dom';

const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Daniel J.</h1>
                </div>    
                
                <i onClick={() =>closeSidebar()}
                className="fa fa-times"
                id="sidebaricon"
                aria-hidden="true"
                ></i>
                
            </div>                

             <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                            
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área administrativa</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categoria</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-utensils"></i>
                    <a href="#">Pedidos</a>
                </div>

                <h2>PESSOAS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#">Usuários</a>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <Link to="/pagamentos">Pagamentos e débitos </Link>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <Link to="/plataforma">A plataforma </Link>
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <Link to="/privacidade">Política de privacidade</Link>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <Link to="/logout">Log out</Link>
                </div>
                
                </div>           
                
        </div>
    )
}

export default Sidebar;