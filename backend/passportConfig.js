import { User } from "./model/schema.js";
import bcrypt from 'bcryptjs';
import passportLocal from 'passport-local'
const localStrategy = passportLocal.Strategy

const passportstr = (passport) => {
  passport.use(
    new localStrategy((email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email,
      };
      cb(err, userInformation);
    });
  });
};

export {passportstr}