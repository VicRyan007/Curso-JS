class Banco {
    saldo
    deposito(valor) {
        return this.saldo += valor
    }
    saque(valor) {
        return this.saldo -= valor
    }

}
banco = new Banco()

banco.saldo = 100

console.log(banco.deposito(50))
console.log(banco.saque(20))
