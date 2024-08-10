const memoriasRam = [
    { id: 1, nombre: "Corsair Vengeance LPX 16GB", gb: "16GB", img: "corsair_vengeance_lpx.jpg", precio: "$79.99" },
    { id: 2, nombre: "G.SKILL Ripjaws V 32GB", gb: "32GB", img: "gskill_ripjaws_v.jpg", precio: "$149.99" },
    { id: 3, nombre: "Kingston HyperX Fury 8GB", gb: "8GB", img: "kingston_hyperx_fury.jpg", precio: "$49.99" },
    { id: 4, nombre: "Crucial Ballistix 16GB", gb: "16GB", img: "crucial_ballistix.jpg", precio: "$89.99" },
    { id: 5, nombre: "Patriot Viper 4 8GB", gb: "8GB", img: "patriot_viper_4.jpg", precio: "$45.99" },
    { id: 6, nombre: "ADATA XPG Spectrix D60G 32GB", gb: "32GB", img: "adata_xpg_spectrix_d60g.jpg", precio: "$169.99" },
    { id: 7, nombre: "Team T-Force Delta RGB 16GB", gb: "16GB", img: "team_tforce_delta_rgb.jpg", precio: "$109.99" },
    { id: 8, nombre: "V-Color PRISM 8GB", gb: "8GB", img: "vcolor_prism.jpg", precio: "$55.99" },
    { id: 9, nombre: "Mushkin Enhanced Redline 16GB", gb: "16GB", img: "mushkin_enhanced_redline.jpg", precio: "$99.99" },
    { id: 10, nombre: "Hynix DDR4 32GB", gb: "32GB", img: "hynix_ddr4.jpg", precio: "$139.99" }
];

function cargarMemoriasRam() {
    const listaMemoriasRam = document.getElementById('memoria-ram-lista');
    listaMemoriasRam.innerHTML = memoriasRam.map(memoria => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../img/${memoria.img}" class="card-img-top" alt="${memoria.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${memoria.nombre}</h5>
                    <p class="card-text">Capacidad: ${memoria.gb}</p>
                    <p class="card-text text-danger">${memoria.precio}</p>
                    <a href="detalle_memoria_ram.html?id=${memoria.id}" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

window.onload = cargarMemoriasRam;
