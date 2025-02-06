class Livro{
    constructor(titulo,autor,disponivel){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    emprestar(){
        if (this.disponivel == true){
            this.disponivel = false 
        } else {
            console.log("Não está disponível.")
        }
    }

    devolver(){
        if (this.disponivel != false){
            this.disponivel = true
        }
    }

    consultarDisponibilidade(){
        return this.disponivel
    }

}