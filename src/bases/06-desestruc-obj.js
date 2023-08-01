// Desestructuración
// En ocasiones se conoce como Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado' /** Si existe rango en el objeto, eso es lo que se despliega */
};

// console.log(persona.nombre); /** Muy tedioso en la referencia hacer uso de persona */
// console.log(persona.edad);
// console.log(persona.clave);

// const { nombre, edad, clave } = persona; /** <-- Desestructuración extraé del objeto persona sus propiedades
                        /* especificadas dentro de las llaves, no importa el orden */
// console.log(nombre);
// console.log(edad);
// console.log(clave);
                        
// const { nombre:nombre2 } = persona; /** renombra la constante a nombre2 en caso que ya exista nombre */
// console.log(nombre2);

// Desestructuración en funciones
// const retornaPersona = ( usuario ) => {  /** Función normal */
//     console.log(usuario);
// }
// const retornaPersona = ( { nombre, clave, edad, rango = 'Capitán' } ) => {  /** <-- Con desestructuración  
const usaContext = ( { nombre, clave, edad, rango = 'Capitán' } ) => {  /** <-- Renombra función  
                                                                        /* también se pueden usar valores 
                                                                        /* por defecto en el ejemplo es el rango. 
                                                                        /* Si rango no existe en el objeto se crea 
                                                                        /* y se despliega. */
    // console.log(nombre, clave, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: { /** Objeto dentro de un objeto */
            lat: 12.12345,
            lng: -14.234567
        }
    }
}

// retornaPersona( persona );
// const avenger = retornaPersona( persona );
// const avenger = usaContext( persona );
// console.log(avenger);
// const {nombreClave, anios, latlng} = usaContext( persona ); /** Desestructurando el retorno de la función usaContext y latlng como objeto*/
// console.log(nombreClave, anios);
// console.log(latlng);

// Si se desea extraer del objeto latlng la latitud y la longitud
// const {nombreClave, anios, latlng:{lat, lng}} = usaContext( persona ); /** menos común */
const {nombreClave, anios, latlng} = usaContext( persona ); /** <-- más común */
const { lat, lng } = latlng; /** <-- más común */
console.log(nombreClave, anios);
console.log(lat, lng);