const Doacao = require('../models/Doacao');
const User = require('../models/User');
const Campanha = require('../models/Campanha');
const moment = require('moment');

const checkCampanha = async (body, res, camp_id = false) => {
  if (!camp_id) {
    camp_id = body.doa_campid;
  }

  if (!camp_id) {
    return res.status(400).json({ msg: 'Bad Request: "doa_campid" é obrigatório"' });
  }

  const campanha = await Campanha
        .findOne({
          where: {
            camp_id
          },
        });

  if (!campanha) {
      return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
  }

  const camp_final = moment(campanha.camp_final);

  if (camp_final < moment()) {
    return res.status(400).json({ msg: 'Bad Request: Campanha terminou em: ' + camp_final.format("DD/MM/YYYY") });
  }

  return true;
}

const DoacaoController = () => {
  const create = async (req, res) => {
    const { body, token } = req;

    const campanhaCheck = await checkCampanha(body, res);
    if (campanhaCheck !== true) {
      return campanhaCheck;
    }

    if (!Number.isInteger(body.doa_quantidade)) {
      return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser um inteiro' });
    }

    if (!(body.doa_quantidade > 0)) {
      return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser maior que 0' });
    }

    try {
      const doacao = await Doacao.create({
        doa_quantidade: body.doa_quantidade,
        doa_usuid: token.usu_id,
        doa_campid: body.doa_campid,
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

    const campanhaCheck = await checkCampanha(body, res);
    if (campanhaCheck !== true) {
      return campanhaCheck;
    }

    if (!Number.isInteger(body.doa_quantidade)) {
      return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser um inteiro' });
    }

    if (!(body.doa_quantidade > 0)) {
      return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser maior que 0' });
    }

    try {
      const doacao = await Doacao.create({
        doa_quantidade: body.doa_quantidade,
        doa_usuid: params.usu_id,
        doa_campid: body.doa_campid,
        doa_confirmado: true,
      });

      return res.status(200).json({ doa_id: doacao.doa_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const update = async (req, res) => {

    try {
      const doacao = await Doacao
        .findOne({
          where: {
            doa_id: req.params.doa_id,
          },
        });

      if (!doacao) {
        return res.status(400).json({ msg: 'Bad Request: Doação not found' });
      }

      const campanhaCheck = await checkCampanha(req.body, res, doacao.doa_campid);
      if (campanhaCheck !== true) {
        return campanhaCheck;
      }

      if (doacao.doa_confirmado) {
        if (req.body.confirm) {
          return res.status(400).json({ msg: 'Doação já foi confirmada.' });
        }
      } else {
        if (!req.body.confirm) {
          return res.status(400).json({ msg: 'Doação já está pendente.' });
        }
      }

      let newValues = {doa_confirmado: req.body.confirm};
      if (req.body.doa_quantidade) {
        if (!Number.isInteger(req.body.doa_quantidade)) {
          return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser um inteiro' });
        }
    
        if (!(req.body.doa_quantidade > 0)) {
          return res.status(400).json({ msg: 'Bad Request: Quantidade deve ser maior que 0' });
        }
        newValues["doa_quantidade"] = req.body.doa_quantidade;
      }
      
      doacao.update(newValues);
      
      return res.status(200).json();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  return {
    create,
    createTo,
    update
  };
};

module.exports = DoacaoController;
