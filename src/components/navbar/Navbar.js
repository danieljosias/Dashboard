import './Navbar.css';
import avatar from '../../img/user.png';
import { Link } from 'react-router-dom';

const Navbar = ({sidebarOpen, openSidebar }) =>{
    return(
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <Link to="/produtos">Produtos</Link>
                <Link to="/painel">Painel</Link>
                <Link to="/admin">Admin</Link>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;