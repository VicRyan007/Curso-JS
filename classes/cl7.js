class Retangulo{
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }

    calcularArea(){
        return this.altura*this.largura
    }

    calcularPerimetro(){
        return 2*(this.altura+this.largura)
    }

}