var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
}); 

/* Configuration */

require('./config/configuration.js')(app, mongoose);

/* Routes */

require('./routes/chatPage.js')(app);

/* Socket events */

require('./lib/socketEvents/socketEvents.js')(io);

/* Models */

// Users = require('./models/Users.js');
// Messages = require('./models/Messages.js');

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on :' + process.env.PORT);
});
