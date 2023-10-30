class ClienteBanco {
    constructor (nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    depositarcem () {
        this.saldo = this.saldo + 100
    }

    sacarcem () {
        this.saldo = this.saldo - 100
    }
}