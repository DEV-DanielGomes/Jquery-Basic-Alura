function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody"); // Seleciona o elemento do meu placar e desce até o tbody. Aqui está selecionado o tbody.
    var usuario = "Daniel";
    var numPalavras = $("#contador-palavras").text();
    // var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>" ;
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha); // Selecionando o elemento com a classe .botao remover e adicionando um evento de click.

    // var linha = "<tr>" + //Criando um TR na mão. hehe
    //     "<td>" + usuario + "</td>" +
    //     "<td>" + numPalavras + "</td>" +
    //     "<td>"+ botaoRemover + "</td>"+
    //     "</tr>";
    corpoTabela.append(linha); // Adiciona um elemento no fim do conteudo do elemento selecionado.
    // corpoTabela.prepend(linha); // Adiciona um elemento no começo do conteudo do elemento selecionado.
    $(".placar").slideDown(500);
    scrollPlacar();

}
function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#"); //Adicionando um atributo ao link criado.
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete"); // Adicionando classes e um texto para o elemento criado.

    // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}
function removeLinha(event) {
    event.preventDefault(); // Remove o efeito padrão do elemento selecionado.
    // this.remove(); // O this acessa o elemento que sofreu o click. Na verdade, ele é o elemento.
    // $(this).parent().parent().remove(); // o parent() é o evento que volta um nível do elemento selecionado. É parecido com o ParentNode do Javascript.
    // event.preventDefault();
    // $(this).parent().parent().fadeOut(); // fadeout adiciona um style diplay-none para o elemento selecionado.

    var linha = $(this).parent().parent();

    linha.fadeOut(1000); // Adicionando um 1 segundo para adicionar a classe display-none. 
    setTimeout(function() {
        linha.remove(); // Remove quando atingir um segundo. Remove do DOM.
    }, 1000);

    //Para esmanecer e aparecer elementos do DOM, além da função fadeOut que esconde, há as funções fadeIn, fadeOut e fadeToggle. Que aparece e alterna entre aparecer e esconder.
}

$("#botao-placar").click(mostraPlacar);

// function mostraPlacar() {
//     $(".placar").css("display", "block"); // aplicando o css
//     // function mostraPlacar() {
//     //     $(".placar").show();} // Exibindo os elementos

//     // function mostraPlacar() {
//     //     $(".placar").hide(); // Escondendo os elementos
//     // }
//     // function mostraPlacar() {
//     //     $(".placar").toggle(); // Igual o toggleclass. Essa função exibe e esconde os elementos.
//     // }
//     // function mostraPlacar() {
//     //     $(".placar").slideDown(600); Essa função exibi os elemento de cima para baixo com suavidade. 600 é o tempo que ela leva.
//     // }
   
// }
function mostraPlacar() {
    $(".placar").stop().slideToggle(600); // Esse carinha exibe (slideDown) e esconde (slideup) com efeitos de transições. A função .sto() interrompe a função que está sendo executada e executa o restante da expressão. Isso faz evitar o acumolo de execuções de funções na tela.
    
}
function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top; // A função offset volta as propriedades de posição do elemento selecionado no dom. Neste caso eu pego apenas o top em valor double.

    $("html, body").animate( // Animate adiciona animações como no CSS. Recebe os valores para animação e na sequência os milissegundos.
    {
        scrollTop: posicaoPlacar
    }, 1000);
}