const readline = require('readline-sync');

const number = readline.questionInt('Digite um numero de 1 a 10:')

const numAle = Math.floor((Math.random() * 10) + 1);

if(number === numAle) {
  console.log(numAle)
  console.log("Parabéns, número correto!")
} else {
  console.log(`Opa, não foi dessa vez. O número era ${numAle}`)
}


