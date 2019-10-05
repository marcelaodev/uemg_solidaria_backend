const adminRoutes = {
    'GET /users': 'UserController.getAll',

    'POST /grupo': 'GrupoController.create',
  
    'POST /campanha': 'CampanhaController.create',
/* 
    'GET /doacao': 'DoacaoController.getAll',
    'POST /doacao': 'DoacaoController.create', */
/* 
    'PUT /doacao/:doa_id': 'DoacaoController.confirm',

    'DELETE /doacao/:doa_id': 'DoacaoController.delete', */
};
  
module.exports = adminRoutes;
