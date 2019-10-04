const Sequelize = require('sequelize');
const User = require('./User');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'campanha';

const Campanha = sequelize.define('Campanha', {
  camp_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  camp_nome: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 255],
    },
  },
  camp_inicio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  camp_final: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  camp_createdby: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: 'usu_id',
    },
  },
}, {
  hooks,
  tableName,
});

// eslint-disable-next-line
Campanha.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Campanha;
