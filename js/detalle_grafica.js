const graficas = [
    { id: 1, nombre: "NVIDIA RTX 3080", vram: "10GB GDDR6X", img: "nvidia_rtx_3080.jpg", precio: "$699.99", especificaciones: "Cuda Cores: 8704, Boost Clock: 1.71 GHz, Interface: PCIe 4.0" },
    { id: 2, nombre: "AMD Radeon RX 6800 XT", vram: "16GB GDDR6", img: "amd_rx_6800_xt.jpg", precio: "$649.99", especificaciones: "Compute Units: 72, Boost Clock: 2.25 GHz, Interface: PCIe 4.0" },
    { id: 3, nombre: "NVIDIA RTX 3070", vram: "8GB GDDR6", img: "nvidia_rtx_3070.jpg", precio: "$499.99", especificaciones: "Cuda Cores: 5888, Boost Clock: 1.73 GHz, Interface: PCIe 4.0" },
    { id: 4, nombre: "AMD Radeon RX 5700 XT", vram: "8GB GDDR6", img: "amd_rx_5700_xt.jpg", precio: "$399.99", especificaciones: "Compute Units: 40, Boost Clock: 1.90 GHz, Interface: PCIe 4.0" },
    { id: 5, nombre: "NVIDIA GTX 1660 Super", vram: "6GB GDDR6", img: "nvidia_gtx_1660_super.jpg", precio: "$229.99", especificaciones: "Cuda Cores: 1408, Boost Clock: 1.78 GHz, Interface: PCIe 3.0" },
    { id: 6, nombre: "AMD Radeon RX 5600 XT", vram: "6GB GDDR6", img: "amd_rx_5600_xt.jpg", precio: "$279.99", especificaciones: "Compute Units: 36, Boost Clock: 1.75 GHz, Interface: PCIe 4.0" },
    { id: 7, nombre: "NVIDIA RTX 2060", vram: "6GB GDDR6", img: "nvidia_rtx_2060.jpg", precio: "$349.99", especificaciones: "Cuda Cores: 1920, Boost Clock: 1.68 GHz, Interface: PCIe 3.0" },
    { id: 8, nombre: "AMD Radeon RX 580", vram: "8GB GDDR5", img: "amd_rx_580.jpg", precio: "$229.99", especificaciones: "Compute Units: 36, Boost Clock: 1.34 GHz, Interface: PCIe 3.0" },
    { id: 9, nombre: "NVIDIA GTX 1050 Ti", vram: "4GB GDDR5", img: "nvidia_gtx_1050_ti.jpg", precio: "$149.99", especificaciones: "Cuda Cores: 768, Boost Clock: 1.39 GHz, Interface: PCIe 3.0" },
    { id: 10, nombre: "AMD Radeon R9 390", vram: "8GB GDDR5", img: "amd_r9_390.jpg", precio: "$329.99", especificaciones: "Compute Units: 40, Boost Clock: 1.00 GHz, Interface: PCIe 3.0" }
];

function getGraficaById(id) {
    return graficas.find(grafica => grafica.id == id);
}

function loadGraficaDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const graficaId = urlParams.get('id');
    const grafica = getGraficaById(graficaId);

    if (grafica) {
        document.getElementById('grafica-imagen').src = `../img/${grafica.img}`;
        document.getElementById('grafica-nombre').innerText = grafica.nombre;
        document.getElementById('grafica-vram').innerText = `VRAM: ${grafica.vram}`;
        document.getElementById('grafica-precio').innerText = `Precio: ${grafica.precio}`;
        document.getElementById('grafica-especificaciones').innerText = `Especificaciones: ${grafica.especificaciones}`;
        
        // Acción para añadir al carrito
        document.getElementById('btn-add-cart').addEventListener('click', () => {
            alert(`${grafica.nombre} añadido al carrito.`);
            // Lógica para añadir al carrito...
        });
    } else {
        alert('Tarjeta gráfica no encontrada.');
    }
}

window.onload = loadGraficaDetails;
