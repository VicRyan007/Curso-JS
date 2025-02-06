class Endereço {
    constructor(Rua,Bairro,Cidade,Estado){
        this.Rua = Rua 
        this.Bairro = Bairro
        this.Cidade = Cidade
        this.Estado = Estado
    }

    getRua(){
        return this.Rua
    }

    setRua(Rua){
        this.Rua = Rua 
    }

    getBairro(){
        return this.Bairro
    }

    setBairro(Bairro){
        this.Bairro = Bairro
    }

    getCidade(){
        return this.Cidade
    }

    setCidade(Cidade){
        this.Cidade = Cidade
    }

    getEstado(){
        return this.Estado
    }

    setEstado(Estado ){
        this.Estado = Estado 
    }
}

let endereço = new Endereço("Rua das gaivotas", "Terrário", "São Joaquim","SC")

console.log(endereço)

endereço.setBairro("Laranjeiras")

console.log(endereço)