


const nombre = 'Tavitos';
const apellido = 'Lezama';

// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `
// ${nombre} 
// ${apellido}
// ${ 1 +1 }
// `; /** <-- Template string */

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    // return 'Hola Mundo';
    return 'Hola ' + nombre
}

// console.log( `Este es un texto: ${getSaludo()}` );
console.log( `Este es un texto: ${getSaludo(nombre)}` );