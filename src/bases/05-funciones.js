// Funciones en JS

// function saludar(nombre) { /** No se recomienda declarar de esta manera la función */
//     return `Hola ${nombre}`;
// }

const saludar = function(nombre){
    return `Hola ${nombre}`;
}

// Función de flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

// Código anterior simplificado cuando la función solo tiene un return
const saludar3 = (nombre) => `Hola ${nombre}`;
// función de flecha que no recibe argumentos
const saludar4 = () => `Hola Mundo`;



// saludar = 20; /** <-- Marca error */

// console.log(saludar('Goku'));
// console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// const getUser = () => { /** De esta manera no podríamos quitar el return */
//     return {
//         uid: 'ABC123',
//         username: 'El_Papi1502'
//     }
// }

const getUser = () => ({   /** Los paréntesis le indican a la función que los datos a retornar son los que está encerrando 
                                /* En pocas palabras el return de esta función es un objeto. */
        uid: 'ABC123',
        username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// console.log( getUser() );

// Tarea
// 1. Transformar a una función de flecha
// 2. Retornar un objeto implícito
// 3. Probar
// function getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABC456',
//         username: nombre
//     }
// };

// Solución a la tarea
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC456',
    username: nombre
})

const usuarioActivo =  getUsuarioActivo('Fernando');
console.log(usuarioActivo);