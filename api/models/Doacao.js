const Sequelize = require('sequelize');
const User = require('./User');
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
  doa_usuid: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: 'usu_id',
    },
  },
  doa_campanhaid: {
    type: Sequelize.INTEGER,

    references: {
      model: Campanha,
      key: 'camp_id',
    },
  },
  doa_confirmado: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
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
