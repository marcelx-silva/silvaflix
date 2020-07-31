import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import PageNotFound from './pages/notfound/index';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index'




ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route  path="/" component={App} exact/> 
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route component={PageNotFound}/>

      </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

