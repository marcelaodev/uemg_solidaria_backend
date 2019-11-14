const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /login': 'UserController.login',

  'GET /campanhas': 'CampanhaController.getAll',
  'GET /campanha/:camp_id': 'CampanhaController.get',

  'GET /campanha/:camp_id/grupo': 'CampanhaController.getRankingGrupo',
  'GET /campanha/:camp_id/individual': 'CampanhaController.getRankingIndividual', 

  'GET /grupos': 'GrupoController.getAll',
  'GET /grupo/:gru_id/users': 'GrupoController.getIntegrantes',
  'GET /grupo/:gru_id/campanha/:camp_id': 'GrupoController.getDoacaoCampanha',
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
   * @api {get} /public/grupo/:gru_id/users Retorna todos os integrantes do grupo
   * @apiVersion 0.1.0
   * @apiName GetGruposIntegrantes
   * @apiGroup Grupo
   * @apiPermission public
   *
   * @apiSuccess {Number}   gru_id       Id do grupo
   *
   */

  /**
   * @api {get} /public/grupo/:gru_id/campanha/:camp_id Retorna ranking de doações do grupo
   * @apiVersion 0.1.0
   * @apiName GetGruposDoacao
   * @apiGroup Grupo
   * @apiPermission public
   *
   * @apiSuccess {Object[]}   usu           Id do grupo
   * @apiSuccess {Number}   usu.usu_nome    Nome do integrante
   * @apiSuccess {Number}   usu.total       Total de doações confirmadas do integrante
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
    * @apiParam {String{4..255}}   usu_email           Email do usuário
    * @apiParam {String{6..255}}   usu_password        Senha do usuário
    * @apiParam {String{3..255}}   usu_nome            Nome do usuário
    * @apiParam {String{5..15}}   [usu_ra]            RA (Registro Acadêmico) do usuário
    * @apiParam {String}   [usu_celular]       Celular do usuário
    * @apiParam {Number}   [usu_gruid]           Id do grupo (curso) que o usuário pertence
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
   * @apiSuccess {Object[]}      usu
    * @apiSuccess {String}   usu.usu_id             Id do usuário
    * @apiSuccess {String}   usu.usu_nome           Nome do usuário doador
    * @apiSuccess {String}   usu.total              Total de doações confirmadas na campanha
   * 
   * @apiError ToDo
   */

  /**
   * @api {get} /public/campanha/:camp_id/grupo Retorna o ranking de doações da campanha agrupado por grupos
   * @apiVersion 0.1.0
   * @apiName GetCampanhaRankingGrupo
   * @apiGroup Campanha
   * @apiPermission public
   * 
    * @apiParam {String}   camp_id           Id da campanha para gerar o ranking
   *
   * @apiSuccess {Object[]}      gru
    * @apiSuccess {String}   gru.gru_id             Id do grupo
    * @apiSuccess {String}   gru.gru_nome           Nome do grupo doador
    * @apiSuccess {String}   gru.total              Total de doações confirmadas na campanha
   * 
   * @apiError ToDo
   */
