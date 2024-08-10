const procesadores = [
    { id: 1, nombre: "Intel Core i9-13900K", nucleos: 24, img: "intel_core_i9_13900k.jpg", descripcion: "Procesador de alto rendimiento con 24 núcleos." },
    { id: 2, nombre: "AMD Ryzen 9 7950X", nucleos: 16, img: "amd_ryzen_9_7950x.jpg", descripcion: "Procesador de alto rendimiento con 16 núcleos." },
    { id: 3, nombre: "Intel Core i7-13700K", nucleos: 16, img: "intel_core_i7_13700k.jpg", descripcion: "Procesador potente con 16 núcleos." },
    { id: 4, nombre: "AMD Ryzen 7 7800X", nucleos: 8, img: "amd_ryzen_7_7800x.jpg", descripcion: "Procesador de alto rendimiento con 8 núcleos." },
    { id: 5, nombre: "Intel Core i5-13600K", nucleos: 14, img: "intel_core_i5_13600k.jpg", descripcion: "Procesador eficiente con 14 núcleos." },
    { id: 6, nombre: "AMD Ryzen 5 7600X", nucleos: 6, img: "amd_ryzen_5_7600x.jpg", descripcion: "Procesador con 6 núcleos para tareas intensivas." },
    { id: 7, nombre: "Intel Core i9-12900K", nucleos: 16, img: "intel_core_i9_12900k.jpg", descripcion: "Procesador de alto rendimiento con 16 núcleos." },
    { id: 8, nombre: "AMD Ryzen 9 7900X", nucleos: 12, img: "amd_ryzen_9_7900x.jpg", descripcion: "Procesador potente con 12 núcleos." },
    { id: 9, nombre: "Intel Core i7-12700K", nucleos: 12, img: "intel_core_i7_12700k.jpg", descripcion: "Procesador con 12 núcleos." },
    { id: 10, nombre: "AMD Ryzen 7 7700X", nucleos: 8, img: "amd_ryzen_7_7700x.jpg", descripcion: "Procesador eficiente con 8 núcleos." }
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
