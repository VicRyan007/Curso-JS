const padrao = /abacax?i/

console.log(padrao.test("abacaxi"))
console.log(padrao.test("abacai"))

const padrao1 = /\d+\w+/

console.log(padrao1.test("123"))
console.log(padrao1.test("123a"))
console.log(padrao1.test("123 "))