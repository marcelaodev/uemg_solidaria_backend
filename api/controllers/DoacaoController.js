const Doacao = require('../models/Doacao');
const User = require('../models/User');

const DoacaoController = () => {
  const create = async (req, res) => {
    const { body, token } = req;

    try {
      const doacao = await Doacao.create({
        doa_quantidade: body.doa_quantidade,
        doa_usuid: token.usu_id,
        // doa_campid: body.doa_campid,
      });

      return res.status(200).json({ doa_id: doacao.doa_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const createTo = async (req, res) => {
    const { body, params } = req;

    const user = await User
          .findOne({
            where: {
              usu_id: params.usu_id,
            },
          });

    if (!user) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
    }

    try {
      const doacao = await Doacao.create({
        doa_quantidade: body.doa_quantidade,
        doa_usuid: params.usu_id,
        // doa_campid: body.doa_campid,
        doa_confirmado: true,
      });

      return res.status(200).json({ doa_id: doacao.doa_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  return {
    create,
    createTo,
  };
};

module.exports = DoacaoController;
