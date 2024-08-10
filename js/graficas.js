const graficas = [
    { id: 1, nombre: "NVIDIA RTX 3080", vram: "10GB GDDR6X", img: "nvidia_rtx_3080.jpg", precio: "$699.99" },
    { id: 2, nombre: "AMD Radeon RX 6800 XT", vram: "16GB GDDR6", img: "amd_rx_6800_xt.jpg", precio: "$649.99" },
    { id: 3, nombre: "NVIDIA RTX 3070", vram: "8GB GDDR6", img: "nvidia_rtx_3070.jpg", precio: "$499.99" },
    { id: 4, nombre: "AMD Radeon RX 5700 XT", vram: "8GB GDDR6", img: "amd_rx_5700_xt.jpg", precio: "$399.99" },
    { id: 5, nombre: "NVIDIA GTX 1660 Super", vram: "6GB GDDR6", img: "nvidia_gtx_1660_super.jpg", precio: "$229.99" },
    { id: 6, nombre: "AMD Radeon RX 5600 XT", vram: "6GB GDDR6", img: "amd_rx_5600_xt.jpg", precio: "$279.99" },
    { id: 7, nombre: "NVIDIA RTX 2060", vram: "6GB GDDR6", img: "nvidia_rtx_2060.jpg", precio: "$349.99" },
    { id: 8, nombre: "AMD Radeon RX 580", vram: "8GB GDDR5", img: "amd_rx_580.jpg", precio: "$229.99" },
    { id: 9, nombre: "NVIDIA GTX 1050 Ti", vram: "4GB GDDR5", img: "nvidia_gtx_1050_ti.jpg", precio: "$149.99" },
    { id: 10, nombre: "AMD Radeon R9 390", vram: "8GB GDDR5", img: "amd_r9_390.jpg", precio: "$329.99" }
];

function cargarGraficas() {
    const listaGraficas = document.getElementById('grafica-lista');
    listaGraficas.innerHTML = graficas.map(grafica => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../img/${grafica.img}" class="card-img-top" alt="${grafica.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${grafica.nombre}</h5>
                    <p class="card-text">VRAM: ${grafica.vram}</p>
                    <p class="card-text text-danger">${grafica.precio}</p>
                    <a href="detalle_grafica.html?id=${grafica.id}" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

window.onload = cargarGraficas;
