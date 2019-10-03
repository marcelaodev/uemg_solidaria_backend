const Campanha = require('../models/Campanha');

const CampanhaController = () => {
  const create = async (req, res) => {
    const { body } = req;

    try {
      const campanha = await Campanha.create({
        camp_nome: body.camp_nome,
        camp_inicio: body.camp_inicio,
        camp_final: body.camp_final,
      });

      return res.status(200).json({ id: campanha.camp_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getAll = async (req, res) => {
    try {
      const campanhas = await Campanha.findAll();

      return res.status(200).json({ campanhas });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const campanha = await Campanha
        .findOne({
          where: {
            camp_id: req.params.camp_id,
          },
        });

      if (!campanha) {
        return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
      }

      return res.status(200).json({ campanha });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  /*   const getRankingGrupo = async (req, res) => {
  };

  const getRankingIndividual = async (req, res) => {
  }; */


  return {
    create,
    get,
    getAll,
  };
};

module.exports = CampanhaController;
