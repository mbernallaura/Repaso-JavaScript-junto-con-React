//!Operadores ternarios
const activo = true;

// if(activo){
//     mensaje = 'activo';
// }else{
//     mensaje = 'inactivo'
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//?Si solo se quiere evaluar also  sin el 'else'
const mensaje = activo && 'Activo';

console.log(mensaje);