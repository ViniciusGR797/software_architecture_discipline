class Turma {
    constructor(codigo, nota) {
        this._codigo = codigo;
        this._nota = nota;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get nota() {
        return this._nota;
    }

    set nota(nota) {
        this._nota = nota;
    }

    aprovado() {
        return this._nota >= 7.0;
    }
}

module.exports = Turma;
