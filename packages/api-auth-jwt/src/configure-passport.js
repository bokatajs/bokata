const passport = require('passport');
const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcryptjs');

function getLocalStrategy(db, settings) {
  const localOptions = {
    usernameField: settings.usernameField || 'email',
    passwordField: settings.passwordField || 'password',
    session: false,
  };
  const localStrategy = new LocalStrategy(localOptions, (email, password, done) => {
    db.findOne(settings.usersTable || 'users', { email })
      .then((user) => {
        if (!user) {
          return done(null, false, {
            message: 'This email is not registered',
          });
        }
        return bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err || !isMatch) {
            return done(null, false, { message: 'Incorrect credentials' });
          }
          return done(null, user);
        });
      })
      .catch((err) => {
        done(err, null, { message: 'Error connecting to database' });
      });
  });
  return localStrategy;
}

function getJwtStrategy(db, settings) {
  const opts = {};
  opts.secretOrKey = settings.jwtSecret || 'Ch4nG3 Th15';
  opts.algorithms = [settings.jwtAlgorithm || 'HS256'];
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  const jwtStrategy = new JwtStrategy(opts, (payload, done) => {
    db.findById(settings.usersTable || 'users', payload.sub)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'This user is not registered' });
        }
        return done(null, user);
      })
      .catch((err) => {
        done(err, null, { message: 'Error connecting to database' });
      });
  });
  return jwtStrategy;
}

function configurePassport(db, settings) {
  passport.use(getLocalStrategy(db, settings));
  passport.use(getJwtStrategy(db, settings));
}

module.exports = configurePassport;
