//MELHORIA DO ALGORÍTMO FOR DENTOR DE FOR - TRABALHO EM GRUPO EM 25 MINUTOS

let paes_sala_38 = ["Helo", "Quesia", "Mai", "Kelly", "Sah"];

let ingredientes = ["pão", "queijo", "bacon", "alface", "ketchup", "azeitona", "presunto", "tomate", "maionese", "pão"];
sacola = [];

for (let index = 0; index < paes_sala_38.length; index += 1){

    let pao = [];
    console.log('Monta pão, ' + paes_sala_38[index] + '!');

    for (let index = 0; index < ingredientes.length; index += 1){
        pao.push(ingredientes[index]);
    }

    if (paes_sala_38[index] == "Helo"){
        let tirar_ingrediente = pao.indexOf("bacon");   
        pao.splice(tirar_ingrediente,1);  
    }
    if (paes_sala_38[index] == "Quesia"){
        let tirar_ingrediente = pao.indexOf("presunto");   
        pao.splice(tirar_ingrediente,1);  
    }
    if (paes_sala_38[index] == "Mai"){
        let tirar_ingrediente = pao.indexOf("azeitona");   
        pao.splice(tirar_ingrediente,1);  
    }
    if (paes_sala_38[index] == "Kelly"){
        let tirar_ingrediente = pao.indexOf("maionese");   
        pao.splice(tirar_ingrediente,1);  
    }
    if (paes_sala_38[index] == "Sah"){
        let tirar_ingrediente = pao.indexOf("ketchup");   
        pao.splice(tirar_ingrediente,1);  
    }

    console.log('Ingredientes sanduíche: ' + pao);
    console.log('Pão ' + paes_sala_38[index] + ' pronto!');
    sacola.push(pao);
}