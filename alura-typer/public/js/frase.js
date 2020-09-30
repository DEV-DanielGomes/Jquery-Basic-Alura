$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle(); // Exibindo a primeira vez -> Na próxima vez que for executado ele será removido, uso da propriedade toggle.

    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){ // Quando a requisição não acontece, o fail será executado. (Tratamento de erro.)
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },3000);
    })
    .always(function(){ //A propriedade always permite que sempre uma função será executado após a requisição AJAX da falha ou sucesso . 
        //Aplicando o spinner
        $("#spinner").toggle(); //mostrando o spinner

    }); // Criando uma requisção do tipo get no JQuery. Isso usa Ajax.
}
function trocaFraseAleatoria(data) { // O parametro data é o conteúdo do retorno da requisição. 
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length); // o Math.floor arendonda um valor para baixo(Sem casa decimal) e o math.random gera um numero aleatorio(Com casa decimal). 

    frase.text(data[numeroAleatorio].texto); //Adicionando o conteúdo Texto do retorno da requisição. O conteúdo é acessado pelo número aleatório gerado pelo math.random. 
    atualizaTamanhoFrase(); // Chamando a função atualizar frase.

    atualizaTempoInicial(data[numeroAleatorio].tempo); // Acessando o conteúdo de forma aleatória e retorna o tempo dele para função atualizaTempoInicial.     
    
}
function buscaFrase() {
    
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId}; //criando um objeto para envio de uma requisição AJAX.
    //passando objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)//Endereço, dados opcionais, função a ser executada caso de sucesso.
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
    
}

function trocaFrase(data) {

    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto); // Adiciona um texto.
    atualizaTamanhoFrase(); // Atualiza o tamanho da frase por meio da quantidade da mensagem.
    atualizaTempoInicial(data.tempo); // Atualiza o tempo por meio do retorno da requisição que contem o tempo.
}