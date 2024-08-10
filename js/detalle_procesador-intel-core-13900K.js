const procesadores = [
    {
        id: 1,
        nombre: "Intel Core i9-13900K",
        nucleos: 24,
        img: "intel_core_i9_13900k.jpg",
        descripcion: "Procesador de alto rendimiento con 24 núcleos.",
        caracteristicas: [
            "Frecuencia base: 3.0 GHz",
            "Frecuencia turbo: 5.8 GHz",
            "Caché: 36 MB",
            "TDP: 125 W",
            "Tecnología: 10nm"
        ]
    },
    {
        id: 2,
        nombre: "AMD Ryzen 9 7950X",
        nucleos: 16,
        img: "amd_ryzen_9_7950x.jpg",
        descripcion: "Procesador de alto rendimiento con 16 núcleos.",
        caracteristicas: [
            "Frecuencia base: 4.2 GHz",
            "Frecuencia turbo: 5.7 GHz",
            "Caché: 64 MB",
            "TDP: 170 W",
            "Tecnología: 7nm"
        ]
    },
    // Agrega aquí el resto de los procesadores con sus características
];

function getParameterByName(name) {
    const regex = new RegExp('[?&]' + name + '=([^&]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function renderDetalleProcesador() {
    const id = parseInt(getParameterByName('id'), 10);
    const procesador = procesadores.find(p => p.id === id);

    if (procesador) {
        const container = document.getElementById('detalleProcesador');
        container.innerHTML = `
            <div class="col-md-6">
                <img src="../img/${procesador.img}" class="img-fluid" alt="${procesador.nombre}">
            </div>
            <div class="col-md-6">
                <h3>${procesador.nombre}</h3>
                <p><strong>Núcleos:</strong> ${procesador.nucleos}</p>
                <p>${procesador.descripcion}</p>
                <div class="characteristics">
                    <h4>Características:</h4>
                    <ul>
                        ${procesador.caracteristicas.map(caract => `<li>${caract}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else {
        document.getElementById('detalleProcesador').innerHTML = '<p>Producto no encontrado.</p>';
    }
}

document.getElementById('addToCart').addEventListener('click', () => {
    alert('Producto añadido al carrito.');
    // Aquí puedes agregar lógica para añadir al carrito
});

window.onload = renderDetalleProcesador;
