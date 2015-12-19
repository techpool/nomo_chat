module.exports = function (io) {
  io.on('connection', function(socket){

      io.set("transports", ["xhr-polling"]);
      io.set("polling duration", 10);

      console.log('a user connected');
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
      });
  });
}
