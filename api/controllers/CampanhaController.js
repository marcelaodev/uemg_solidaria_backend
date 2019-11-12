const Campanha = require('../models/Campanha');
const moment = require('moment');

const CampanhaController = () => {
  const create = async (req, res) => {
    const { body, token } = req;

    const ini = moment(body.camp_inicio);
    const fim = moment(body.camp_final);
    const now = moment();

    if (ini > fim) {
      return res.status(400).json({ msg: 'Bad Request: Data inicial maior que data final' });
    }
    
    if (fim < now) {
      return res.status(400).json({ msg: 'Bad Request: Data final deve ser posterior a hoje' });
    }

    try {
      const campanha = await Campanha.create({
        camp_nome: body.camp_nome,
        camp_inicio: body.camp_inicio,
        camp_final: body.camp_final,
        camp_createdby: token.id,
      });

      return res.status(200).json({ camp_id: campanha.camp_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getAll = async (req, res) => {
    try {
      const campanhas = await Campanha.getAll();

      return res.status(200).json({ campanhas });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const get = async (req, res) => {
    try {
      const campanha = await Campanha.get(req.params.camp_id);

      if (!campanha) {
        return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
      }

      return res.status(200).json({ campanha });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getRankingGrupo = async (req, res) => {
    try {      
      let [result] = await Campanha.getRankingGrupo(req.params.camp_id);
      
      if (result.length === 0) {
        return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
      }

      return res.status(200).json( result );
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getRankingIndividual = async (req, res) => {
    try {      
      let [result] = await Campanha.getRankingIndividual(req.params.camp_id);
      
      if (result.length === 0) {
        return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
      }

      return res.status(200).json( result );
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };


  return {
    create,
    get,
    getAll,
    getRankingIndividual,
    getRankingGrupo
  };
};

module.exports = CampanhaController;
