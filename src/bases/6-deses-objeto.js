//!Desestructuracion
//!Asignacion desestructurante

const persona ={
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman'
}


const retonaPersona = ({nombre, edad, rango = 'Capitan'}) =>{
    console.log(nombre, edad, rango);
}
retonaPersona(persona);

const returnPersona = ({clave, edad}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1234,
            lng: -17.5768
        }
    }
}

const {nombreClave, anios, latlng: {lat,lng}} = returnPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);


console.log(persona.nombre);

const {nombre: nombre2, edad, clave} = persona;
console.log(nombre2);
console.log(edad);
console.log(clave);

