// SEGUNDA ENTREGA PROYECTO FINAL//
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;

function generarCardsCarrito() { 
    carrito.forEach((producto)=>{
        document.getElementById("cards-modal").innerHTML += `<div>
        <p>${producto.id} 
        - ${producto.nombre}
        - ${producto.precio}
      </div>`
    })
}


const productos = [
    {id:1000, nombre: "Puas", precio: 100},
    {id:1001, nombre: "Cable", precio: 2300},
    {id:1002, nombre: "Correa", precio: 1650},
    {id:1003, nombre: "Afinador", precio: 3587},
];

let cards = "";
productos.forEach((producto) =>{
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${producto.nombre}</h5>
                <!-- Product price-->
               $ ${producto.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a id= "${idButton}" data-id="${producto.id}" class="btn btn-outline-dark mt-auto" href="#">COMPRAR</a></div>
        </div>
    </div>
</div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click',(event) => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((producto)=>{
            document.getElementById("cart-elements").innerHTML += `<tr>
            <th scope="row">${producto.id} </th>
            <td>${producto.nombre} </td>
            <td>${producto.precio} </td>
          </tr>`
        })
    })
});













//DESAFIO DOM//

//const titulo = (document.querySelector ("#titulo") .textContent = "PRUEBA DOM");

//console.log (titulo)






//PRIMERA ENTREGA PROYECTO FINAL//
// Tienda Ecommerce de Música//

//const carrito = [];
//function AgregarAlCarrito(producto){
//    carrito.push(producto);
//    console.log(carrito);}

//Se agregan productos al carrito de compras//
//AgregarAlCarrito({id:1000, nombre: "Puas", precio: 100})
//AgregarAlCarrito({id:1001, nombre: "Cable", precio: 2300})
//AgregarAlCarrito({id:1002, nombre: "Correa", precio: 1650})
//AgregarAlCarrito({id:1003, nombre: "Afinador", precio: 4000})
//AgregarAlCarrito({id:1004, nombre: "Palillos", precio: 2500})

//Buscar y eliminar un producto del carrito//
//function EliminarProducto(NombreDelProducto){
//    const index = carrito.findIndex ((producto) => producto.nombre === NombreDelProducto);
//
  // if(index !== -1){
    // carrito.slice(index, 1);
//    }
//    console.log(carrito)}

//Producto a eliminar//
//EliminarProducto("Puas");



