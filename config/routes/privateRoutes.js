const privateRoutes = {
  
  'PUT /user': 'UserController.edit',
  'POST /doacao': 'DoacaoController.create',

};

module.exports = privateRoutes;


  /**
    * 
    * @api {put} /private/user     Edita seus próprios dados de usuário (altera usuário logado)
    * @apiVersion 0.1.0
    * @apiName PutUser
    * @apiGroup Usuario
    * @apiPermission private
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login ou POST /public/user
    *
    * 
    * @apiParam {String} [usu_email]           Email do usuário
    * @apiParam {String} [usu_password]        Senha do usuário
   * @apiParam {String}   [usu_nome]            Nome do usuário
   * @apiParam {String}   [usu_ra]              RA (Registro Acadêmico) do usuário
   * @apiParam {String}   [usu_celular]         Celular do usuário
   * @apiParam {Number}   [usu_gruid]           Id do grupo (curso) que o usuário pertence
    * 
    *
    * @apiParamExample {json} Request-Body:
    *     {
            "usu_gruid": 3,
            "usu_ra": "12345678"
          }
    *
    *
    * @apiSuccess NoResponse
    * 
    * @apiError ToDo
    *
    */
    

  /**
    * 
    * @api {post} /private/doacao     Registrar doação própria
    * @apiVersion 0.1.0
    * @apiName PostDoacaoPropria
    * @apiGroup Doação
    * @apiPermission private
    * @apiDescription Requer autenticação bearer obtido no método POST /public/login ou POST /public/user
    *
    * 
    * @apiParam {Number{1-100}} doa_quantidade     Quantidade de tampinhas pets doada
    * @apiParam {Number} doa_campid         Id da campanha que a doação foi feita
    *
    *
    * @apiParamExample {json} Request-Body:
    *   {
          "doa_quantidade": 5,
          "doa_campid": 1
        }
    *
    *
    * @apiSuccess {Number}   doa_id     Id da doação criada
    * 
    * @apiError ToDo
    *
    */
    