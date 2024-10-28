const mostrarAlert = (msg) => alert(msg);

const addlogs = (msg) => console.log(msg);

const Curso1 = {
    nombre: 'HTML y CSS',
    profesor: 'Juan Pedro',
    costo: 15.50
}

const Curso2 = {
    nombre: 'JavaScript',
    profesor: 'Juan Luis',
    costo: 20.45
}

const Curso3 = {
    nombre: 'React Js',
    profesor: 'Juan Ignacio',
    costo: 25.25
}


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

mostrarAlert("Los cursos disponibles son: " + Curso1.nombre + "(1), " + Curso2.nombre + "(2) y " + Curso3.nombre + "(3)");


const compraCurso = () => {
    addlogs("creando variables");
    let agregarCurso = 0;
    let cursoElegido;
    let costo = 0;
    let seguirComprando = false;
    let formaPago = 0;
    let total = 0;

    addlogs("bucle do-while");
    do {
        do {
            agregarCurso = Number(prompt("Ingresar el curso que desea comprar: (1), (2) o (3)"));
            switch (agregarCurso) {
                case 1:
                    cursoElegido = Curso1;
                    addlogs("Curso: " + Curso1.nombre + ", profesor: " + Curso1.profesor + ", costo: " + Curso1.costo);
                    break;
                case 2:
                    cursoElegido = Curso2;
                    addlogs("Curso: " + Curso2.nombre + ", profesor: " + Curso2.profesor + ", costo: " + Curso2.costo);
                    break;
                case 3:
                    cursoElegido = Curso3;
                    addlogs("Curso: " + Curso3.nombre + ", profesor: " + Curso3.profesor + ", costo: " + Curso3.costo);
                    break;
                default:
                    mostrarAlert("Opcion Incorrecta. Ingresar (1) " + Curso1.nombre + ", (2) " + Curso2.nombre + ", o (3) " + Curso3.nombre);
            }
        } while (agregarCurso !== 1 && agregarCurso !== 2 && agregarCurso !== 3)

        addlogs("calculando el costo");
        costo += cursoElegido.costo;
        addlogs("Costo de la compra: " + costo);

        seguirComprando = confirm("Desea seguir comprando? ");
    } while (seguirComprando);

    addlogs("Forma de Pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo");
    do {
        formaPago =  Number(prompt("Ingrese la forma de pago (1) Efectivo-20% desc, (2) Debito-10% desc o (3) Credito-15% Recargo"));
        if (formaPago !== 1 && formaPago !== 2 && formaPago !== 3){
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