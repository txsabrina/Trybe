const readline = require('readline-sync');

const calculaVelocidade = (distancia, tempo) => {
  console.log(`velocidade: ${distancia / tempo}`)
}
const distancia = readline.questionInt("Digite a distancia:");

const tempo = readline.questionInt("Digite o tempo percorrido em segundos:");

calculaVelocidade(distancia, tempo);