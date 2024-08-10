const fuentesAlimentacion = [
    { id: 1, nombre: "Corsair RM750x", watts: "750W", certificacion: "80+ Gold", img: "corsair_rm750x.jpg", precio: "$129.99", descripcion: "Una fuente de alimentación eficiente y confiable con certificación 80+ Gold." },
    { id: 2, nombre: "Seasonic FOCUS GX-650", watts: "650W", certificacion: "80+ Gold", img: "seasonic_focus_gx_650.jpg", precio: "$109.99", descripcion: "Compacta y eficiente, ideal para configuraciones de gama media." },
    { id: 3, nombre: "EVGA SuperNOVA 550 G5", watts: "550W", certificacion: "80+ Gold", img: "evga_supernova_550_g5.jpg", precio: "$99.99", descripcion: "Fuente de alimentación compacta con alto rendimiento y 80+ Gold." },
    { id: 4, nombre: "Thermaltake Toughpower GF1 750W", watts: "750W", certificacion: "80+ Gold", img: "thermaltake_toughpower_gf1.jpg", precio: "$139.99", descripcion: "Alta potencia con certificación 80+ Gold y cables modulares." },
    { id: 5, nombre: "be quiet! Straight Power 11 650W", watts: "650W", certificacion: "80+ Platinum", img: "bequiet_straight_power_11.jpg", precio: "$149.99", descripcion: "Fuente silenciosa y eficiente con certificación 80+ Platinum." },
    { id: 6, nombre: "Cooler Master MWE Gold 750W", watts: "750W", certificacion: "80+ Gold", img: "cooler_master_mwe_gold_750w.jpg", precio: "$119.99", descripcion: "Diseño compacto con alto rendimiento y certificación 80+ Gold." },
    { id: 7, nombre: "Gigabyte P750GM", watts: "750W", certificacion: "80+ Gold", img: "gigabyte_p750gm.jpg", precio: "$109.99", descripcion: "Fuente de alimentación con alta eficiencia y diseño modular." },
    { id: 8, nombre: "Antec HCG750", watts: "750W", certificacion: "80+ Gold", img: "antec_hcg750.jpg", precio: "$129.99", descripcion: "Alta potencia y eficiencia con cables modulares y certificación 80+ Gold." },
    { id: 9, nombre: "SilverStone Strider Platinum 600W", watts: "600W", certificacion: "80+ Platinum", img: "silverstone_strider_platinum_600w.jpg", precio: "$139.99", descripcion: "Fuente de alimentación compacta con alta eficiencia y certificación 80+ Platinum." },
    { id: 10, nombre: "XFX TS 550W", watts: "550W", certificacion: "80+ Bronze", img: "xfx_ts_550w.jpg", precio: "$89.99", descripcion: "Fuente de alimentación económica con certificación 80+ Bronze." }
];

function cargarDetallesFuente() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const fuente = fuentesAlimentacion.find(f => f.id === id);

    if (fuente) {
        document.getElementById('imagen-fuente').src = `../img/${fuente.img}`;
        document.getElementById('nombre-fuente').innerText = fuente.nombre;
        document.getElementById('potencia-fuente').innerText = fuente.watts;
        document.getElementById('certificacion-fuente').innerText = fuente.certificacion;
        document.getElementById('precio-fuente').innerText = fuente.precio;
        document.getElementById('añadir-carrito').onclick = () => alert('Añadido al carrito');
        document.getElementById('comprar').onclick = () => alert('Compra realizada');
    } else {
        alert('Producto no encontrado');
    }
}

window.onload = cargarDetallesFuente;
