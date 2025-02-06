let novoElemento = document.createElement('p')
let texto = document.createElement('Algum texto')

novoElemento.appendChild(texto)

let p = document.querySelector('#titulo')
let pai = p.parentNode

pai.appendChild(novoElemento)