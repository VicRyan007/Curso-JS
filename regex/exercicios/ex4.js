const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(reg.test("127.0.0.1"))
console.log(reg.test("127.0.0.a"))
console.log(reg.test("127.0.0."))
console.log(reg.test("a.b.c.e"))
console.log(reg.test("abc"))



