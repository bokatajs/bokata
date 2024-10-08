function getSettings(container) {
  const settings = container.getConfiguration('api-auth-jwt') || {};
  if (!settings.usernameField) {
    settings.usernameField = process.env.JWT_USERNAME_FIELD || 'email';
  }
  if (!settings.passwordField) {
    settings.passwordField = process.env.JWT_PASSWORD_FIELD || 'password';
  }
  if (!settings.usersTable) {
    settings.usersTable = process.env.JWT_USERS_TABLE || 'users';
  }
  if (!settings.jwtSecret) {
    settings.jwtSecret = process.env.JWT_SECRET || 'Ch4nG3 Th15';
  }
  if (!settings.jwtAlgorithm) {
    settings.jwtAlgorithm = process.env.JWT_ALGORITHM || 'HS256';
  }
  if (!settings.jwtExpiration) {
    settings.jwtExpiration = process.env.JWT_LIFETIME || '15m';
  }
  if (!settings.jwtExpirationSeconds) {
    settings.jwtExpirationSeconds = parseInt(process.env.JWT_LIFETIME_SECONDS || '900', 10);
  }
  return settings;
}

module.exports = getSettings;
