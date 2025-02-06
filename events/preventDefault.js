let a = document.querySelector("a")

a.addEventListener("click",(e) => {
    e.preventDefault()
    console.log("Não vai mudar de link")
})