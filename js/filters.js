let anexo = document.getElementById("Anexo")
let sectionBody = document.getElementById("bodyContainer")

anexo.addEventListener("click", respuestaClick)

let filtro = document.getElementById("filterContainer")
let filtroDiv = document.createElement("div")
let cerrarDiv = document.createElement("div")
filtro.style.display = "none";
filtro.style.opacity = "0";

let panel1 = document.createElement("div")
/* let panel2 = document.createElement("div") */

let gobBtn = document.createElement("a")
let leysBtn = document.createElement("a")
let sucesBtn = document.createElement("a")
let movPolsBtn = document.createElement("a")
const filtros = [gobBtn, leysBtn, sucesBtn, movPolsBtn]

let gobTexto = document.createTextNode("Gobiernos")
let leysTexto = document.createTextNode("Leyes")
let sucesTexto = document.createTextNode("Sucesos")
let movPolsTexto = document.createTextNode("Mov.Políticos")

const textos = [gobTexto, leysTexto, sucesTexto, movPolsTexto]

filtro.appendChild(filtroDiv)
filtro.appendChild(cerrarDiv)      

filtroDiv.appendChild(panel1)
/* filtroDiv.appendChild(panel2) */

panel1.appendChild(filtros[0])
panel1.appendChild(filtros[1])
panel1.appendChild(filtros[2])
panel1.appendChild(filtros[3])

gobBtn.appendChild(textos[0])
leysBtn.appendChild(textos[1])
sucesBtn.appendChild(textos[2])
movPolsBtn.appendChild(textos[3])

filtros[0].setAttribute("class", "filtro")
filtros[1].setAttribute("class", "filtro")
filtros[2].setAttribute("class", "filtro")
filtros[3].setAttribute("class", "filtro")

const enAnexo = (window.location.href.includes("index") || window.location.href.includes("anexog") || window.location.href.includes("anexol") || window.location.href.includes("anexos") || window.location.href.includes("anexom")) ? true : false

enAnexo ? etiquetaUno() : etiquetaDos()

function etiquetaUno() {
    filtros[0].setAttribute("href", "anexogobierno.html")
    filtros[1].setAttribute("href", "anexoleyes.html")
    filtros[2].setAttribute("href", "anexosucesos.html")
    filtros[3].setAttribute("href", "anexomovpoliticos.html")
}

function etiquetaDos() {
    filtros[0].setAttribute("href", "../anexogobierno.html")
    filtros[1].setAttribute("href", "../anexoleyes.html")
    filtros[2].setAttribute("href", "../anexosucesos.html")
    filtros[3].setAttribute("href", "../anexomovpoliticos.html")
}

filtroDiv.setAttribute("id", "panel")
cerrarDiv.setAttribute("id", "cerrarPanel")

panel1.setAttribute("id", "panel1")
/* panel2.setAttribute("id", "panel2") */

let filtroVisible = 0

const esVisible = (filtroVisible == 0) ? true : false

function respuestaClick() {
    filtro.innerHTML = ""
    esVisible ? mostrarPanel() : esconderPanel()
}

function mostrarPanel() {
    filtro.innerHTML += filtroDiv.outerHTML
    filtro.style.display = "block";
    ++filtroVisible
}

function esconderPanel() {
    filtro.style.display = "none";
    filtroVisible = 0
}

function respuestaClick() {
    filtro.innerHTML = ""
    if (filtroVisible == 0) {
        filtro.innerHTML += filtroDiv.outerHTML
        filtro.style.display = "block";
        filtro.style.opacity = "1";
        filtro.style.transition = ".5s opacity ,.5s display";
        ++filtroVisible
    }else if (filtroVisible == 1) {
        filtro.style.display = "none";
        filtroVisible = 0
    }
}