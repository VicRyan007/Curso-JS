// validando domínio
const validandoDominio = /www.\w+\.com.br|.com/


console.log(validandoDominio.test("www.google.com"))
console.log(validandoDominio.test("www.google.com.br"))
console.log(validandoDominio.test("www.google."))

//validando email

const validandoEmail = /\w+@\w+\.\w+/

console.log(validandoEmail.test("ryannautico@gmail.com"))
console.log(validandoEmail.test("ryannautico@gmail"))
console.log(validandoEmail.test("ryannautico@.com"))

//validando data de nascimento
const validandoData =  /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validandoData.test("09//12/20989831"))
console.log(validandoData.test("09/12/2024"))
console.log(validandoData.test("2899/12/24"))