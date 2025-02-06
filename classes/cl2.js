class Carrinho {
    itens
    quantidadeTotal
    valorTotal
    constructor(itens,quantidadeTotal,valorTotal){
        this.itens = itens
        this.quantidadeTotal = quantidadeTotal
        this.valorTotal = valorTotal
    }

    adicionaItem(item){
        return this.itens+=item
    }
    removeItem(item){
        return this.itens-=item
    }
}

carrinho = new Carrinho

carrinho.itens = 10
carrinho.quantidadeTotal = 30
carrinho.valorTotal = 350.75

console.log(carrinho.adicionaItem(3))
console.log(carrinho.removeItem(1))
