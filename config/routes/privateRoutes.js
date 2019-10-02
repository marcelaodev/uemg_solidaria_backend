const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /user/{id}': 'UserController.get',
  'PUT /user/{id}': 'UserController.changeGrupo',


  // CRUD campanha

  // CRUD doacao

};

module.exports = privateRoutes;
