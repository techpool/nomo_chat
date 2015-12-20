module.exports = function(io) {
    io.on('connection', function(socket) {

        io.set("transports", ["polling"]);
        io.set("polling duration", 10);

        console.log('a user connected');
        socket.on('chat_message', function(data) {
            var msg = new Messages({
                data: data,
                timestamp: Date.now(),
                userId: 0
            });

            msg.save(function (err, msg) {
                if (err) {
                    console.log(err);
                } else {
                    io.emit('chat_message', data);
                    console.log('message: ' + data);
                }
            })

        });
    });
}
