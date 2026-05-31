const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("btnCantidad");
const resultado = document.getElementById("resultado");

const listado = [
    "Tostadas",
    "Licuado",
    "Cafe con leche",
    "Medialunas",
    "Jugo de naranja con sandwich de miga",
    "Submarino con chocolate"
];

let html = "<ul>";

listado.forEach(merienda => {
    html += `<li>${merienda}</li>`;
});

html += "</ul>";

contenedor.innerHTML = html;

boton.addEventListener("click", () => {
    resultado.textContent =
        `Cantidad de meriendas: ${listado.length}`;
});

