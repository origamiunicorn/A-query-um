require("dotenv").config();

const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    router = require('./routes'),
    //need to integrate user route into other routes
    //Required for authentication 
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    passport = require('./config/passport'),
    mongoose = require('mongoose'),
    keys = require("./keys");

const atlasUser = keys.atlas.username;
const atlasPass = keys.atlas.password;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Bodyparsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve our static build files
app.use(express.static(path.join(__dirname, '../client/build')));
// Provides great rout logging in our console for debugging
app.use(morgan('dev'));

const DB_URI = process.env.DB_URI || `mongodb+srv://${atlasUser}:${atlasPass}@aqueryum.nlpj7.mongodb.net/heroku_0mhvm21t?retryWrites=true&w=majority` || "mongodb://localhost/aqueryumDB";
const connection = mongoose.connection;
console.log("This is the process.env.DB_URI: " + process.env.DB_URI);

//Passport ----------------------
//Use Session and session storage
app.use(
    session({
        secret: 'secret-key',
        store: new MongoStore({ mongooseConnection: connection }),
        resave: false, //required
        saveUninitialized: false //required
    })
)
//app.use(session({ secret: "secret-key", resave: true, saveUninitialized: true }));

//Passport Middleware 
app.use(passport.initialize()) //Serialize user
app.use(passport.session()) // Deserialize User
//--------------------------------
// Import the routing setup from our Router 
app.use('/', router);

// Connect to the Mongo DB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

if (process.emitWarning.NODE_ENV === "production") {
    app.use(express.static("client/build"))
};

connection.once('open', function () {
    console.log(
        "MongoDB database connection established successfully."
    );
})



//Serving react on routes unused by previous routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//Startup
app.listen(PORT, () => {
    console.log(`The API Server is listening on port: ${PORT}`)
})
