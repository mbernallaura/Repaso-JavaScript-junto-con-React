let n = 4;
let izquierda = 0;
let derecha = n;
const mitad = Math.round(n/2)
let x = '';

for (let index = 1; index <=n; index++) {
    izquierda = index;
    for (let index = 1; index <=n; index++) {
        if(izquierda===index || derecha === index){
            x+= 'X';
        }else{
            x+= '_';
        }
    }
    derecha--;
    x+='\n';
}
console.log(x);
