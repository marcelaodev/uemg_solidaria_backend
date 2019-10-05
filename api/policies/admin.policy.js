const User = require('../models/User');

module.exports = async (req, res, next) => {
  const usu_id = req.token.usu_id;

  const user = await User
          .findOne({
            where: {
                usu_id
            },
          });

        if (user.usu_acesso == 2) {
          req.admin = true;
          return next();
        } else {
          return res.status(403).json({ msg: 'Not allowed' });
        }
};
