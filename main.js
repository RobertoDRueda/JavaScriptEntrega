const mostrarAlert = (msg) => alert(msg);

const addlogs = (msg) => console.log(msg);


const Cursos = [
    {
        id: 1,
        nombre: 'HTML y CSS',
        profesor: 'Juan Pedro',
        costo: 15.50
    },
    {
        id: 2,
        nombre: 'JavaScript',
        profesor: 'Juan Luis',
        costo: 20.45
    },
    {
        id: 3,
        nombre: 'React Js',
        profesor: 'Juan Ignacio',
        costo: 25.25
    },
    {
        id: 4,
        nombre: '.Net 8',
        profesor: 'Juan Lucas',
        costo: 35.25
    }
];



const calcularTotal = (total, formaDePago) => {
    switch (formaDePago) {
        case 1:
            return Math.round(total * 0.8 * 100) / 100;
        case 2:
            return Math.round(total * 0.9 * 100) / 100;
        case 3:
            return Math.round(total * 1.15 * 100) / 100;
        default:
            return 0;
    }
};


const mostrarCursos = (mensaje) => {
    const infoCursos = Cursos.map(curso => `ID: ${curso.id}, Nombre: ${curso.nombre}`).join('\n');
    mostrarAlert(mensaje + "\n" + infoCursos);
};

const mostrarIds = () => {
    return Cursos.map(curso => `(${curso.id})`).join(', ');
};

mostrarCursos("Los cursos disponibles son:");

const buscarCursoPorId = id => Cursos.find(curso => curso.id === id);

const compraCurso = () => {
    addlogs("creando variables");
    let agregarCurso = 0;
    let cursoElegido;
    let costo = 0;
    let seguirComprando = false;
    let formaPago = 0;
    let total = 0;
    let IDs = mostrarIds();

    addlogs("bucle do-while");
    do {
        do {
            agregarCurso = Number(prompt("Ingresar el curso que desea comprar: " + IDs));
            switch (agregarCurso) {
                case 1:
                    cursoElegido = buscarCursoPorId(1);
                    addlogs("Curso: " + cursoElegido.nombre + ", profesor: " + cursoElegido.profesor + ", costo: " + cursoElegido.costo);
                    break;
                case 2:
                    cursoElegido = buscarCursoPorId(2);
                    addlogs("Curso: " + cursoElegido.nombre + ", profesor: " + cursoElegido.profesor + ", costo: " + cursoElegido.costo);
                    break;
                case 3:
                    cursoElegido = buscarCursoPorId(3);
                    addlogs("Curso: " + cursoElegido.nombre + ", profesor: " + cursoElegido.profesor + ", costo: " + cursoElegido.costo);
                    break;
                case 4:
                    cursoElegido = buscarCursoPorId(4);
                    addlogs("Curso: " + cursoElegido.nombre + ", profesor: " + cursoElegido.profesor + ", costo: " + cursoElegido.costo);
                    break;
                default:
                    mostrarCursos("Opcion Incorrecta. Ingresar cualquiera de estos cursos:");
            }
        } while (agregarCurso !== 1 && agregarCurso !== 2 && agregarCurso !== 3)

        addlogs("calculando el costo");
        costo += cursoElegido.costo;
        addlogs("Costo de la compra: " + costo);

        seguirComprando = confirm("Desea seguir comprando? ");
    } while (seguirComprando);

    addlogs("Forma de Pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo");
    do {
        formaPago = Number(prompt("Ingrese la forma de pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo"));
        if (formaPago !== 1 && formaPago !== 2 && formaPago !== 3) {
            mostrarAlert("Opcion Incorrecta. Ingresar (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo");
        }
    } while (formaPago !== 1 && formaPago !== 2 && formaPago !== 3)
    addlogs("Forma de Pago " + formaPago);
    addlogs("------------");
    addlogs("calculando el total a pagar");
    total = calcularTotal(costo, formaPago);
    mostrarAlert("El total a pagar es: " + total);
    addlogs("El total a pagar es: " + total);
}

addlogs("Metodo principal");
compraCurso();
addlogs("Fin de ejecucion");