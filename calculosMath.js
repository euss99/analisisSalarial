const CalculosMath = {};

CalculosMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

CalculosMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

CalculosMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = CalculosMath.ordenarLista(listaDesordenada);
    const listaEsPar = CalculosMath.esPar(lista);
    
    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2)-1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = CalculosMath.calcularPromedio(listaMitades);
        return medianaListaPar;

    } else {
        
        const posicionElementoImpar = Math.floor(lista.length / 2); // Posición en el array del elemeto impar.
        const medianaListaImpar = lista[posicionElementoImpar];
        return medianaListaImpar;
    }
}

CalculosMath.calcularModa = function calcularModa(lista) {
    
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];a

        console.table(elemento);

        if (listaCount[elemento]) {
            listaCount[elemento] += 1; 
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);

    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);

    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length-1];

    const moda = listaOrdenadaMaxNumber[0];

    console.log(listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber);

    console.log("La moda es: " + moda);
}

CalculosMath.calcularPromedio = function calcularPromedio(array) {

    const sumaArray = (valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    }
    
    const sumaLista = array.reduce(sumaArray);
    
    const promedioArray = sumaLista / array.length;

    console.log(promedioArray);
}

CalculosMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }

    const listaOrdenada = listaDesordenada.sort(ordenarListaSort);
    return listaOrdenada;
}

CalculosMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const listaBiOrdenada = listaDesordenada.sort(ordenarListaSort);
    return listaBiOrdenada;
}