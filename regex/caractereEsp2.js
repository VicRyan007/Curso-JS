const dia = /\d\d/

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("asd"))
console.log(dia.test("20") & "20".length == 2)

const palavrasTresLetras = /\w\w\w/
console.log(palavrasTresLetras.test("asd"))
console.log(palavrasTresLetras.test("asdd"))
console.log(palavrasTresLetras.test("as"))

