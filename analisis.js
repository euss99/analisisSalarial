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
