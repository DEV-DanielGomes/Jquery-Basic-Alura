$(function(){ // a mesma coisa que $(document).ready(function(){});
    $(".slick").slick({ //Adicionando o carousel -> documentação: http://kenwheeler.github.io/slick/
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});