const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /login': 'UserController.login',

  'GET /campanhas': 'CampanhaController.getAll',
  'GET /campanha/:camp_id': 'CampanhaController.get',

  /*   'GET /campanha/:camp_id/grupo': 'CampanhaController.getRankingGrupo',*/
  'GET /campanha/:camp_id/individual': 'CampanhaController.getRankingIndividual', 

  'GET /grupos': 'GrupoController.getAll',
  /* 'GET /grupo/:gru_id/alfabetico': 'GrupoController.getIntegrantesAlfabetico',
  'GET /grupo/:gru_id/cronologico': 'GrupoController.getIntegrantesCronologico',
  'GET /grupo/:gru_id/doacao/:camp_id': 'GrupoController.getIntegrantesDoacao', */
};

module.exports = publicRoutes;


  /**
   * @api {get} /public/campanhas Retorna todas as campanhas cadastradas
   * @apiVersion 0.1.0
   * @apiName GetCampanhas
   * @apiGroup Campanha
   * @apiPermission public
   *
   * @apiSuccess {Number}   camp_id       Id da campanha
   * @apiSuccess {String}   camp_nome     Nome da campanha
   * @apiSuccess {Date}     camp_inicio   Data do início da campanha (formato americano)
   * @apiSuccess {Date}     camp_final    Data do final da campanha (formato americano)
   * @apiSuccess {String}   camp_ativo    1=Ativa, 0=Finalizada
   *
   */

  /**
   * @api {get} /public/campanha/:camp_id Retorna informações da campanha
   * @apiVersion 0.1.0
   * @apiName GetCampanha
   * @apiGroup Campanha
   * @apiPermission public
   *
   * @apiSuccess {Number}   camp_id       Id da campanha
   * @apiSuccess {String}   camp_nome     Nome da campanha
   * @apiSuccess {Date}     camp_inicio   Data do início da campanha (formato americano)
   * @apiSuccess {Date}     camp_final    Data do final da campanha (formato americano)
   * @apiSuccess {String}   camp_ativo    1=Ativa, 0=Finalizada
   * 
   * @apiError CampanhaNotFound O id pesquisado não é campanha.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "msg": "Bad Request: Campanha not found"
   *     }
   */

  /**
   * @api {get} /public/grupos Retorna todas os grupos cadastrados
   * @apiVersion 0.1.0
   * @apiName GetGrupos
   * @apiGroup Grupo
   * @apiPermission public
   *
   * @apiSuccess {Number}   gru_id       Id do grupo
   * @apiSuccess {String}   gru_nome     Nome do grupo
   *
   */


  /**
    * 
    * @api {post} /public/user/     Registra um novo usuário
    * @apiVersion 0.1.0
    * @apiName PostUser
    * @apiGroup Usuario
    * @apiPermission public
    *
    * 
    * @apiParam {String}   usu_email           Email do usuário
    * @apiParam {String}   usu_password        Senha do usuário
    * @apiParam {String}   usu_nome            Nome do usuário
    * @apiParam {String}   [usu_ra]            RA (Registro Acadêmico) do usuário
    * @apiParam {String}   [usu_celular]       Celular do usuário
    * @apiParam {Number}   usu_gruid           Id do grupo (curso) que o usuário pertence
    *
    * @apiSuccess {Number}      token         Bearer Token que deve ser usado nas requests /private e /admin
    * @apiSuccess {Number}      usu_id        Id do usuário criado
    * 
    * @apiError ToDo
    *
    */
   

  /**
    * 
    * @api {post} /public/login/     Login do usuário
    * @apiVersion 0.1.0
    * @apiName PostLogin
    * @apiGroup Usuario
    * @apiPermission public
    *
    * 
    * @apiParam {String}   usu_email           Email do usuário
    * @apiParam {String}   usu_password        Senha do usuário
    *
    * @apiSuccess {Number}        token           Bearer Token que deve ser usado nas requests /private e /admin
    * @apiSuccess {Object[]}      usu
    * @apiSuccess {String}   usu.usu_id              Id do usuário
    * @apiSuccess {String}   usu.usu_email           Email do usuário
    * @apiSuccess {String}   usu.usu_password        Senha do usuário
    * @apiSuccess {String}   usu.usu_nome            Nome do usuário
    * @apiSuccess {String}   usu.usu_ra            RA (Registro Acadêmico) do usuário
    * @apiSuccess {String}   usu.usu_celular       Celular do usuário
    * @apiSuccess {Number}   usu.usu_gruid           Id do grupo (curso) que o usuário pertence
    * 
    * @apiError ToDo
    *
    */

  /**
   * @api {get} /public/campanha/:camp_id/individual Retorna o ranking de doações individuais da campanha
   * @apiVersion 0.1.0
   * @apiName GetCampanhaRankingIndividual
   * @apiGroup Campanha
   * @apiPermission public
   * 
    * @apiParam {String}   camp_id           Id da campanha para gerar o ranking
   *
   * @apiSuccess ToDo
   * 
   * @apiError ToDo
   */
