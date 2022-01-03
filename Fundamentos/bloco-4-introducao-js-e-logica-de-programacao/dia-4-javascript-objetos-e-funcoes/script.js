// Exercicio de Funções - 1

function verificaPalindrome (palavra) {
    var separaPalavra = palavra.split("");
    var invertePalavra = separaPalavra.reverse();
    var novaPalavra = invertePalavra.join("");

    return novaPalavra;

}
if (novaPalavra === palavra){
    console.log ("true");
} else {
    console.log("false");
}

