// DESAFIO EVENTOS//
const carrito = [];

const productos = [
    {id:1000, nombre: "Puas", precio: 100},
    {id:1001, nombre: "Cable", precio: 2300},
    {id:1002, nombre: "Correa", precio: 1650},
];

let cards = "";
productos.forEach((producto) =>{
    cards += `<div class='card d-flex col-4'>
    <h3>${producto.nombre}</h3>
    <button onclick='agregarAlCarrito("${producto.nombre}")'>COMPRAR</button>
    </div>`
})

function agregarAlCarrito(tituloProducto){
    alert("Agregaste: "+tituloProducto)
}
document.write (cards);










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



