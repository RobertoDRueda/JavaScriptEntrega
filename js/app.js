// Variables
const imgCarrito = document.getElementById('img-carrito');
const carrito = document.getElementById('carrito');
const comprar = document.getElementById('comprar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('.grid-nuestros-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const formulario = document.querySelector("#busqueda");
const textoBuscado = document.querySelector("#buscador");

let cursos = [];
let cursosEnElCarrito = [];


const getCursos = async () => {
    try {
        const response = await fetch("./js/cursos.json");
        cursos = await response.json();
        generarCursos(cursos);
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `Error al obtener los cursos: ${error}`
        });
    }
};

const generarCursos = (cursos) => {
    const contenedor = document.querySelector(".grid-nuestros-cursos");

    ////////Ejemplo Curso
    // <div class="curso">
    //     <img src="img/cursos/angular.jpg" alt="Angular" loading="lazy">
    //     <div class="texto-curso">
    //         <h3 class="nombre-curso">Angular</h3>
    //         <p class="instructor-curso">Lucas Martínez Gómez</p>
    //         <p class="duracion-curso">185 horas</p>
    //         <p class="precio">$35,000.00</p>
    //         <a class="btn-curso" href="#" data-id="1">Agregar Al Carrito</a>
    //     </div>
    // </div>

    cursos.forEach(curso => {
        // <div class="curso">
        const divCurso = document.createElement("div");
        divCurso.classList.add("curso");

        // <img src="img/cursos/angular.jpg" alt="android" loading="lazy">
        const img = document.createElement("img");
        img.src = curso.imagen;
        img.alt = curso.alt;
        img.loading = "lazy";

        // <div class="texto-curso">
        const textoCurso = document.createElement("div");
        textoCurso.classList.add("texto-curso");

        // <h3 class="nombre-curso">Angular</h3>
        const titulo = document.createElement("h3");
        titulo.classList.add("nombre-curso");
        titulo.textContent = curso.titulo;

        // <p class="instructor-curso">Lucas Martínez Gómez</p>
        const instructor = document.createElement("p");
        instructor.classList.add("instructor-curso");
        instructor.textContent = curso.instructor;

        // <p class="duracion-curso">185 horas</p>
        const horas = document.createElement("p");
        horas.classList.add("duracion-curso");
        horas.textContent = curso.horas;

        // <p class="precio">$35,000.00</p>
        const precio = document.createElement("p");
        precio.classList.add("precio");
        precio.textContent = curso.precio;

        // <a class="btn-curso" href="#" data-id="1">Agregar Al Carrito</a>
        const btn = document.createElement("a");
        btn.classList.add("btn-curso");
        btn.href = "#";
        btn.setAttribute("data-id", curso.id);
        btn.textContent = "Agregar Al Carrito";

        // Agregar elementos <div class="texto-curso">
        textoCurso.append(titulo, instructor, horas, precio, btn);

        // Agregar imagen y <div class="texto-curso"> a <div class="curso">
        divCurso.append(img, textoCurso);

        // Agregar curso a <div class="grid-nuestros-cursos">
        contenedor.appendChild(divCurso);
    });
};

//Elimina los cursos del tbody
const LimpiarHTML = () => {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};

const OcultarBtnComprarCursos = () => {
    if (cursosEnElCarrito.length > 0) {
        comprar.style.display = 'inline-block';
    }
    else {
        comprar.style.display = 'none';
    }
};

const comprarCarrito = () => {
    spinner.classList.add('flex');
    spinner.classList.remove('hidden');

    vaciarCarritoBtn.style.pointerEvents = 'none';
    comprar.style.pointerEvents = 'none';

    setTimeout(() => {
        spinner.classList.add('hidden');
        spinner.classList.remove('flex');
        const mensajeExito = document.createElement('p');
        mensajeExito.classList.add('mt-10', 'text-center', 'bg-blue', 'font-bold', 'uppercase', 'text-white', 'p-2', 'text-sm')
        mensajeExito.textContent = '¡Tu compra se completó con éxito!';
        carrito.appendChild(mensajeExito);
        setTimeout(() => {
            mensajeExito.remove();
            cursosEnElCarrito = [];
            sincronizarLocalStorage();
            vaciarCarritoBtn.style.pointerEvents = '';
            comprar.style.pointerEvents = '';
            LimpiarHTML();
            OcultarBtnComprarCursos();
        }, 2000);
    }, 2000);
}

