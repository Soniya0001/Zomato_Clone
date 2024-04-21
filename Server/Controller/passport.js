const passport = require("passport")

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
 
const CLIENT_ID = "339701248629-07j2dop4ofqrm5qv8dm2p8umendt09dd.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
passport.use(new GoogleStrategy({
    clientID:     CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:5500/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);   
  }
));

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
    done(null, user);
});
