const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("ab"))
console.log(notab.test("aqui tem b e a"))

const notaz = /[^a-z]/
console.log(notaz.test("asd"))
console.log(notaz.test("123"))