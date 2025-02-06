// window.addEventListener("load",() => {
//     alert("Assine os termos")
// })

window.addEventListener("beforeunload",(e) => {
    event.returnValue = null
})