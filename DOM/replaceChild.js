let novoElemento = document.createElement('p')
let texto = document.createElement('Algum texto')

novoElemento.appendChild(texto)

let heading = document.querySelector('#lista')
let paiHeading = heading.parentNode

paiHeading.replaceChild(novoElemento,heading)