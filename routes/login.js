var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function (app) {

    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.post('/login', function (req, res) {
        var loginData = req.body;

        //Finding user with the enetered email
        Users.findOne({
            email: loginData.email
        }).exec(function (err, user) {

            //In case no users are found
            if (user == undefined) {
                res.send('You should register! Your name is not listed with us.')
            } else {

                if (user.password == loginData.password) {
                    //When passwords match up
                    res.send('You are welcome!')
                } else {
                    //When passwords don't match up
                    res.send('You should re-think your password!')
                }
            }
        });
    });
}
