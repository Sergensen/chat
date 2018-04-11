import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authenticate from './containers/Authenticate';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <Switch>
       <Route path="/Authenticate" component={Authenticate} />
       <Route path="/" component={App}/>
     </Switch>
   </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
