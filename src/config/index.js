module.exports = {
  mongoDb: process.env.mongoDb || 'mongodb://localhost:27020/blog',
  ACCESS_TOKEN_SECRET: 'accessTokenSecret',
  ACCESS_TOKEN_LIFE: 120,
  REFRESH_TOKEN_SECRET: 'refreshTokenSecret',
  REFRESH_TOKEN_LIFE: 86400,
};