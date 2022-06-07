const readline = require('readline-sync');

const imc = (peso, altura) => {
  const calcula = peso / (altura * altura) 
  console.log(`imc: ${calcula}`)
};


const altura = readline.questionFloat("Qual sua altura?");

const peso = readline.questionFloat("Qual seu peso?");

imc(peso, altura)