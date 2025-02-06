function tipoDeDado(dado){
    if(typeof dado == "number"){
        console.log("é um number")
    } else if(typeof dado == "string"){
        console.log("é uma string")
    } else if(typeof dado == "boolean"){
        console.log("é um boolean")
    }
}


tipoDeDado(3)
tipoDeDado("olá")
tipoDeDado(true)