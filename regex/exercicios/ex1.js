reg = RegExp(/[A-Z]/)
 
console.log(reg.test("abc"))
console.log(reg.test(123))
console.log(reg.test("Asv123"))
console.log(reg.test("A"))