import {useState} from 'react';
import React from 'react';
import './index.css';
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

import Main from './pages/main/Main';
import Produtos from './pages/produtos/Produtos';
import Admin from './pages/admin/Admin';
import Privacidade from './pages/privacidade/Privacidade';
import Pagamentos from './pages/pagamentos/Pagamentos';
import Plataforma from './pages/plataforma/Plataforma';
import Logout from './pages/log out/Logout';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const openSidebar = () =>{
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <Routes>
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
      
      <Switch>
        <Route path="/produtos"><Produtos /></Route>
        <Route path="/painel"> <Main /> </Route>
        <Route path="/admin"> <Admin /> </Route>
        <Route path="/privacidade"> <Privacidade /> </Route>
        <Route path="/pagamentos"> <Pagamentos /> </Route>
        <Route path="/plataforma"> <Plataforma /> </Route>
        <Route path="/logout"> <Logout /> </Route>
      </Switch>
      
      
    </Routes>
  );
}

export default App;
