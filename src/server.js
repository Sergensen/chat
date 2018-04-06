var express = require('express');
var socket = require('socket.io');


const app = express();
const server = app.listen(3001, () => {
  console.log("Server runs on port 3001!");
});

const io = socket(server);
io.on('connection', (socket) => {
  socket.on('action', (action) => {
    if(action.type === "server/SEND_MESSAGE"){
      io.sockets.emit('action', {type:'RECEIVE_MESSAGES', data:{user:action.user, message:action.message}});
    } else if (action.type === "server/TYPING"){
      socket.broadcast.emit('action', {type:'GET_TYPER', data:{user:action.user}});
    }
  });
});

app.use(express.static('public'));
