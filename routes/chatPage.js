var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(appDir + '/public/index.html');
    })
}
