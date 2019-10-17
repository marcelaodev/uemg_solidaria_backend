const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'grupo';

const Grupo = sequelize.define('Grupo', {
  gru_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  gru_nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  hooks,
  tableName,
});

Grupo.getAll = () => Grupo.findAll({
  attributes: {
    include: [
      // [Sequelize.literal('CASE WHEN camp_final > NOW() THEN 1 ELSE 0 END'), 'camp_ativo'],
      // include information about participants and donations count
    ],
    exclude: [
      'createdAt',
      'updatedAt',
    ],
  },
});

// eslint-disable-next-line
Grupo.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Grupo;
