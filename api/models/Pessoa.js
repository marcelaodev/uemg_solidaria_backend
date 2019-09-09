const Sequelize = require('sequelize');
const Grupo = require('./Grupo');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'pessoa';

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
  grupo_id: {
    type: Sequelize.INTEGER,

    references: {
      model: Grupo,
      key: 'id',
    },
  },
}, {
  hooks,
  tableName,
});

// eslint-disable-next-line
Pessoa.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Pessoa;
