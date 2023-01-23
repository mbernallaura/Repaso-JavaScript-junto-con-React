let n = 6;
let matriz = '';

for (let index = 1; index <=n; index++) {
    for (let index = 1; index <=n; index++) {
        matriz += (index % 2) === 0 ? '_' : 'X';
    }
    matriz +='\n';
}
console.log(matriz);