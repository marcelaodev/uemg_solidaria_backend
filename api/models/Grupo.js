const Sequelize = require('sequelize');
const User = require('./User');

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

Grupo.getIntegrantes = (gru_id) => {
  let sql = `
    select	
      u.usu_nome
      
      from users u
      
      inner join grupo g
        on g.gru_id = u.usu_gruid
      
      where g.gru_id = ${gru_id}
  `;

  return sequelize.query(sql);
};

Grupo.getDoacaoCampanha = (gru_id, camp_id) => {
  let sql = `
    SELECT
      u.usu_nome,
      sum(d.doa_quantidade) AS total

      FROM campanha c

      INNER JOIN doacao d
        ON d.doa_campid = c.camp_id
          AND d.doa_confirmado = true

      INNER JOIN users u
        ON u.usu_id = d.doa_usuid
          AND u.usu_gruid = ${gru_id}

      WHERE c.camp_id = ${camp_id}

      GROUP BY
        u.usu_id,
        c.camp_id

      ORDER BY
        total DESC
  `;

  return sequelize.query(sql);
};

// eslint-disable-next-line
Grupo.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Grupo;
