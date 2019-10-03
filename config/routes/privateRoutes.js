const privateRoutes = {
  'GET /users': 'UserController.getAll',
  /* 'GET /user/:usu_id': 'UserController.get', */
  /*   'PUT /user/:usu_id': 'UserController.changeGrupo', */

  'POST /campanha': 'CampanhaController.create',

/*   'GET /doacao': 'DoacaoController.getAll',
  'POST /doacao': 'DoacaoController.create',
  'PUT /doacao/:doa_id': 'DoacaoController.edit',
  'DELETE /doacao/:doa_id': 'DoacaoController.delete', */
};

module.exports = privateRoutes;
