let btn1 = document.querySelector("#btn1")

btn1.addEventListener("mousedown",() => {
    console.log("Apertou o botão")
})

btn1.addEventListener("mouseup",() => {
    console.log("Soltou o botão")
})

btn2.addEventListener("dblclick",() => {
    console.log("Clicou duas vezes")
})

btn2.addEventListener("contextmenu",(e) =>{

        e.preventDefault()
        console.log("Botão direito")

})

// window.addEventListener("mousemove",(e) => {
//     console.log(e.x)
//     console.log(e.y)
// })

window.addEventListener('scroll',(e) => {
    if(window.pageYOffset > 100){
        console.log("Ativou")
    }
})

let input = document.querySelector("#input1")

input.addEventListener("focus",() => {
    console.log("Entrou input")
})


input.addEventListener("blur",() => {
    console.log("Saiu do input")
})