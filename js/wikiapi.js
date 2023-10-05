// var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=facebook";

// var params = {
//     action: "query",
//     prop: "revisions",
//     titles: "API|Main Page",
//     rvprop: "timestamp|user|comment|content",
//     rvslots: "main",
//     formatversion: "2",
//     format: "json"
// };

// url = url + "?origin=*";
// Object.keys(params).forEach(function (key) {
//     url += "&" + key + "=" + params[key];
// });

// fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         var pages = response.query.pages;
//         for (var p in pages) {
//             console.log(pages[p].revisions);
//         }
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// async function buscarWikipedia() {
//     const url = `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=José_Félix_Uriburu`;;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         // Aquí puedes acceder a la información específica sobre José Félix Uriburu en data
//         console.log(data);
//     } catch (error) {
//         console.error('Error al buscar en Wikipedia:', error);
//     }
// }
const buscarBtn = document.getElementById('buscarBtn');
const resultadosDiv = document.getElementById('resultados');

buscarBtn.addEventListener('click', async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=José_Félix_Uriburu`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Limpia los resultados anteriores
        resultadosDiv.innerHTML = '';

        // Muestra los resultados en un div
        const pages = data.query.pages;
        for (const pageId in pages) {
            const resultado = pages[pageId];
            const resultadoElement = document.createElement('div');
            resultadoElement.innerHTML = `<h3>${resultado.title}</h3><p>${resultado.extract}</p>`;
            resultadosDiv.appendChild(resultadoElement);
        }
    } catch (error) {
        console.error('Error al buscar en Wikipedia:', error);
    }
});