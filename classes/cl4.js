class Carro {
    constructor(marca, cor, gasolinaRestante) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
    }

    dirigir() {
        return this.gasolinaRestante-=10
    }
    reabastecer() {
        return this.gasolinaRestante+=10
    }
}


carro = new Carro("BYD", "amarelo", 100.00)

console.log("dirigindo")
console.log(carro.dirigir())
console.log(carro.dirigir())
console.log(carro.dirigir())
console.log(carro.dirigir())
console.log("reabastecendo")
console.log(carro.reabastecer())
console.log(carro.reabastecer())
console.log(carro.reabastecer())
console.log(carro.reabastecer())
console.log(carro.reabastecer())



