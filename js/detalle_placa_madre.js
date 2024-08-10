const placasMadre = [
    { id: 1, nombre: "ASUS ROG Crosshair VIII Hero", socket: "Socket AM4", img: "asus_rog_crosshair_viii_hero.jpg", precio: "$399.99", especificaciones: "Chipset: AMD X570, RAM Max: 128GB, PCIe 4.0" },
    { id: 2, nombre: "MSI MEG Z490 ACE", socket: "Socket 1200", img: "msi_meg_z490_ace.jpg", precio: "$349.99", especificaciones: "Chipset: Intel Z490, RAM Max: 128GB, PCIe 3.0" },
    { id: 3, nombre: "Gigabyte B550 AORUS Elite", socket: "Socket AM4", img: "gigabyte_b550_aorus_elite.jpg", precio: "$179.99", especificaciones: "Chipset: AMD B550, RAM Max: 64GB, PCIe 4.0" },
    { id: 4, nombre: "ASRock Z490 Taichi", socket: "Socket 1200", img: "asrock_z490_taichi.jpg", precio: "$299.99", especificaciones: "Chipset: Intel Z490, RAM Max: 128GB, PCIe 3.0" },
    { id: 5, nombre: "ASUS TUF Gaming X570-PLUS", socket: "Socket AM4", img: "asus_tuf_gaming_x570_plus.jpg", precio: "$219.99", especificaciones: "Chipset: AMD X570, RAM Max: 128GB, PCIe 4.0" },
    { id: 6, nombre: "MSI MAG B550 TOMAHAWK", socket: "Socket AM4", img: "msi_mag_b550_tomahawk.jpg", precio: "$189.99", especificaciones: "Chipset: AMD B550, RAM Max: 128GB, PCIe 4.0" },
    { id: 7, nombre: "Gigabyte Z490 AORUS Master", socket: "Socket 1200", img: "gigabyte_z490_aorus_master.jpg", precio: "$399.99", especificaciones: "Chipset: Intel Z490, RAM Max: 128GB, PCIe 3.0" },
    { id: 8, nombre: "ASRock B550 Phantom Gaming 4", socket: "Socket AM4", img: "asrock_b550_phantom_gaming_4.jpg", precio: "$129.99", especificaciones: "Chipset: AMD B550, RAM Max: 64GB, PCIe 4.0" },
    { id: 9, nombre: "ASUS Prime Z490-A", socket: "Socket 1200", img: "asus_prime_z490_a.jpg", precio: "$259.99", especificaciones: "Chipset: Intel Z490, RAM Max: 128GB, PCIe 3.0" },
    { id: 10, nombre: "MSI B450 TOMAHAWK MAX", socket: "Socket AM4", img: "msi_b450_tomahawk_max.jpg", precio: "$129.99", especificaciones: "Chipset: AMD B450, RAM Max: 64GB, PCIe 3.0" }
];

function getPlacaMadreById(id) {
    return placasMadre.find(placa => placa.id == id);
}

function loadPlacaMadreDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const placaId = urlParams.get('id');
    const placa = getPlacaMadreById(placaId);

    if (placa) {
        document.getElementById('placa-imagen').src = `../img/${placa.img}`;
        document.getElementById('placa-nombre').innerText = placa.nombre;
        document.getElementById('placa-socket').innerText = `Socket: ${placa.socket}`;
        document.getElementById('placa-precio').innerText = `Precio: ${placa.precio}`;
        document.getElementById('placa-especificaciones').innerText = `Especificaciones: ${placa.especificaciones}`;
        
        // Acción para añadir al carrito
        document.getElementById('btn-add-cart').addEventListener('click', () => {
            alert(`${placa.nombre} añadido al carrito.`);
            // Lógica para añadir al carrito...
        });
    } else {
        alert('Placa madre no encontrada.');
    }
}

window.onload = loadPlacaMadreDetails;
