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
