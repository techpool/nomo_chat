var mongoose = require('mongoose');

var message = mongoose.Schema({
    data: {
        type:'String',
        required: true
    },
    timestamp: {
        type:Number,
        required: true
    },
    userId: {
        type:'String',
        required: true
    }
});

module.exports = mongoose.model('messages', message);
