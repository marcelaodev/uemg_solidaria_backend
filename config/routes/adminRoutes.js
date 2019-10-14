const adminRoutes = {
    'GET /users': 'UserController.getAll',

    'POST /grupo': 'GrupoController.create',
  
    'POST /campanha': 'CampanhaController.create',

    'POST /doacao/:usu_id': 'DoacaoController.createTo',
    'PUT /doacao/:doa_id': 'DoacaoController.update'
};
  
module.exports = adminRoutes;


  /**
   * @api {get} /admin/users Retrieve data of all Users
   * @apiVersion 0.3.0
   * @apiName GetUsers
   * @apiGroup User
   * @apiPermission admin
   *
   * @apiSuccess {Number}   usu_id              The Users-ID.
   * @apiSuccess {String}   usu_email           Email of the User
   * @apiSuccess {String}   usu_nome            Name of the User.
   * @apiSuccess {String}   usu_ra              RA (Registro Acadêmico) of the User.
   * @apiSuccess {String}   usu_celular         Celular of the User
   * @apiSuccess {Number}   usu_gruid           The group that the User is attached to (his course).
   * @apiSuccess {Number}   usu_acesso          1=Normal User, 2=Admin.
   * @apiSuccess {Date}     createdAt           Date that the User was created.
   * @apiSuccess {Date}     updatedAt           Date that the User was last modified.
   *
   * @apiError NoAccessRight Only authenticated Admins can access the data.
   *
   * @apiErrorExample Response (example):
   *     {
            "err": {
                "name": "TokenExpiredError",
                "message": "jwt expired",
                "expiredAt": "2019-10-12T00:42:07.000Z"
            }
            }
   */