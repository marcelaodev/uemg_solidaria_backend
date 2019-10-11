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
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
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

  /*   const getIntegrantesAlfabetico = async (req, res) => {
  };

  const getIntegrantesCronologico = async (req, res) => {
  }; 

  const getIntegrantesDoacao = async (req, res) => {
  }; 
  */


  return {
    create,
    getAll,
  };
};

module.exports = GrupoController;
