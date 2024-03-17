class TurmaPresencial extends Turma {
    constructor(frequencia) {
        super();
        this._frequencia = frequencia;
    }

    get frequencia() {
        return this._frequencia;
    }

    set frequencia(frequencia) {
        this._frequencia = frequencia;
    }

    aprovado() {
        return this._nota >= 7.0 && this._frequencia >= 70;
    }
}

module.exports = TurmaPresencial;
