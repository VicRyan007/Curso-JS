const reg = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(reg.test("o"))
console.log(reg.test("ola"))