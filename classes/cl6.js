class WordCounter{
    constructor(){}

    countWord(palavra){
        const quantPalavras = palavra.split(' ')
        return quantPalavras.length
    }
}

contar = new WordCounter

palavra = "eu gosto muito de ler"
console.log(contar.countWord(palavra))