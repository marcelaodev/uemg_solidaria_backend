const User = require('../models/User');
const Campanha = require('../models/Campanha');
const Grupo = require('../models/Grupo');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;
    const { usu_email, usu_password, usu_nome, usu_ra, usu_celular, usu_gruid } = body;

    if (Number.isInteger(usu_gruid)) {
      const grupo = await Grupo
      .findOne({
        where: {
          gru_id: usu_gruid
        },
      });
  
      if (!grupo) {
        return res.status(400).json({ msg: 'Bad Request: Grupo not found' });
      }
    }

    try {
      const user = await User.create({
        usu_email, usu_password, usu_nome, usu_ra, usu_celular, usu_gruid
      });
      const token = authService().issue({ usu_id: user.usu_id });

      return res.status(200).json({ token, usu_id: user.usu_id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const login = async (req, res) => {
    const { usu_email, usu_password } = req.body;

    if (usu_email && usu_password) {
      try {
        const user = await User
          .findOne({
            where: {
              usu_email: usu_email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(usu_password, user.usu_password)) {
          const token = authService().issue({ usu_id: user.usu_id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const edit = async (req, res) => {

    try {
      const user = await User
        .findOne({
          where: {
            usu_id: req.token.usu_id,
          },
        });

      if (!user) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
      }
      if (req.body.usu_id) {
        delete req.body.usu_id;
      }
      if (req.body.usu_acesso) {
        delete req.body.usu_acesso;
      }

      user.update(req.body);
      
      return res.status(200).json({ msg: 'OK' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  const getDoacoes = async (req, res) => {

    try {
      const user = await User
        .findOne({
          where: {
            usu_id: req.params.usu_id,
          },
        });

      if (!user) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
      }

      const camp = await Campanha
        .findOne({
          where: {
            camp_id: req.params.camp_id,
          },
        });

      if (!camp) {
        return res.status(400).json({ msg: 'Bad Request: Campanha not found' });
      }


      const doacoes = await User.getDoacoes(req.params.usu_id, req.params.camp_id);

      return res.status(200).json(doacoes[0]);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', errors: err.errors });
    }
  };

  return {
    register,
    login,
    validate,
    getAll,
    edit,
    getDoacoes
  };
};

module.exports = UserController;
