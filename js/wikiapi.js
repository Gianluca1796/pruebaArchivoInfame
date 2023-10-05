
const buscarBtn = document.getElementById('buscarBtn');
const resultadosDiv = document.getElementById('resultados');

buscarBtn.addEventListener('click', async () => {
    const url = `https://prueba-archivo-infame.vercel.app/wikipedia?query=José_Félix_Uriburu`;

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