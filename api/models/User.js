const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');
const Grupo = require('./Grupo');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'users';

const User = sequelize.define('User', {
  usu_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usu_email: {
    type: Sequelize.STRING,
    unique: true,
  },
  usu_password: {
    type: Sequelize.STRING,
  },
  usu_nome: {
    type: Sequelize.STRING,
  },
  usu_ra: {
    type: Sequelize.STRING,
    unique: true,
  },
  usu_celular: {
    type: Sequelize.STRING,
  },
  usu_grupoid: {
    type: Sequelize.INTEGER,

    references: {
      model: Grupo,
      key: 'gru_id',
    },
  },
  usu_acesso: {
    type: Sequelize.INTEGER,
  },
}, { hooks, tableName });

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = User;
