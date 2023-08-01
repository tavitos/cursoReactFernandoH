// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes);
// console.log(personajes[0]); /** Si quiero el primero */
// console.log(personajes[1]); /** Si quiero el segundo */
// console.log(personajes[2]); /** Si quiero el tercero */

// const [vegeta] = personajes; /** Desestructuración de arreglos */
// console.log(vegeta); /** Despliega Goku ya que 'vegeta' es el nombre
                        /*  de la constante */

// const [ p1 ] = personajes; /** con fn + F2 se cambia nombre a todas
//                             /* las referencias en este caso goku por p1 */
// console.log(p1); /** Despliega gokú */

// const [ , p2 ] = personajes; /** Si solo necesito a Vegeta, el nombre no importa
//                              /*  lo que importa es la coma para extraer el segundo
//                              /*  elemento del arreglo */
// console.log(p2); /** Despliega Vegeta */

const [ , , p3 ] = personajes; /** Si solo quiero a Trunks, nuevamente puede ser
                                /* cualquier nombre lo importante en la posición
                                /* así que se vuelve a poner una coma */
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

// const arr = retornaArreglo();
// console.log(arr);

const [letras, numeros] = retornaArreglo(); /** <-- Con desestructuración de arreglos */
console.log( letras, numeros );

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo se llamará setNombre
const userState = ( valor ) => {
    return [ valor, ()=> {console.log('Hola Mundo')}];
}

const arr = userState('Goku');
// console.log(arr);
arr[1](); /** Sintaxis extraña pero aqui se llama al segundo elemento del arreglo y los paréntesis como llamado a la función */

// Solución a la tarea
const [nombre, setNombre] = userState('Goku');
console.log(nombre);
setNombre();