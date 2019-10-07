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
