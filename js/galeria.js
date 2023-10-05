const imagenes = [
    {
        id: 0,
        url: '../../src/img/3.justo_y_juan_pueblo_1934.jpg',
        info: ''
    },
    {
        id: 1,
        url: '../../src/img/843c8481-3a69-4cc2-8e83-237003e1be5f.jpg',
        info: ''
    },
    {
        id: 2,
        url: '../../src/img/16385476280-Lisandro-de-la-Torre-773x458.jpg',
        info: ''
    },
    {
        id: 3,
        url: '../../src/img/20210610150301_decada-infame-argentina-dictaduras.webp.jpg',
        info: ''
    },
    {
        id: 4,
        url: '../../src/img/Caricatura_que_muestra_al_presidente_Hipólito_Yrigoyen_seguido_por_los_gobernadores_personalistas._Caras_y_Caretas,_año_1928.jpg',
        info: ''
    },
    {
        id: 5,
        url: '../../src/img/descargar_(1).jpg',
        info: ''
    },
    {
        id: 6,
        url: '../../src/img/descargar.jpg',
        info: ''
    },
    {
        id: 7,
        url: '../../src/img/Julio_roca_hijo.png',
        info: ''
    },
    {
        id: 8,
        url: '../../src/img/Presidente_Agustín_Pedro_Justo.png',
        info: ''
    },
    {
        id: 9,
        url: '../../src/img/Ramoncastillo.jpg',
        info: ''
    },
    {
        id: 10,
        url: '../../src/img/Robertomortiz.jpg',
        info: ''
    },
    {
        id: 11,
        url: '../../src/img/TORRE.jpg',
        info: ''
    },
    {
        id: 12,
        url: '../../src/img/uriburuJusto.jpg',
        info: ''
    },
    {
        id: 13,
        url: '../../src/img/arton23488.jpg',
        info: ''
    },
    {
        id: 14,
        url: '../../src/img/farrelperon.jpg',
        info: ''
    },
    {
        id: 15,
        url: '../../src/img/José_Félix_Uriburu.jpg',
        info: ''
    },
    {
        id: 16,
        url: '../../src/img/imagen8677.jpg',
        info: ''
    },
    {
        id: 17,
        url: '../../src/img/fondo.png',
        info: ''
    }
]

let bodyContainer = document.getElementById("bodyContainer")
let contentContainer = document.getElementsByClassName("contentContainer")

let galeriaHTML = `
    <div class="imgContainer">
        <img src="${imagenes.map((el) => {el.url}).join("")}" alt="">
        <p></p>
    </div>
`

for (imagen in imagenes) {
    bodyContainer.innerHTML = ''
    contentContainer.innerHTML += galeriaHTML.outerHTML
    console.log(galeriaHTML)
}