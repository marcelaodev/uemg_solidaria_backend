const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'pessoas';

const Pessoa = sequelize.define('Pessoa', {
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
Pessoa.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Pessoa;
