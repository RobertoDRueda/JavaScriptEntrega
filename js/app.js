// Variables
const cursos = [
    {
        id: 1,
        titulo: "Angular",
        instructor: "Lucas Martínez Gómez",
        horas: "185 horas",
        precio: "$35,000.00",
        imagen: "img/cursos/angular.jpg",
        alt: "Angular"
    },
    {
        id: 2,
        titulo: "Android",
        instructor: "Sofía Hernández Ruiz",
        horas: "85 horas",
        precio: "$29,000.00",
        imagen: "img/cursos/android.jpg",
        alt: "Android"
    },
    {
        id: 3,
        titulo: "C#",
        instructor: "Mateo García López",
        horas: "285 horas",
        precio: "$35,000.00",
        imagen: "img/cursos/csharp.jpg",
        alt: "C#"
    },
    {
        id: 4,
        titulo: "C++",
        instructor: "Valentina Rodríguez Pérez",
        horas: "85 horas",
        precio: "$10,000.00",
        imagen: "img/cursos/c++.jpg",
        alt: "C++"
    },
    {
        id: 5,
        titulo: "DevOps",
        instructor: "Diego Fernández Torres",
        horas: "85 horas",
        precio: "$15,000.00",
        imagen: "img/cursos/devops.jpg",
        alt: "DevOps"
    },
    {
        id: 6,
        titulo: "Full-Stack",
        instructor: "Isabella Sánchez Castro",
        horas: "285 horas",
        precio: "$35,000.00",
        imagen: "img/cursos/full-stack.jpg",
        alt: "Full-Stack"
    },
    {
        id: 7,
        titulo: "Git",
        instructor: "Emilio Vargas Morales",
        horas: "12 horas",
        precio: "$5,000.00",
        imagen: "img/cursos/git.jpg",
        alt: "Git"
    },
    {
        id: 8,
        titulo: "HTML",
        instructor: "Camila Jiménez Ortiz",
        horas: "12 horas",
        precio: "$7,000.00",
        imagen: "img/cursos/html.jpg",
        alt: "HTML"
    },
    {
        id: 9,
        titulo: "Jenkins",
        instructor: "Javier Morales Romero",
        horas: "14 horas",
        precio: "$9,000.00",
        imagen: "img/cursos/jenkins.jpg",
        alt: "Jenkins"
    },
    {
        id: 10,
        titulo: "JSON",
        instructor: "Mariana Pérez Navarro",
        horas: "8 horas",
        precio: "$9,000.00",
        imagen: "img/cursos/json.jpg",
        alt: "JSON"
    },
    {
        id: 11,
        titulo: "Nginx",
        instructor: "Daniel Castillo Delgado",
        horas: "8 horas",
        precio: "$9,000.00",
        imagen: "img/cursos/nginx.jpg",
        alt: "Nginx"
    },
    {
        id: 12,
        titulo: "Node Js",
        instructor: "Gabriela Ramos Soto",
        horas: "68 horas",
        precio: "$39,000.00",
        imagen: "img/cursos/node-js.jpg",
        alt: "Node Js"
    },
    {
        id: 13,
        titulo: "PHP",
        instructor: "Antonio Torres Vargas",
        horas: "48 horas",
        precio: "$29,000.00",
        imagen: "img/cursos/php.jpg",
        alt: "PHP"
    },
    {
        id: 14,
        titulo: "Python",
        instructor: "Florencia Ríos Pacheco",
        horas: "58 horas",
        precio: "$32,000.00",
        imagen: "img/cursos/python.jpg",
        alt: "Python"
    },
    {
        id: 15,
        titulo: "React Js",
        instructor: "Sebastián Aguilar Méndez",
        horas: "58 horas",
        precio: "$35,000.00",
        imagen: "img/cursos/react-js.jpg",
        alt: "React Js"
    },
    {
        id: 16,
        titulo: "Vue Js",
        instructor: "Natalia Delgado Cruz",
        horas: "58 horas",
        precio: "$33,000.00",
        imagen: "img/cursos/vue-js.jpg",
        alt: "Vue Js"
    }
];

const imgCarrito = document.getElementById('img-carrito');
const carrito = document.getElementById('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('.grid-nuestros-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const formulario = document.querySelector("#busqueda");
const textoBuscado = document.querySelector("#buscador");

let cursosEnElCarrito = [];



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

// Muestra el carrito en el Html
const mostrarCarritoEnHTML = () => {
    //Limpiar el HTML
    LimpiarHTML();


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
    })
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
    }

}

const eliminarCursoEnElCarrito = (e) => {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo cursosEnElCarrito el curso por data-id
        cursosEnElCarrito = cursosEnElCarrito.filter(curso => curso.id !== cursoId);
        mostrarCarritoEnHTML();
    }
};

const cargarEventListeners = () => {

    // Mostrar Carrito
    imgCarrito.addEventListener('click', () => {
        carrito.classList.toggle('activo');
    });

    generarCursos(cursos);

    //Agregar Cursos al carrito
    listaCursos.addEventListener('click', (e) => {
        //Agregar curso al carrito
        agregarCursoAlCarrito(e);
    });

    //Eliminar Cursos en el Carrito
    carrito.addEventListener('click', (e) => {
        eliminarCursoEnElCarrito(e);
    });

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        cursosEnElCarrito = [];
        LimpiarHTML();
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
};

cargarEventListeners();