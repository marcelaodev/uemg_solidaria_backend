const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',

  'GET /campanha': 'CampanhaController.getAll',
  'GET /campanha/{id}': 'CampanhaController.get',
  'GET /campanha/{id}/grupo': 'CampanhaController.getRankingGrupo',
  'GET /campanha/{id}/individual': 'CampanhaController.getRankingIndividual',

  'GET /grupo': 'GrupoController.getAll',
  'GET /grupo/{id}/alfabetico': 'GrupoController.getIntegrantesAlfabetico',
  'GET /grupo/{id}/cronologico': 'GrupoController.getIntegrantesCronologico',
  'GET /grupo/{id}/doacao/{campanha}': 'GrupoController.getIntegrantesDoacao',
};

module.exports = publicRoutes;
