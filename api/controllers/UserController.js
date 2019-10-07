const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.usu_password === body.usu_password2) {
      try {
        const user = await User.create({
          usu_email: body.usu_email,
          usu_password: body.usu_password,
        });
        const token = authService().issue({ id: user.usu_id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
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
        return res.status(500).json({ msg: 'Internal server error' });
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
      return res.status(500).json({ msg: 'Internal server error' });
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

      user.update(req.body);
      
      return res.status(200).json();
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
  };
};

module.exports = UserController;
