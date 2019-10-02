const Sequelize = require('sequelize');
const Pessoa = require('./Pessoa');
const Campanha = require('./Campanha');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'doacao';

const Doacao = sequelize.define('Doacao', {
  doa_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  doa_quantidade: {
    type: Sequelize.INTEGER,
  },
  doa_pessoaid: {
    type: Sequelize.INTEGER,

    references: {
      model: Pessoa,
      key: 'pes_id',
    },
  },
  doa_campanhaid: {
    type: Sequelize.INTEGER,

    references: {
      model: Campanha,
      key: 'camp_id',
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
