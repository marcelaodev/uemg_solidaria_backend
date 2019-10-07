const adminRoutes = {
    'GET /users': 'UserController.getAll',

    'POST /grupo': 'GrupoController.create',
  
    'POST /campanha': 'CampanhaController.create',

    'POST /doacao/:usu_id': 'DoacaoController.createTo',
/* 
    'PUT /doacao/:doa_id': 'DoacaoController.confirm',

    'DELETE /doacao/:doa_id': 'DoacaoController.delete', */
};
  
module.exports = adminRoutes;
