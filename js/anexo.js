let firstOption = document.getElementById("0")
let secondOption = document.getElementById("1")
let thirdOption = document.getElementById("2")
let fourthOption = document.getElementById("3")

if (window.location.href.includes("gob")) {
    firstOption.addEventListener('click', () => {
        window.location.replace("presidentes/uriburu.html")
    })
    secondOption.addEventListener('click', () => {
        window.location.replace("presidentes/justo.html")
    })
    thirdOption.addEventListener('click', () => {
        window.location.replace("presidentes/ortiz.html")
    })
    fourthOption.addEventListener('click', () => {
        window.location.replace("presidentes/castillo.html")
    })
}else if (window.location.href.includes("ley")) {
    firstOption.addEventListener('click', () => {
        window.location.replace("leyes/11682.html")
    })
    secondOption.addEventListener('click', () => {
        window.location.replace("leyes/11729.html")
    })
    thirdOption.addEventListener('click', () => {
        window.location.replace("leyes/12155.html")
    })
    fourthOption.addEventListener('click', () => {
        window.location.replace("leyes/12160.html")
    })
}else if (window.location.href.includes("mov")) {
    firstOption.addEventListener('click', () => {
        window.location.replace("movpoliticos/conco.html")
    })
    secondOption.addEventListener('click', () => {
        window.location.replace("movpoliticos/perso.html")
    })
    thirdOption.addEventListener('click', () => {
        window.location.replace("movpoliticos/anti.html")
    })
    fourthOption.addEventListener('click', () => {
        window.location.replace("movpoliticos/conse.html")
    })
}else {
    firstOption.addEventListener('click', () => {
        window.location.replace("sucesos/gol30.html")
    })
    secondOption.addEventListener('click', () => {
        window.location.replace("sucesos/fraup.html")
    })
    thirdOption.addEventListener('click', () => {
        window.location.replace("sucesos/planpi.html")
    })
    fourthOption.addEventListener('click', () => {
        window.location.replace("sucesos/rev43.html")
    })
}