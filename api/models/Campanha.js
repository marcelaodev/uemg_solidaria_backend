const Sequelize = require('sequelize');

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
  },
  camp_inicio: {
    type: Sequelize.DATE,
  },
  camp_final: {
    type: Sequelize.DATE,
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
