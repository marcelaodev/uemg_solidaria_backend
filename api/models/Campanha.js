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
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  camp_final: {
    type: Sequelize.DATEONLY,
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

Campanha.getAll = () => Campanha.findAll({
  attributes: {
    include: [
      [Sequelize.literal('CASE WHEN camp_final > NOW() THEN 1 ELSE 0 END'), 'camp_ativo'],
      // include information about participants and donations count
    ],
    exclude: [
      'createdAt',
      'updatedAt',
      'camp_createdby',
    ],
  },
});

Campanha.get = (camp_id) => Campanha.findOne({
  attributes: {
    include: [
      [Sequelize.literal('CASE WHEN camp_final > NOW() THEN 1 ELSE 0 END'), 'camp_ativo'],
    ],
    exclude: [
      'createdAt',
      'updatedAt',
      'camp_createdby',
    ],
  },
  where: {
    camp_id,
  },
});


// eslint-disable-next-line
Campanha.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Campanha;
