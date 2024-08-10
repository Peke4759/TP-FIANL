const discos = [
    { id: 1, nombre: "Samsung 970 EVO Plus 1TB", capacidad: "1TB", img: "samsung_970_evo_plus.jpg", precio: "$149.99" },
    { id: 2, nombre: "Western Digital Black 2TB", capacidad: "2TB", img: "wd_black_2tb.jpg", precio: "$299.99" },
    { id: 3, nombre: "Crucial MX500 1TB", capacidad: "1TB", img: "crucial_mx500_1tb.jpg", precio: "$99.99" },
    { id: 4, nombre: "Seagate BarraCuda 4TB", capacidad: "4TB", img: "seagate_barracuda_4tb.jpg", precio: "$89.99" },
    { id: 5, nombre: "Toshiba X300 5TB", capacidad: "5TB", img: "toshiba_x300_5tb.jpg", precio: "$119.99" },
    { id: 6, nombre: "Samsung T7 1TB", capacidad: "1TB", img: "samsung_t7_1tb.jpg", precio: "$109.99" },
    { id: 7, nombre: "SanDisk Extreme 1TB", capacidad: "1TB", img: "sandisk_extreme_1tb.jpg", precio: "$139.99" },
    { id: 8, nombre: "Kingston A400 960GB", capacidad: "960GB", img: "kingston_a400_960gb.jpg", precio: "$59.99" },
    { id: 9, nombre: "WD Blue 500GB", capacidad: "500GB", img: "wd_blue_500gb.jpg", precio: "$49.99" },
    { id: 10, nombre: "Samsung 860 EVO 1TB", capacidad: "1TB", img: "samsung_860_evo_1tb.jpg", precio: "$129.99" }
];

function renderDiscos() {
    const container = document.getElementById('discos');

    // Verificar si el contenedor existe
    if (!container) {
        console.error("El contenedor 'discos' no se encontró en la página.");
        return;
    }

    container.innerHTML = discos.map(disco => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../img/${disco.img}" class="card-img-top" alt="${disco.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${disco.nombre}</h5>
                    <p class="card-text">${disco.capacidad} - ${disco.precio}</p>
                    <a href="detalle_disco.html?id=${disco.id}" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

window.onload = renderDiscos;
