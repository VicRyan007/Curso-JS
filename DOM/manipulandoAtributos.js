let a = document.querySelector('footer a')

console.log(a.getAttribute('href'))

let link = "www.google.com"

a.setAttribute('href',link)

console.log(a.getAttribute('href'))
