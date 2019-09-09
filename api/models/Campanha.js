const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'campanha';

const Campanha = sequelize.define('Campanha', {
  nome: {
    type: Sequelize.STRING,
  },
  inicio: {
    type: Sequelize.STRING,
  },
  final: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
Campanha.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Campanha;
