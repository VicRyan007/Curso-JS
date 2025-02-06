class ContaBancaria{
    constructor(numeroConta,saldo){
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    deposita(valor){
        this.saldo+=valor
    }

    sacar(valor){
        this.saldo-=valor
    }

    consultaSaldo(){
        return this.saldo
    }

}