var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function (app) {

    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.post('/login', function (req, res) {
        var loginData = req.body;
        Users.findOne({
            email: loginData.email
        }).exec(function (err, user) {
            if (user == undefined) {
                res.send('You should register! Your name is not listed with us.')
            } else {
                if (user.password == loginData.password) {
                    res.send('You are welcome!')
                } else {
                    res.send('You should re-think your password!')
                }
            }
        })
    });
}
