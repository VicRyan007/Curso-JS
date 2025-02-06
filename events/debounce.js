let timeout
window.addEventListener("mousemove",(e) => {
    clearInterval(timeout)
    timeout = setTimeout(() => {
        console.log(e.x)
    },500)
})