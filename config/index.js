const adminRoutes = require('./routes/adminRoutes');
const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');

const config = {
  migrate: true,
  autoRequire: true,
  adminRoutes,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '2017',
};

module.exports = config;
