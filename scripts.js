const numeros = [ 1,2,3];

//inserindo numeros no inicio
numeros.unshift(0);
console.log(numeros);
//inserindo numeros no meio
numeros.splice(2,0,"a");
console.log(numeros);
//inserindo numeros no fim
numeros.push(5);
console.log(numeros);
