// intervalo de ocorrencias
const cep = /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("asd"))
console.log(cep.test("887-500"))
console.log(cep.test("88999999117-500"))

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(telefone.test("(48)99999-9999"))