const Sequelize = require('sequelize');
const User = require('./User');
const Doacao = require('./Doacao');

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

Campanha.hasMany(Doacao, {as: "Doacoes", foreignKey: "doa_campid", sourceKey: "camp_id"});

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

Campanha.getRankingGrupo = (camp_id) => {
  let sql = `
    SELECT
      g.gru_nome,
      sum(d.doa_quantidade) AS total

      FROM campanha c

      INNER JOIN doacao d
        ON d.doa_campid = c.camp_id
          AND d.doa_confirmado = true

      INNER JOIN users u
        ON u.usu_id = d.doa_usuid

      INNER JOIN grupo g
        ON g.gru_id = u.usu_gruid

      WHERE c.camp_id = ${camp_id}

      GROUP BY
        g.gru_nome,
        c.camp_id

      ORDER BY
        total
  `;

  return sequelize.query(sql);
}

Campanha.getRankingIndividual = (camp_id) => {
  let sql = `
    select	
      u.usu_nome,
      sum(d.doa_quantidade) as total
      
      from campanha c
      
      inner join doacao d
        on d.doa_campid = c.camp_id
          and d.doa_confirmado = true
          
      inner join users u
        on u.usu_id = d.doa_usuid
      
      where c.camp_id = ${camp_id}
      
      group by
        u.usu_nome,
        c.camp_id,
        d.doa_usuid
        
      order by
        total`;

  return sequelize.query(sql);
}

// eslint-disable-next-line
Campanha.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Campanha;
