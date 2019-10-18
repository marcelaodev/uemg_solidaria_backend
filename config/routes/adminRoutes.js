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
   * @apiDescription Requer autenticação bearer obtido no método POST /public/login
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
   * @apiError ToDo
   *
   */
  

  /**
    * 
    * @api {post} /admin/grupo/     Cadastra um novo grupo (cursos)
    * @apiVersion 0.1.0
    * @apiName PostGrupo
    * @apiGroup Grupo
    * @apiPermission admin
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login
    *
    * 
    * @apiParam {String} gru_nome       Nome do grupo
    *
    * @apiSuccess {Number}   gru_id     Id do grupo criado
    * 
    * @apiError ToDo
    *
    */
    

  /**
    * 
    * @api {post} /admin/campanha/     Cadastra uma nova campanha
    * @apiVersion 0.1.0
    * @apiName PostCampanha
    * @apiGroup Campanha
    * @apiPermission admin
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login
    *
    * 
    * @apiParam {String} camp_nome       Nome da campanha
    * @apiParam {Date} camp_inicio       Data que a campanha inicia (YYYY-MM-DD)
    * @apiParam {Date} camp_final        Data que a campanha finaliza (YYYY-MM-DD)
    *
    * @apiSuccess {Number}   camp_id     Id da campanha criada
    * 
    * @apiError ToDo
    *
    */
    
    

  /**
    * 
    * @api {post} /admin/doacao/:usu_id     Cria uma doação para o usuário 'usu_id'
    * @apiVersion 0.1.0
    * @apiName PostDoacaoTerceiro
    * @apiGroup Doação
    * @apiPermission admin
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login
    *
    * 
    * @apiParam {Number} usu_id             Id do usuário que realizou a doação (passado pelo URI)
    * @apiParam {Number} doa_quantidade     Quantidade de tampinhas pets doada
    * @apiParam {Number} doa_campid         Id da campanha que a doação foi feita
    * 
    *
    * @apiParamExample {url} Request-URI
    * POST /admin/doacao/1
    *
    * @apiParamExample {json} Request-Body:
    *     {
    *       "doa_quantidade": 5,
	        "doa_campid": 1
    *     }
    *
    *
    * @apiSuccess {Number}   doa_id     Id da doação criada
    * 
    * @apiError ToDo
    *
    */
    

  /**
    * 
    * @api {put} /admin/doacao/:doa_id     Confirma ou estornar a doação 'doa_id'
    * @apiVersion 0.1.0
    * @apiName PutDoacao
    * @apiGroup Doação
    * @apiPermission admin
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login
    *
    * 
    * @apiParam {Number} doa_id             Id da doação a ser alterada (passado pelo URI)
    * @apiParam {Number} confirm            true=confirmar recebimento, false=estornar recebimento
    * 
    *
    * @apiParamExample {url} Request-URI
    * PUT /admin/doacao/5
    *
    * @apiParamExample {json} Request-Body:
    *     {
    *       "confirm": true
    *     }
    *
    *
    * @apiSuccess NoResponse
    * 
    * @apiError ToDo
    *
    */
    