
const reg  = /\d+-ID\b/

console.log(reg.test(123))
console.log(reg.test("ab987-ID"))
console.log(reg.test("987-ID"))
console.log(reg.test("9-ID"))