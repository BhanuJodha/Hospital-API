const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const env = require("./environment");
const Doctor = require("../models/doctor");

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true,
    secretOrKey: env.jwt_secret
}, (payload, done) => {
    Doctor.findById(payload._id, (err, doctor) => {
        if (err) {
            return done(err);
        }
        if (doctor) {
            return done(null, doctor);
        }
        return done(null,null);
    })
}))

module.exports = passport;