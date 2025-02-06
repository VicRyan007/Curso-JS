const reg = new RegExp('bola')

console.log(reg.test("Tem bola"))
console.log(reg.test("Tem não"))

const reg1 = /bola/

console.log(reg1.test("Tem bola"))
console.log(reg1.test("Tem não"))

let txt = "tem bola na cesta"

console.log(reg1.test(txt))

console.log(/quadrado/.test("Onde tem um quadrado"))