var mongoose = require('mongoose');

var user = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    messageCount: {
        type: 'String',
        required: true
    },
    lastLogin: {
        type: Number,
        required: true
    },
    regTime: {
        type: 'String',
        required: true
    }
});

module.exports = mongoose.model('users', user);
