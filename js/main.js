function playPause(x,y) { 
    var video = document.getElementById(x); 
    var botao = document.getElementById(y);

    if (video.paused){ 
        video.play();
        botao.style = "display: none";
    } else {
        video.pause();
        botao.style = "display: block";
    }
} 

function proximoVideo(){

    var x = document.getElementById('v1');
    var y = document.getElementById('v2');

    x.style = 'display: none;';
    y.style = 'display: block;';

}

function anteriorVideo(){

    var x = document.getElementById('v1');
    var y = document.getElementById('v2');

    x.style = 'display: block;';
    y.style = 'display: none;';
}

$(function(){

    $('.back-to-top').hide();
    $(window).scroll(function(){
       if($(this).scrollTop() > 1000){
            $('.back-to-top').fadeIn();
       } else{
           $('.back-to-top').fadeOut();
       }
    });

    $(".back-to-top").click(function() {
        $("html, body").animate({scrollTop: 0}, 800);
    });
});
    