class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async criaRegistro(req, res) {
        const dado = req.body;

        try {
            const novoDado = await this.entidadeService.criaNovo(dado);
            return res.status(200).json(novoDado);
            
        } catch{
            //erro
        }
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
        return res.status(200).json(listaDeRegistros);
        } catch(erro) {
        }
    }

    async pegaRegistro(req, res) {
        const {id} = req.params;
        try {
            const registro = await this.entidadeService.pegaTodosOsRegistrosPorPk(id);
        return res.status(200).json(registro);
        } catch(erro) {
        }
    }

    async atualizaRegistro(req, res) {
        const { id } = req.params;
        const dadoAtualizado = req.body;
        try {
            const novosRegistrosAtualizados = await this.entidadeService.atualizarDado(dadoAtualizado, Number(id));
            if(!novosRegistrosAtualizados) {
                return res.status(400).json({mensagem: 'registro não foi atualizado'});
            }
            return res.status(200).json({mensagem: 'registro atualizado com sucesso'});
        } catch {
            //erro
        }
    }

    async deletarRegistro(req, res) {
        const { id } = req.params;
        const registro = await this.entidadeService.pegaTodosOsRegistrosPorPk(id);
        try{
            await this.entidadeService.deletarDado(Number(id));
            return res.status(200).json({mensagem: `id ${registro.nome} deletado`})
        } catch (error) {
            //erro
        }
    }
}

module.exports = Controller;