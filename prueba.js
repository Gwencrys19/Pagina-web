function agregarAlCarrito(nombreArticulo, precioArticulo) {
    // Recupera el carrito actual desde localStorage o crea uno si no existe
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agrega el nuevo artículo al carrito
    carrito.push({ nombre: nombreArticulo, precio: precioArticulo });

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Redirige al usuario al carrito de compras
    window.location.href = "carrito.html";
}