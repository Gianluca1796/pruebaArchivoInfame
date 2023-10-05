let home = document.getElementById("Home")
let path = document.location.pathname

const enAnexo2 = (window.location.href.includes("index") || window.location.href.includes("anexog") || window.location.href.includes("anexol") || window.location.href.includes("anexos") || window.location.href.includes("anexom")) ? true : false

enAnexo2 ? etiquetaTres() : etiquetaCuatro()

function etiquetaTres() {
    home.addEventListener("click", () => {
        if (!path.includes("index")) {
            window.location.href = "index.html"
        }else {
            console.log("ERROR: usuario ya se encuentra en index")
        }
    })
}

function etiquetaCuatro() {
    home.addEventListener("click", () => {
        if (!path.includes("index")) {
            window.location.href = "../index.html"
        }else {
            console.log("ERROR: usuario ya se encuentra en index")
        }
    })
}