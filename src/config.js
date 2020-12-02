module.exports = {
  PORT: process.env.PORT || 8080,
  TOKEN_KEY: process.env.TOKEN_KEY || "codeful-token",
  DATABASE_URL:
    process.env.DATABASE_URL || "https://agile-brushlands-42217.herokuapp.com",
};
