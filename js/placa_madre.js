const placasMadre = [
    { id: 1, nombre: "ASUS ROG Crosshair VIII Hero", socket: "Socket AM4", img: "asus_rog_crosshair_viii_hero.jpg", precio: "$399.99" },
    { id: 2, nombre: "MSI MEG Z490 ACE", socket: "Socket 1200", img: "msi_meg_z490_ace.jpg", precio: "$349.99" },
    { id: 3, nombre: "Gigabyte B550 AORUS Elite", socket: "Socket AM4", img: "gigabyte_b550_aorus_elite.jpg", precio: "$179.99" },
    { id: 4, nombre: "ASRock Z490 Taichi", socket: "Socket 1200", img: "asrock_z490_taichi.jpg", precio: "$299.99" },
    { id: 5, nombre: "ASUS TUF Gaming X570-PLUS", socket: "Socket AM4", img: "asus_tuf_gaming_x570_plus.jpg", precio: "$219.99" },
    { id: 6, nombre: "MSI MAG B550 TOMAHAWK", socket: "Socket AM4", img: "msi_mag_b550_tomahawk.jpg", precio: "$189.99" },
    { id: 7, nombre: "Gigabyte Z490 AORUS Master", socket: "Socket 1200", img: "gigabyte_z490_aorus_master.jpg", precio: "$399.99" },
    { id: 8, nombre: "ASRock B550 Phantom Gaming 4", socket: "Socket AM4", img: "asrock_b550_phantom_gaming_4.jpg", precio: "$129.99" },
    { id: 9, nombre: "ASUS Prime Z490-A", socket: "Socket 1200", img: "asus_prime_z490_a.jpg", precio: "$259.99" },
    { id: 10, nombre: "MSI B450 TOMAHAWK MAX", socket: "Socket AM4", img: "msi_b450_tomahawk_max.jpg", precio: "$129.99" }
];

function cargarPlacasMadre() {
    const listaPlacasMadre = document.getElementById('placa-madre-lista');
    listaPlacasMadre.innerHTML = placasMadre.map(placa => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../img/${placa.img}" class="card-img-top" alt="${placa.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${placa.nombre}</h5>
                    <p class="card-text">Socket: ${placa.socket}</p>
                    <p class="card-text text-danger">${placa.precio}</p>
                    <a href="detalle_placa_madre.html?id=${placa.id}" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

window.onload = cargarPlacasMadre;
