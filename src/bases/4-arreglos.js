//Arreglos JS
//const arreglo = new Array(); Este arreglo solo se hace cuando ya se tiene a cantidad ya definida de los elementos 
const arreglo = [1,2,3,4];
//! Nunca utilizar el push para agregar elementos al arreglo
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function (numero){
    return numero;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

