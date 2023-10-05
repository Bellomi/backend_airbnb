/* Controller é onde a gente trata a requisiçao ao BD anter de devolver o resultado.
metodos que podemos ter dentro de um controller: index, show, update, store, destroy.
index: listagem de sessoes,
store: criar uma nova sessao (novo login),
show: qdo queremos listar uma unica sessao,
update: atualizar uma sessao,
destroy: deletar uma sessao. ex: excluir um usuario.
*/

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const email = req.body.email;

    //verificando se este usuário ja existe
    let user = await User.findOne({ email });

    //se ele nao existir será criado um novo
    if (!user) {
        user = await User.create({ email });    }

    return res.json(user);
  }
}

export default new SessionController();
