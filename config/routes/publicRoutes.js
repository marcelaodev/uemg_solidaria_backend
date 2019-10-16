const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',

  'GET /campanhas': 'CampanhaController.getAll',
  'GET /campanha/:camp_id': 'CampanhaController.get',

  /*   'GET /campanha/:camp_id/grupo': 'CampanhaController.getRankingGrupo',
  'GET /campanha/:camp_id/individual': 'CampanhaController.getRankingIndividual', */

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