const server = require('express')().listen(3001);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on('action', (action) => {
    if(action.type === "server/SEND_MESSAGE"){
      io.sockets.emit('action', {type:'RECEIVE_MESSAGES', data:{user:action.user, message:action.message, url:action.url}});
    }
  });
});
