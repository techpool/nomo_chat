var bodyParser = require('body-parser');

module.exports = function(app, mongoose){

    app.set('db', 'mongodb://localhost:27017/nomochat');
    //app.set('db', 'mongodb://Suryadeep:Surya-23121994@ds033285.mongolab.com:33285/mongocloud');

    //Setting up view engine as Jade
    app.set('views', './views');
    app.set('view engine', 'jade');

    //Setting up the body-parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    mongoose.connect(app.get('db'));
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback(){
        console.log('db connected');
    });

};
