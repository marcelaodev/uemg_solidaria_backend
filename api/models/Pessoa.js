const Sequelize = require('sequelize');
const Grupo = require('./Grupo');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'pessoa';

const Pessoa = sequelize.define('Pessoa', {
  pes_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pes_nome: {
    type: Sequelize.STRING,
  },
  pes_ra: {
    type: Sequelize.STRING,
    unique: true,
  },
  pes_celular: {
    type: Sequelize.STRING,
  },
  pes_email: {
    type: Sequelize.STRING,
  },
  pes_grupoid: {
    type: Sequelize.INTEGER,

    references: {
      model: Grupo,
      key: 'gru_id',
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
