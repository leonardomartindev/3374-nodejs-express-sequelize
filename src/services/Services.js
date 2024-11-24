const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegaTodosOsRegistrosPorPk(id) {
        return dataSource[this.model].findByPk(id);
    }

    async criaNovo(dados) {
        return dataSource[this.model].create(dados)
    }

    async atualizarDado(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
            where: {id: id}
        });
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    async deletarDado(id) {
        return dataSource[this.model].destroy({where: { id: id }});
    }
}

module.exports = Services;