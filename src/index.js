import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css';
import App from './App';
import Project from './components/Project'
import NavbarMain from './components/Project'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/:project' component={Project} /> 
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker();
