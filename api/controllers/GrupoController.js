const Grupo = require('../models/Grupo');

const GrupoController = () => {
  const create = async (req, res) => {
    const { body } = req;

    try {
      const grupo = await Grupo.create({          
        gru_nome: body.gru_nome,
      });

      return res.status(200).json({ gru_id: grupo.gru_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.name, errors: err.errors });
    }
  };

  const getAll = async (req, res) => {
    try {
      const Grupos = await Grupo.getAll();

      return res.status(200).json({ Grupos });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getIntegrantes = async (req, res) => {
      try {
        const grupo = await Grupo
        .findOne({
          where: {
            gru_id: req.params.gru_id
          },
        });

        if (!grupo) {
            return res.status(400).json({ msg: 'Bad Request: Grupo not found' });
        }

        const users = await Grupo.getIntegrantes(req.params.gru_id);
  
        return res.status(200).json(users[0]);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
      }
  };

 const getDoacaoCampanha = async (req, res) => {
    try {
      const gru_id = req.params.gru_id;
      const camp_id = req.params.camp_id;

      const grupo = await Grupo
      .findOne({
        where: {
          gru_id
        },
      });

      if (!grupo) {
          return res.status(400).json({ msg: 'Bad Request: Grupo not found' });
      }

      const users = await Grupo.getDoacaoCampanha(gru_id, camp_id);

      return res.status(200).json(users[0]);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  }; 
 


  return {
    create,
    getAll,
    getIntegrantes,
    getDoacaoCampanha,
  };
};

module.exports = GrupoController;
