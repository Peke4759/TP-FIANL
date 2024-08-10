const discos = [
    { id: 1, nombre: "Samsung 970 EVO Plus 1TB", capacidad: "1TB", img: "samsung_970_evo_plus.jpg", precio: "$149.99", especificaciones: "Velocidad de lectura: 3500MB/s, Velocidad de escritura: 3300MB/s, Interface: NVMe M.2" },
    { id: 2, nombre: "Western Digital Black 2TB", capacidad: "2TB", img: "wd_black_2tb.jpg", precio: "$299.99", especificaciones: "Velocidad de lectura: 3400MB/s, Velocidad de escritura: 2800MB/s, Interface: NVMe M.2" },
    { id: 3, nombre: "Crucial MX500 1TB", capacidad: "1TB", img: "crucial_mx500_1tb.jpg", precio: "$99.99", especificaciones: "Velocidad de lectura: 560MB/s, Velocidad de escritura: 510MB/s, Interface: SATA III" },
    { id: 4, nombre: "Seagate BarraCuda 4TB", capacidad: "4TB", img: "seagate_barracuda_4tb.jpg", precio: "$89.99", especificaciones: "Velocidad de rotación: 5400RPM, Cache: 256MB, Interface: SATA III" },
    { id: 5, nombre: "Toshiba X300 5TB", capacidad: "5TB", img: "toshiba_x300_5tb.jpg", precio: "$119.99", especificaciones: "Velocidad de rotación: 7200RPM, Cache: 128MB, Interface: SATA III" },
    { id: 6, nombre: "Samsung T7 1TB", capacidad: "1TB", img: "samsung_t7_1tb.jpg", precio: "$109.99", especificaciones: "Velocidad de lectura: 1050MB/s, Velocidad de escritura: 1000MB/s, Interface: USB 3.2" },
    { id: 7, nombre: "SanDisk Extreme 1TB", capacidad: "1TB", img: "sandisk_extreme_1tb.jpg", precio: "$139.99", especificaciones: "Velocidad de lectura: 1050MB/s, Velocidad de escritura: 1000MB/s, Interface: USB 3.2" },
    { id: 8, nombre: "Kingston A400 960GB", capacidad: "960GB", img: "kingston_a400_960gb.jpg", precio: "$59.99", especificaciones: "Velocidad de lectura: 500MB/s, Velocidad de escritura: 450MB/s, Interface: SATA III" },
    { id: 9, nombre: "WD Blue 500GB", capacidad: "500GB", img: "wd_blue_500gb.jpg", precio: "$49.99", especificaciones: "Velocidad de lectura: 545MB/s, Velocidad de escritura: 525MB/s, Interface: SATA III" },
    { id: 10, nombre: "Samsung 860 EVO 1TB", capacidad: "1TB", img: "samsung_860_evo_1tb.jpg", precio: "$129.99", especificaciones: "Velocidad de lectura: 550MB/s, Velocidad de escritura: 520MB/s, Interface: SATA III" }
];

function getDiscoById(id) {
    return discos.find(disco => disco.id == id);
}

function loadDiscoDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const discoId = urlParams.get('id');
    const disco = getDiscoById(discoId);

    if (disco) {
        document.getElementById('disco-imagen').src = `../img/${disco.img}`;
        document.getElementById('disco-nombre').innerText = disco.nombre;
        document.getElementById('disco-capacidad').innerText = `Capacidad: ${disco.capacidad}`;
        document.getElementById('disco-precio').innerText = `Precio: ${disco.precio}`;
        document.getElementById('disco-especificaciones').innerText = `Especificaciones: ${disco.especificaciones}`;
        
        // Acción para añadir al carrito
        document.getElementById('btn-add-cart').addEventListener('click', () => {
            alert(`${disco.nombre} añadido al carrito.`);
            // Lógica para añadir al carrito...
        });
    } else {
        alert('Disco no encontrado.');
    }
}

window.onload = loadDiscoDetails;
