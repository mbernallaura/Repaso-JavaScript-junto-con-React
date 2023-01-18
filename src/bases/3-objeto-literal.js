const persona = {
    nombre: 'Tony',
    apelido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5544466,
        lat: 14.5657,
        lng: 34.5677
    }
};


// const persona2= persona; //!No se debe hacer asi un clon de un objeto, ya que solo es por referencia
const persona2 = {...persona} //?clonar un objeto
persona2.nombre = 'peter';

console.table(persona);
console.log(persona2);