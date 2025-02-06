const reg = /[12345]/

console.log(reg.test("temos o numero 6"))
console.log(reg.test("temos o numero 2"))
console.log(reg.test("temos o numero 543"))
console.log(reg.test("temos o numero 176"))

const reg1 = /[0-9]/

console.log(reg1.test("numero 129128873183791311199191911"))
console.log(reg1.test("numero"))