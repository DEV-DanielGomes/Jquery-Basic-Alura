console.log("Olá mundo!")
var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();


function atualizaTamanhoFrase() {
    var frase = $(".frase").text(); // Selecionando o conteúdo do elemento com a classe frase. 
    var numPalavras = frase.split(" ").length; //Criando array com a quantidade de frases. 
    var tamanhoFrase = $("#tamanho-frase"); //Selecionando o conteúdo do elemento com o id tamanho-frase.
    tamanhoFrase.text(numPalavras); //Adicionando um valor em um elemento da página html. 
}
// var paragrafo = $(".principal#introducao"); => Aceitando mais de um tipo de atributo para selecionar um conteudo do html.

// var campo = $(".campo-digitacao");
// campo.on("click", function() { // O on significa quando o campo-digitação for clicado. 
//     var conteudo = campo.val(); // Pegando o valor de um campo (val()), o conteúdo entre tag é pego através do text();

//     var qtdPalavras = conteudo.split(/\S+/).length - 1;
//     $("#contador-palavras").text(qtdPalavras);

//     var qtdCaracteres = conteudo.length;
//     $("#contador-caracteres").text(qtdCaracteres);
// });

// $(function(){ // Esta função executa as mesmas ações da função abaixo:
//     atualizaTamanhoFrase();
//     inicializaContadores();
//     inicializaCronometro();
//     $("#botao-reiniciar").click(reiniciaJogo);
// }); //OU
$(document).ready(function () {// Após a página ter sido carregada, execute esta função. (Objetivo do ready)
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();

    $("#botao-reiniciar").click(reiniciaJogo);// A função click é a mesa coisa que on.("click", function(){});
})

function inicializaContadores() {
    campo.on("input", function () { // Função ON fica escutando o navegador e executa n vezes.
        var conteudo = campo.val(); // Pegando o valor de um campo (val()), o conteúdo entre tag é pego através do text();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;//O conteúdo dentro de split é uma expressão regular.
        $("#contador-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}
function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () { // Função one executa uma única vez. O parametro focus indica quando o usuário clica sobre o elemento ele ficará em evidência. 
        var cronometroID = setInterval(function () { //Executa a função e n tempo
            tempoRestante--; // Aqui vai retirando tempo do valor do campo tempo-digitação.
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true); // attr são os atributos de uma tag. Posso tanto remover, como adicionar. Para remover deve informa false e para adicionar o true.
                clearInterval(cronometroID); // Interrompe a função steInterval .
                // campo.css("background-color", "lightgray"); //Essa instrução adiciona css no elemento selecionado.
                // campo.addClass("campo-desativado"); // Mesma coisa que o classlist.add do JavaScript
                finalizaJogo();
            }
        }, 1000); //Função vai executar em 1 em 1 segundo.
    });
}
function finalizaJogo() {
    campo.toggleClass("campo-desativado"); // É como se fosse um remove e adiciona. Se tem ele remove, se não tem ele adiciona.
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    inserePlacar();
}

function reiniciaJogo() {
    campo.attr("disabled", false); //Removendo um atributo.
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    // Adicionamos aqui \/
    inicializaCronometro(); //Acionando a função inicializarCronometor.
    campo.toggleClass("campo-desativado");
}
function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length); //Função de substring do JQuery. Aqui significa: Pegue da posição 0 até o tamanho do digitado. 
        if (digitado == comparavel) {
            campo.addClass("borda-verde"); // Adicionando classe.
            campo.removeClass("borda-vermelha"); // Removendo classe.
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}


// Nessa função é criada elementos html com JQUERY. Usando o seletor já cria um elemento quando está envolvido em tags. 

//recuperar a cor com JQuery var cor = $("div").css("background-color");

//http://materializecss.com/