let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto")

novoElemento.appendChild(texto)

let elementoAlvo = document.querySelector("titulo")
let elementoPai = document.querySelector("lista")

elementoPai.insertBefore(novoElemento,elementoAlvo)

