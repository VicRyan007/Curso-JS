async function somar (a,b) {
    return a+b
}

console.log(somar(2,4))

somar(2,5).then(value => console.log(value))