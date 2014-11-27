var express = require('express');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
        secret: 'ronnie',
        resave: false,
        saveUninitialized: true
    })); 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//require('./config/passport')(passport); // pass passport for configuration

app.get('/', function (req, res) {
    res.send('<b> hello there world</b>');
});

//app.get('/profile', isLoggedIn, function (req, res) { 
//    res.send('<p>hello <b>'+ req.user.get("name") + '</b></p>');
//});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    
    // if they aren't redirect them to the home page
    res.redirect('/auth/google');
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('foute boel');
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
});


app.listen(80, function () {
    console.log("the app is running");
});


