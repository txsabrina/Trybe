const readline = require('readline-sync');

const imc = require('./imc');

const altura = readline.questionFloat("Qual sua altura?");

const peso = readline.questionFloat("Qual seu peso?");

imc(peso, altura);