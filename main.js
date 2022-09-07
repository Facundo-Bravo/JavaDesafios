const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;

// AGREGAR AL CARRITO //
    
async function handleClickComprar(id) {
  console.log(id)
  await fetch("productos.json")
  .then(response => response.json())
  .then(data => {
    const producto = data.find(producto => producto.id == id)
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
    
    swal({
      icon: 'success',
      title: 'Felicidades, agregaste un producto al carrito',
      showConfirmButton: false,
      timer: 3000
    })
  })
}

// - - LLAMAR AL ARRAY DE PRODUCTOS DENTRO DEL .JSON Y ARMAR LAS CARDS - - // 

const buscarProductos = async () => {
  const response = await fetch('./productos.json', { mode: 'cors', headers: {
    'Access-Control-Allow-Origin':'*'
  }})
  const productos = await response.json()
      let acumulador = '';
      productos.forEach((producto) => {
        console.log(producto)
        const idButton = `add-cart${producto.id}`
        acumulador += `<div class="col mb-5">
                  <div class="card h-100">
                      <!-- Product image-->
                      <img class="card-img-top" src=${producto.imagen} alt="..." />
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
                          <div class="text-center"><a id= "${idButton}" data-id="${producto.id}" id = "btn-comprar" 
                          class="btn btn-outline-dark mt-auto" onclick="handleClickComprar(${producto.id})" href="#">COMPRAR</a></div>
                      </div>
                  </div>
              </div>`;
      })
      document.getElementById('seccion-card').innerHTML = acumulador;
}

buscarProductos()

function eliminarProducto(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
  const index = carrito.findIndex((producto) => producto.id === id)
  carrito.splice(index, 1)
  localStorage.setItem("carrito", JSON.stringify(carrito));

  window.location.reload();
}

function generarCardsCarrito() {
  console.log("pepe")
  carrito.forEach((producto) => {
    document.getElementById("cards-modal").innerHTML += `<div>
        <p>${producto.id} 
        - ${producto.nombre}
        - $${producto.precio}
        <button class="botonEliminar btn btn-danger btn-small fa fa-trash" id="botonEliminar" onclick="eliminarProducto(${producto.id})"></button>
      </div>`
  })
}

// LIMPIA EL MODAL AL CERRARLO //

function limpiarModal(){
  document.getElementById("cards-modal").innerHTML = ""
}

