/* Análisis salarial */
//Creando una función para buscar a cualquier persona en la lista de salario.
function encontrarPersona(personaEnBuesqueda) {
    const persona = salarios.find((persona) => {
        return persona.name == personaEnBuesqueda;
    });

    return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos; // Entrando a la parte de trabajos del array.

    const salarios = trabajos.map((elemento) => {
        return elemento.salario;
    }); // Nos ayudará a recorrer todos los elementos de un array y crear otro array apartir de ese array. 

    const medianaSalario = CalculosMath.calcularMediana(salarios);

    return medianaSalario;
}

function proyeccionSalarios(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    // El ciclo for empieza desde 1 porque queremos saber desde su primer sueldo y no cuando no ganaba nada.
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;

        const crecimientoSalario = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimientoSalario / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = CalculosMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoDeSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoDeSalario;

    return Math.floor(nuevoSalario); // Redondeando el salario.
}

/* Análisis empresarial */
// Creando una función para poder obtener un objeto con las diferentes empresas y estas empresas serán un objeto donde tendran dentro los diferentes años en que los trabajadores ha ganado un sueldo, ejemplo:
/* {
    Industrias Mokepon: {
        2018: [salario, salario, ...]
        2019
    },
    Industrias Mokepon: {},
    Freelance: {},
    ...
} */
const empresas = {};
//Recorriendo el arreglo de salarios.
for (persona of salarios) {
    // Por cada persona en el arreglo de salarios, se esta recorriendo cada uno de los trabajos que tuvo la persona.
    for (trabajo of persona.trabajos) {
        // Se está haciendo un nuevo objeto de "empresas" que tenga una propiedad por cada distinta empresa.
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        // Por cada distinta empresa, se esta creando una propiedad con el año en la que esa empresa tuvo empleados recibiendo un salario.
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        // Por cada año, se esta agregando un array con los distintos salarios.
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

function medianaEmpresasYear(empresa, year) {
    if (!empresas[empresa]) {
        console.warn("La empresa no existe.");
    } else if (!empresas[empresa][year]) {
        console.warn("La empresa no dio salarios ese año.")
    } else {
        const yearSalario = empresas[empresa][year];
        console.log(yearSalario);
        return CalculosMath.calcularMediana(yearSalario);
    }
}