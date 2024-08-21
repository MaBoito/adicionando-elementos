const numeros = [ 1,2,3,2,4];// numeros primitivos

//inserindo numeros no inicio
numeros.unshift(0);
console.log(numeros);
//inserindo numeros no meio
numeros.splice(3,0,"a");
console.log(numeros);
//inserindo numeros no fim
numeros.push(5);
console.log(numeros);
//Encontrando elementos
console.log(numeros.indexOf(2));
//ENcontrar a ultima ocorrencia do valor digitado
console.log(numeros.lastIndexOf(2));
//verificar se existe ou nao 
console.log(numeros.includes(2));

