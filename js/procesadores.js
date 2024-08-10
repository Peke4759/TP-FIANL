const procesadores = [
    { nombre: "Intel Core i9-13900K", nucleos: 24, img: "intel_core_i9_13900k.jpg", id: 1 },
    { nombre: "AMD Ryzen 9 7950X", nucleos: 16, img: "amd_ryzen_9_7950x.jpg", id: 2 },
    { nombre: "Intel Core i7-13700K", nucleos: 16, img: "intel_core_i7_13700k.jpg", id: 3 },
    { nombre: "AMD Ryzen 7 7800X", nucleos: 8, img: "amd_ryzen_7_7800x.jpg", id: 4 },
    { nombre: "Intel Core i5-13600K", nucleos: 14, img: "intel_core_i5_13600k.jpg", id: 5 },
    { nombre: "AMD Ryzen 5 7600X", nucleos: 6, img: "amd_ryzen_5_7600x.jpg", id: 6 },
    { nombre: "Intel Core i9-12900K", nucleos: 16, img: "intel_core_i9_12900k.jpg", id: 7 },
    { nombre: "AMD Ryzen 9 7900X", nucleos: 12, img: "amd_ryzen_9_7900x.jpg", id: 8 },
    { nombre: "Intel Core i7-12700K", nucleos: 12, img: "intel_core_i7_12700k.jpg", id: 9 },
    { nombre: "AMD Ryzen 7 7700X", nucleos: 8, img: "amd_ryzen_7_7700x.jpg", id: 10 }
];

function renderProcesadores(criterio) {
    const lista = document.getElementById('procesadoresList');
    let procesadoresOrdenados = procesadores;

    if (criterio !== 'default') {
        procesadoresOrdenados = procesadores.sort((a, b) => a[criterio] - b[criterio]);
    }

    lista.innerHTML = '';
    procesadoresOrdenados.forEach(procesador => {
        const li = document.createElement('li');
        li.classList.add('media', 'mb-4');
        li.innerHTML = `
            <a href="detalle_procesador.html?id=${procesador.id}">
                <img src="../img/${procesador.img}" class="mr-3" alt="${procesador.nombre}" style="width: 100px;">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">${procesador.nombre}</h5>
                    ${procesador.nucleos} Núcleos
                </div>
            </a>
        `;
        lista.appendChild(li);
    });
}

document.getElementById('sortProcesadores').addEventListener('change', (e) => {
    renderProcesadores(e.target.value);
});

window.onload = () => renderProcesadores('default');
