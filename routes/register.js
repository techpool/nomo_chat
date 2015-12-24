var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function (app) {

    app.get('/register', function (req, res) {
        res.render('register');
    });

    app.post('/register', function (req, res) {
        var regData = req.body;
        var newUser = new Users({
            name: regData.name,
            email: regData.email,
            password: regData.password
        });

        newUser.save(function (err, saveObj) {
            if (err) {
                res.send('You are one of us now!');
            } else {
                res.send('Something is seriously wrong. Please call the admins.');
            }
        })
    })
}
