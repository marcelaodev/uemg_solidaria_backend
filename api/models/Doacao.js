const Sequelize = require('sequelize');
const Pessoa = require('./Pessoa');
const Campanha = require('./Campanha');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'doacao';

const Doacao = sequelize.define('Doacao', {
  quantidade: {
    type: Sequelize.INTEGER,
  },
  pessoa_id: {
    type: Sequelize.INTEGER,

    references: {
      model: Pessoa,
      key: 'id',
    },
  },
  campanha_id: {
    type: Sequelize.INTEGER,

    references: {
      model: Campanha,
      key: 'id',
    },
  },
}, {
  hooks,
  tableName,
});

// eslint-disable-next-line
Doacao.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Doacao;
