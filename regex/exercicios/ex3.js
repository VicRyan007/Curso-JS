const reg = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(reg.test("Marca: PUMA"))
console.log(reg.test("Marca: 123"))
console.log(reg.test("nomeDaMarca: 123"))
console.log(reg.test("Marca: Adidas")) 
console.log(reg.test("Marca: Nike")) 
console.log(reg.test("nomeDaMarca:")) 