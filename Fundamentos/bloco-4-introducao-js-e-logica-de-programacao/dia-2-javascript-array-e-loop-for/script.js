let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//exercício 1

//for(let index = 0; index <= numbers.length ; index +=1){
//  console.log(numbers[index])
//}


//Exercício 2 
let sum = 0;

for(let index = 0; index < numbers.length ; index +=1){
    sum += numbers[index];
}

//console.log(sum);
//Exercicio 3

let Total = sum/10;
//console.log(Total);
//Exercicio 4

if ( Total > 20 ){
    console.log("valor maior que 20!")
} else {
    console.log("Valor menor ou igual a 20!")
}