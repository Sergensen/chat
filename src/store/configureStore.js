import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:3001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let configureStore = applyMiddleware(socketIoMiddleware)(createStore)(reducers);
configureStore.subscribe(()=>{
});

export default configureStore;
