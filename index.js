var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static('public'));

/* Configuration */

require('./config/configuration.js')(app, mongoose);


/* Models */

Users = require('./models/Users.js');
Messages = require('./models/Messages.js');

/* Routes */

require('./routes/chatPage.js')(app);

/* Socket events */

require('./lib/socketEvents/socketEvents.js')(io);


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on :' + process.env.PORT);
});
