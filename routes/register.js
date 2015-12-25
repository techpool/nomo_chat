var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function (app) {

    app.get('/register', function (req, res) {
        res.render('register');
    });

    app.post('/register', function (req, res) {
        var regData = req.body;

        //Checking whether the user is already registered
        Users.findOne({
            email: regData.email
        }).exec(function (err, user) {
            if (user == undefined) {

                //Incase no users are there create new user object
                var newUser = new Users({
                    username: regData.username,
                    email: regData.email,
                    regTime: Date.now(),
                    lastLogin: Date.now(),
                    messageCount: 0,
                    password: regData.password
                });

                // Save the user in the database
                newUser.save(function (err, saveObj) {
                    if (err) {

                        //Incase of errors
                        console.log(err);
                        res.send('Something is seriously wrong. Please call the admins.');
                    } else {
                        //When everything is fine
                        res.send('You are one of us now!');
                    }
                });
            } else {
                //If user is already registered
                res.send('You are already registered.');
            }
        });
    });
}
