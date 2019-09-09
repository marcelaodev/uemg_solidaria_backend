const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'doacao';

const Doacao = sequelize.define('Doacao', {
  nome: {
    type: Sequelize.STRING,
  },
  ra: {
    type: Sequelize.STRING,
    unique: true,
  },
  celular: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
Doacao.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Doacao;
