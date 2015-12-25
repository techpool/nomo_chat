var mongoose = require('mongoose');

var user = mongoose.Schema({
    username: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    },
    lastLogin: {
        type: Date,
        required: true
    },
    regTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('users', user);
