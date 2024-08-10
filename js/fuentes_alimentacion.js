const fuentesAlimentacion = [
    { id: 1, nombre: "Corsair RM750x", watts: "750W", certificacion: "80+ Gold", img: "corsair_rm750x.jpg", precio: "$129.99" },
    { id: 2, nombre: "Seasonic FOCUS GX-650", watts: "650W", certificacion: "80+ Gold", img: "seasonic_focus_gx_650.jpg", precio: "$109.99" },
    { id: 3, nombre: "EVGA SuperNOVA 550 G5", watts: "550W", certificacion: "80+ Gold", img: "evga_supernova_550_g5.jpg", precio: "$99.99" },
    { id: 4, nombre: "Thermaltake Toughpower GF1 750W", watts: "750W", certificacion: "80+ Gold", img: "thermaltake_toughpower_gf1.jpg", precio: "$139.99" },
    { id: 5, nombre: "be quiet! Straight Power 11 650W", watts: "650W", certificacion: "80+ Platinum", img: "bequiet_straight_power_11.jpg", precio: "$149.99" },
    { id: 6, nombre: "Cooler Master MWE Gold 750W", watts: "750W", certificacion: "80+ Gold", img: "cooler_master_mwe_gold_750w.jpg", precio: "$119.99" },
    { id: 7, nombre: "Gigabyte P750GM", watts: "750W", certificacion: "80+ Gold", img: "gigabyte_p750gm.jpg", precio: "$109.99" },
    { id: 8, nombre: "Antec HCG750", watts: "750W", certificacion: "80+ Gold", img: "antec_hcg750.jpg", precio: "$129.99" },
    { id: 9, nombre: "SilverStone Strider Platinum 600W", watts: "600W", certificacion: "80+ Platinum", img: "silverstone_strider_platinum_600w.jpg", precio: "$139.99" },
    { id: 10, nombre: "XFX TS 550W", watts: "550W", certificacion: "80+ Bronze", img: "xfx_ts_550w.jpg", precio: "$89.99" }
];

function cargarFuentesAlimentacion() {
    const listaFuentesAlimentacion = document.getElementById('fuentes-alimentacion-lista');
    listaFuentesAlimentacion.innerHTML = fuentesAlimentacion.map(fuente => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../img/${fuente.img}" class="card-img-top" alt="${fuente.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${fuente.nombre}</h5>
                    <p class="card-text">Potencia: ${fuente.watts}</p>
                    <p class="card-text">Certificación: ${fuente.certificacion}</p>
                    <p class="card-text text-danger">${fuente.precio}</p>
                    <a href="detalle_fuente_alimentacion.html?id=${fuente.id}" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        </div>
    `).join('');
}

window.onload = cargarFuentesAlimentacion;
