class ContaBancaria{
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    depositoCorrente(valor){
        this.saldoCorrente+=valor
    }
    depositoPoupanca(valor){
        this.saldoPoupanca+=valor
    }

    saqueCorrente(valor){
        this.saldoCorrente-=valor
    }
    saquePoupanca(valor){
        this.saldoPoupanca-=valor
    }

    transferirPoupancaParaCorrente(){
        this.saldoCorrente+=this.saldoPoupanca
        this.saldoPoupanca-=this.saldoPoupanca
    }

}

class ContaEspecial extends ContaBancaria{
    constructor(juros){
        super()
        this.juros = this.jurosPoupanca*2
    }
}