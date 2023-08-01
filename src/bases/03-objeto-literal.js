

const persona = { /** Creación del objeto literal */
    nombre: 'Tony', /** Pares nombre-valor la llave es nombre
                        y el valor es Tony  */
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        latitud: 14.3232,
        longitud: 34.92123
    }
};

// console.log(persona.nombre); /** <-- sintaxis recuperación de nombre */
// console.log({persona}); /** <-- El objeto tiene la propiedad persona */

// console.log(persona); /** imprime Tony */

// const persona2 = persona; /** Copia por referencia, se recomienda no hacerlo en su
                            /*    lugar utilizar el operador spread (...) */

const persona2 = {...persona}; /** Uso del operador spread, se hace la copia de persona
                                    y se le asigna a persona2 */
persona2.nombre = 'Peter';

console.log(persona); 
console.log(persona2);






