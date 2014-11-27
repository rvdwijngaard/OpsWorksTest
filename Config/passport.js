//var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//var configAuth = require('./auth');
//var User = require('../models/account');

//module.exports = function (passport) {
    
//    // used to serialize the user for the session
//    passport.serializeUser(function (user, done) {
//        done(null, user.get("email"));
//    });
    
//    // used to deserialize the user
//    passport.deserializeUser(function (id, done) {
//        User.get(id, function (err, user) {
//            done(err, user);
//        });
//    });    

//    passport.use(new GoogleStrategy({
//            clientID        : configAuth.googleAuth.clientID,
//            clientSecret    : configAuth.googleAuth.clientSecret,
//            callbackURL     : configAuth.googleAuth.callbackURL
//        }, 
//        function (token, refreshToken, profile, done) {           
//            var newUser = new User();
            
//            newUser.set({
//                google_id : profile.id,
//                google_token : token,
//                name  : profile.displayName,
//                email : profile.emails[0].value // pull the first email
//            });

//            newUser.save(function (err) {
//                if (err)
//                    throw err;
//                return done(null, newUser);
//            });

//        }));
//};

