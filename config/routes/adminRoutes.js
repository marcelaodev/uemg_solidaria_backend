const adminRoutes = {
    'GET /users': 'UserController.getAll',

    'POST /grupo': 'GrupoController.create',
  
    'POST /campanha': 'CampanhaController.create',

    'POST /doacao/:usu_id': 'DoacaoController.createTo',
    'PUT /doacao/:doa_id': 'DoacaoController.update'
};
  
module.exports = adminRoutes;


  /**
   * @api {get} /admin/usuarios Retorna os dados de todos os usuários
   * @apiVersion 0.1.0
   * @apiName GetUsuarios
   * @apiGroup Usuario
   * @apiPermission admin
   * @apiDescription Requre autenticação bearer obtido no método POST /public/login ou POST /public/usuario
   *
   * @apiSuccess {Number}   usu_id              Id do usuário
   * @apiSuccess {String}   usu_email           Email do usuário
   * @apiSuccess {String}   usu_nome            Nome do usuário
   * @apiSuccess {String}   usu_ra              RA (Registro Acadêmico) do usuário
   * @apiSuccess {String}   usu_celular         Celular do usuário
   * @apiSuccess {Number}   usu_gruid           Id do grupo (curso) que o usuário pertence
   * @apiSuccess {Number}   usu_acesso          1=Usuário comum, 2=Administrador.
   * @apiSuccess {Date}     createdAt           Data da criação do usuário
   * @apiSuccess {Date}     updatedAt           Data da última modificação do usuário
   *
   * @apiError NoAccessRight Only authenticated Admins can access the data.
   *
   * @apiErrorExample Sem enviar token
   *    HTTP/1.1 401 Unauthorized
   *    {
            "msg": "No Authorization was found"
        }
   *
   * @apiErrorExample Token expirado
   *    HTTP/1.1 401 Unauthorized
   *    {
            "err": {
                "name": "TokenExpiredError",
                "message": "jwt expired",
                "expiredAt": "2019-10-12T00:42:07.000Z"
            }
        }
   *
   * @apiErrorExample Token sem permissão administrador
   *    HTTP/1.1 403 Forbidden
   *    {
            "msg": "Not allowed"
        }
   *
   */
  