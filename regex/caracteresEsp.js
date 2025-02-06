/*

\d - Qualquer digito de caractere
\w - Um caractere alfanumério ("teste")
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são dígitos
\W - Caractere não-alfanumérico
\S - Caractere que não seja espaço em branco
. - Qualquer caractere, menos nova linha

*/


const pontoReg = /./

console.log(pontoReg.test("asd"))
console.log(pontoReg.test(" "))
console.log(pontoReg.test(123))
console.log(pontoReg.test("sda89"))

console.log("----------------")

const dReg = /\d/ //[0-9]

console.log(dReg.test("asd"))
console.log(dReg.test(" "))
console.log(dReg.test("234"))
console.log(dReg.test("2desq34"))

console.log("----------------")

const dReg2 = /\D/
console.log(dReg2.test("asd"))
console.log(dReg2.test(" "))
console.log(dReg2.test("234"))
console.log(dReg2.test("2desq34"))

console.log("----------------")

const sReg = /\s/
console.log(sReg.test("asd"))
console.log(sReg.test(" "))
console.log(sReg.test("234"))
console.log(sReg.test("2desq34"))

console.log("----------------")

const wReg = /\w/
console.log(wReg.test("asd"))
console.log(wReg.test(" "))
console.log(wReg.test("234"))
console.log(wReg.test("2desq34"))