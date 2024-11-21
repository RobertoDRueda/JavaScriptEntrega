// Variables
const imgCarrito = document.getElementById('img-carrito');
const carrito = document.getElementById('carrito');

const cargarEventListeners = () => {

    // Mostrar Carrito
    imgCarrito.addEventListener('click', () => {
        carrito.classList.toggle('activo'); 
    });
};

cargarEventListeners();