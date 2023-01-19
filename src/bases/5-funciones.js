//Funciones
const saludar =  function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 =  (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 =  (nombre) => `Hola, ${nombre}`;
const saludar4 =  () => `Hola mundo`;


console.log(saludar('Laura'));
console.log(saludar2('Isaac')); 
console.log(saludar3('Santiago'));
console.log(saludar4());

const getUser = () =>{
    return{
        uid: 'ABC123',
        username: 'El capo'
    }
}

//?Manera mas simplificada de lo anterior
//!Se le coloca entre parentesis para que JS tome el objeto de manera implicita
const getUser2 = () =>
    ({
        uid: 'ABC123',
        username: 'El capo'
    });


console.log(getUser());
console.log(getUser2());

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retonar un objeto implicito
//3. pruebas
function getUsuarioActivo (nombre){
    return{
        uid: 'ABC456',
        username: nombre
    }
}

const obtenerUsuario = (nombre) => ({
    uid: 'ABC456',
    username: nombre
})


const usuarioActivo = obtenerUsuario('Fernando');
console.log(usuarioActivo);