// Muestra el carrito en el Html
const mostrarCarritoEnHTML = () => {
    //Limpiar el HTML
    LimpiarHTML();

    OcultarBtnComprarCursos();

    // Recorre el carrito y genera el HTML
    cursosEnElCarrito.forEach(curso => {
        const { id, imagen, nombre, profesor, duracion, precio, cantidad } = curso;
        const row = document.createElement('tr');
        row.innerHTML =
            `
            <td>
                <img src = "${imagen}" width = "100">
            </td>
            <td>
                ${nombre}  
            </td>
            <td>
                ${precio}  
            </td>
            <td>
                ${profesor}  
            </td>
            <td>
                ${duracion}  
            </td>
            <td>
                ${cantidad}  
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al Local Storage
    sincronizarLocalStorage();
};

//Leer Datos curso
const leerDatosCruso = (curso) => {
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('.nombre-curso').textContent,
        profesor: curso.querySelector('.instructor-curso').textContent,
        duracion: curso.querySelector('.duracion-curso').textContent,
        precio: curso.querySelector('.precio').textContent,
        cantidad: 1
    }

    // Incrementar la cantidad de cursos
    const existeCursoEnCarrito = cursosEnElCarrito.some(curso => curso.id === infoCurso.id);
    if (existeCursoEnCarrito) {
        const cursos = cursosEnElCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            }
            else {
                return curso;
            }
        });
        cursosEnElCarrito = [...cursos];
    }
    else {
        cursosEnElCarrito = [...cursosEnElCarrito, infoCurso];
    }

    mostrarCarritoEnHTML();
}

const agregarCursoAlCarrito = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('btn-curso')) {
        const cursoSelectionado = e.target.parentElement.parentElement;
        leerDatosCruso(cursoSelectionado);
        MostrarToastify(`El curso: ${cursoSelectionado.querySelector('.nombre-curso').textContent} se ha agregado a tu carrito con éxito.`);
    }
}

const MostrarToastify = (msg) => {
    Toastify({
        text: msg,
        duration: 2000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover #00b09b, #96c93d
        style: {
            background: "linear-gradient(to right, #037bc0)",
        }
    }).showToast();
};


const eliminarCursoEnElCarrito = (e) => {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo cursosEnElCarrito el curso por data-id
        cursosEnElCarrito = cursosEnElCarrito.filter(curso => curso.id !== cursoId);
        mostrarCarritoEnHTML();
    }
};

const sincronizarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(cursosEnElCarrito));
}

const cargarEventListeners = () => {

    // Obtiene el arreglo de los cursos y genera las cards
    getCursos();

    // Mostrar Carrito
    imgCarrito.addEventListener('click', () => {
        carrito.classList.toggle('activo');
    });

    //Agregar Cursos al carrito
    listaCursos.addEventListener('click', (e) => {
        //Agregar curso al carrito
        agregarCursoAlCarrito(e);
    });

    //Eliminar Cursos en el Carrito
    carrito.addEventListener('click', (e) => {
        eliminarCursoEnElCarrito(e);
    });

    // Carga en el carrito los cursos del Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        cursosEnElCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        mostrarCarritoEnHTML();
    });

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        if (cursosEnElCarrito.length > 0) {
            Swal.fire({
                title: "¿Seguro que quieres vaciar el carrito?",
                text: "Los cursos que seleccionaste están a un paso de ayudarte a mejorar tus habilidades. ¿Aún deseas eliminar todo del carrito?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, vaciar carrito",
                cancelButtonText: "No, continuar comprando"
            }).then((result) => {
                if (result.isConfirmed) {
                    cursosEnElCarrito = [];
                    sincronizarLocalStorage();
                    OcultarBtnComprarCursos();
                    LimpiarHTML();
                }
            });
        }
    });

    //Buscar Curso
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const cursoBuscado = textoBuscado.value.toLowerCase().trim();
        if (!cursoBuscado) {
            listaCursos.innerHTML = "";
            generarCursos(cursos);
            return;
        }

        // Filtrar los cursos que contienen el texto buscado en el título
        const cursosFiltrados = cursos.filter(curso => curso.titulo.toLowerCase().includes(cursoBuscado));

        if (cursosFiltrados.length > 0) {
            // Generar solo los cursos que coinciden con la búsqueda
            listaCursos.innerHTML = "";
            generarCursos(cursosFiltrados);
            return;
        }
    });

    // Generar cursos por defecto si no hay cursos a buscar
    textoBuscado.addEventListener("input", () => {
        const texto = textoBuscado.value.trim();

        if (texto === "") {
            const contenedor = document.querySelector(".grid-nuestros-cursos");
            contenedor.innerHTML = "";
            generarCursos(cursos);
        }
    });

    comprar.addEventListener('click', (e) => {
        Swal.fire({
            title: "Confirmación de Compra",
            text: "¿Estás listo para disfrutar de tu nueva adquisición, y comenzar a aprender hoy mismo?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, comprar",
            cancelButtonText: "No, cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                comprarCarrito();
            }
        });
    })
};

cargarEventListeners();