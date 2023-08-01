// Arreglos en JS
// const arreglo = new Array( 100 ); /** Crea un arreglo vacío con 100 posiciones, casi no se recomienda
                                     /*   la excepción es lo que esta escrito.  */
// const arreglo = []; /** <-- Sintaxis mundialmente aceptada */
// arreglo.push(1); /** El push modifica el objeto principal,
                        /* se recomienda usar mejjor el operador spread */
const arreglo = [1,2,3,4]; /** <-- Inicialización del arreglo */

// let arreglo2 = arreglo;
// arreglo2.push(5); /** preferible no utilizar */

let arreglo2 = [ ...arreglo, 5];

// El método map crea un nuevo arreglo
const arreglo3 = arreglo2.map( function( numero ){ /** callback */
    // return 'Hola';
    return numero * 2 ;
});

console.log(arreglo); /** Despliega [1,2,3,4,5] en ambos casos sin el operador spread */
console.log(arreglo2);
console.log(arreglo3);

