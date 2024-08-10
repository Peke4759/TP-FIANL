// Datos de productos de ejemplo
const productos = {
    procesadores: [
        { nombre: "Intel i9", nucleos: 10 },
        { nombre: "AMD Ryzen 7", nucleos: 8 },
        // Agregar 8 más
    ],
    discos: [
        { nombre: "SSD Samsung", gb: 512 },
        { nombre: "HDD Seagate", gb: 1024 },
        // Agregar 8 más
    ],
    graficas: [
        { nombre: "NVIDIA RTX 3080", vram: 10 },
        { nombre: "AMD Radeon RX 6800", vram: 16 },
        // Agregar 8 más
    ],
    placasMadre: [
        { nombre: "ASUS ROG", marca: "ASUS", socket: "AM4" },
        { nombre: "MSI B450", marca: "MSI", socket: "AM4" },
        // Agregar 8 más
    ],
    memoriasRam: [
        { nombre: "Corsair Vengeance", gb: 16 },
        { nombre: "G.Skill Ripjaws", gb: 32 },
        // Agregar 8 más
    ],
    fuentes: [
        { nombre: "Corsair RM850", watts: 850, certificado: "Gold" },
        { nombre: "EVGA 750 GQ", watts: 750, certificado: "Gold" },
        // Agregar 8 más
    ]
};

// Función para renderizar productos
function renderProductos(categoria, listaId, criterio) {
    const lista = document.getElementById(listaId);
    let productosOrdenados = productos[categoria];

    if (criterio !== 'default') {
        productosOrdenados = productos[categoria].sort((a, b) => a[criterio] - b[criterio]);
    }

    lista.innerHTML = '';
    productosOrdenados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto[criterio]}`;
        lista.appendChild(li);
    });
}

// Listeners para ordenar productos
document.getElementById('sortProcesadores').addEventListener('change', (e) => {
    renderProductos('procesadores', 'procesadoresList', e.target.value);
});

document.getElementById('sortDiscos').addEventListener('change', (e) => {
    renderProductos('discos', 'discosList', e.target.value);
});

document.getElementById('sortGraficas').addEventListener('change', (e) => {
    renderProductos('graficas', 'graficasList', e.target.value);
});

document.getElementById('sortPlacasMadre').addEventListener('change', (e) => {
    renderProductos('placasMadre', 'placasMadreList', e.target.value);
});

document.getElementById('sortMemoriasRam').addEventListener('change', (e) => {
    renderProductos('memoriasRam', 'memoriasRamList', e.target.value);
});

document.getElementById('sortFuentes').addEventListener('change', (e) => {
    renderProductos('fuentes', 'fuentesList', e.target.value);
});

// Inicializar listas
renderProductos('procesadores', 'procesadoresList', 'default');
renderProductos('discos', 'discosList', 'default');
renderProductos('graficas', 'graficasList', 'default');
renderProductos('placasMadre', 'placasMadreList', 'default');
renderProductos('memoriasRam', 'memoriasRamList', 'default');
renderProductos('fuentes', 'fuentesList', 'default');
