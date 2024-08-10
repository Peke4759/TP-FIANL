const memoriasRam = [
    { id: 1, nombre: "Corsair Vengeance LPX 16GB", gb: "16GB", img: "corsair_vengeance_lpx.jpg", precio: "$79.99", especificaciones: "DDR4, 3200MHz, CL16" },
    { id: 2, nombre: "G.SKILL Ripjaws V 32GB", gb: "32GB", img: "gskill_ripjaws_v.jpg", precio: "$149.99", especificaciones: "DDR4, 3600MHz, CL16" },
    { id: 3, nombre: "Kingston HyperX Fury 8GB", gb: "8GB", img: "kingston_hyperx_fury.jpg", precio: "$49.99", especificaciones: "DDR4, 2666MHz, CL16" },
    { id: 4, nombre: "Crucial Ballistix 16GB", gb: "16GB", img: "crucial_ballistix.jpg", precio: "$89.99", especificaciones: "DDR4, 3000MHz, CL15" },
    { id: 5, nombre: "Patriot Viper 4 8GB", gb: "8GB", img: "patriot_viper_4.jpg", precio: "$45.99", especificaciones: "DDR4, 2400MHz, CL16" },
    { id: 6, nombre: "ADATA XPG Spectrix D60G 32GB", gb: "32GB", img: "adata_xpg_spectrix_d60g.jpg", precio: "$169.99", especificaciones: "DDR4, 4133MHz, CL19" },
    { id: 7, nombre: "Team T-Force Delta RGB 16GB", gb: "16GB", img: "team_tforce_delta_rgb.jpg", precio: "$109.99", especificaciones: "DDR4, 3200MHz, CL16" },
    { id: 8, nombre: "V-Color PRISM 8GB", gb: "8GB", img: "vcolor_prism.jpg", precio: "$55.99", especificaciones: "DDR4, 3000MHz, CL16" },
    { id: 9, nombre: "Mushkin Enhanced Redline 16GB", gb: "16GB", img: "mushkin_enhanced_redline.jpg", precio: "$99.99", especificaciones: "DDR4, 3200MHz, CL16" },
    { id: 10, nombre: "Hynix DDR4 32GB", gb: "32GB", img: "hynix_ddr4.jpg", precio: "$139.99", especificaciones: "DDR4, 2933MHz, CL17" }
];

function getMemoriaRamById(id) {
    return memoriasRam.find(memoria => memoria.id == id);
}

function loadMemoriaRamDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const memoriaId = urlParams.get('id');
    const memoria = getMemoriaRamById(memoriaId);

    if (memoria) {
        document.getElementById('memoria-imagen').src = `../img/${memoria.img}`;
        document.getElementById('memoria-nombre').innerText = memoria.nombre;
        document.getElementById('memoria-gb').innerText = `Capacidad: ${memoria.gb}`;
        document.getElementById('memoria-precio').innerText = `Precio: ${memoria.precio}`;
        document.getElementById('memoria-especificaciones').innerText = `Especificaciones: ${memoria.especificaciones}`;
        
        // Acción para añadir al carrito
        document.getElementById('btn-add-cart').addEventListener('click', () => {
            alert(`${memoria.nombre} añadido al carrito.`);
            // Lógica para añadir al carrito...
        });
    } else {
        alert('Memoria RAM no encontrada.');
    }
}

window.onload = loadMemoriaRamDetails;
