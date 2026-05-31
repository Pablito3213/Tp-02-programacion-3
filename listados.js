 const productos = [
    { nombre: "Pizza", categoria: "Comida" },
    { nombre: "Hamburguesa", categoria: "Comida" },
    { nombre: "Empanadas", categoria: "Comida" },
    { nombre: "Lomito", categoria: "Comida" },
    { nombre: "Pollo Asado", categoria: "Comida" },
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Banana", categoria: "Fruta" },
    { nombre: "Naranja", categoria: "Fruta" },
    { nombre: "Mandarina", categoria: "Fruta" },
    { nombre: "Pomelo", categoria: "Fruta" }
];

const contenedor = document.getElementById("contenedor");
const btnTodos = document.getElementById("btnTodos");
const btnComidas = document.getElementById("btnComidas");

function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <h3>${producto.nombre}</h3>
                <p>${producto.categoria}</p>
            </div>
        `;
    });
}

mostrarProductos(productos);

btnTodos.addEventListener("click", () => {
    mostrarProductos(productos);
});

btnComidas.addEventListener("click", () => {

    const comidas = productos.filter(
        producto => producto.categoria === "Comida"
    );

    mostrarProductos(comidas);
});