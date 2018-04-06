import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatContainer from './containers/ChatContainer';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ChatContainer />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
