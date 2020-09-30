$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases",trocaFraseAleatoria).fail(function(){ // Quando a requisição não acontece, o fail será executado. (Tratamento de erro.)
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },3000);
    }); // Criando uma requisção do tipo get no JQuery. Isso usa Ajax.
}
function trocaFraseAleatoria(data) { // O parametro data é o conteúdo do retorno da requisição. 
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length); // o Math.floor arendonda um valor para baixo(Sem casa decimal) e o math.random gera um numero aleatorio(Com casa decimal). 

    frase.text(data[numeroAleatorio].texto); //Adicionando o conteúdo Texto do retorno da requisição. O conteúdo é acessado pelo número aleatório gerado pelo math.random. 
    atualizaTamanhoFrase(); // Chamando a função atualizar frase.

    atualizaTempoInicial(data[numeroAleatorio].tempo); // Acessando o conteúdo de forma aleatória e retorna o tempo dele para função atualizaTempoInicial.     
}