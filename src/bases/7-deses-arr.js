//!Desestructuracion de arreglos

const personajes = ['Goku','vegeta','Trunks'];
console.log(personajes[0]);

const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return['ABC', 123];
}

const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tare
//1. El primer valor del arreglo se llamara nombre
//2. El segundo valor del arr se llamara setNombre
const usaEstados = (valor) =>{
    return[valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usaEstados('Goku');
console.log(nombre);
setNombre();