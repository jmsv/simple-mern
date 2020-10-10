const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/users');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//here user is a JSON object which will create the token and give it to us.to create the token we will use the jsonwebtoken module.
exports.getToken = function (user) {
  return jwt.sign(
    user,
    config.secretKey, // This(jwt.sign) create token ,it takes payload(user) as first parameter and second is the secret key.
    { expiresIn: 7200 }
  );
};

const opts = {}; // Options

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // this specify how our json web token should be extracted from the
// incoming request message. This extract JWT supports various methods for extracting information from the header.
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(
    opts, // Using JwtStrategy to create a new strategy.
    (jwt_payload, done) => {
      // Through this done parameter, we will be passing back information to passport which it will then use for loading things onto the request message.
      console.log('Jwt Payload: ', jwt_payload);
      User.findOne(
        { _id: jwt_payload._id },
        (
          err,
          user // Searching for the user with given id.
        ) => {
          if (err) {
            return done(err, false); //This "done" is what passport passes into this strategy.
          } else if (user) {
            return done(null, user); //Second parameter we got from mongoDB. There is no error so first parameter will be null.
          } else {
            return done(null, false); // User not found
          }
        }
      );
    }
  )
);
// Uses the jwt coming from the authorization header and with that it verifies the user coming.
exports.verifyUser = passport.authenticate('jwt', { session: false }); // So we are not going to create sessions in this case.
// verifyUser calls the passport.authenticate using the jwt strategy anywhere we need to verify the user.
exports.verifyAdmin = function (req, res, next) {
  if (req.user.admin) {
    next();
    return;
  } else {
    const err = new Error('You are not authorized to perform this operation!');
    err.status = 403; // 403 means Forbidden
    return next(err);
  }
};
