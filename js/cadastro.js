/****MASK****/

$("#cel").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");


/*****EMAIL-VALIDATION******/

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/****BOTOES-DE-ETAPA****/

$(function(){
    var et01 = document.getElementById('etapa01');
    var et02 = document.getElementById('etapa02');

    var name = document.getElementById('fullname');
    var mail = document.getElementById('email');
    var cel = document.getElementById('cel');
    var cpf = document.getElementById('cpf');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    $('.next').click(function(){
        const email = $('#email').val();
        
        if (validateEmail(email) && name.value && cel.value) {
            et01.style = "display: none";
            et02.style = "display: block";
        }
    });
    
    $('.prev').click(function(){
        et01.style = "display: block";
        et02.style = "display: none";
    });

    $('.conti').click(function(){
        if (mail.value && name.value && cel.value && cpf.value && cidade.value && estado.value){
            return false;
        }
    });
});

/***CONF-DE-MOBILE****/

function switchElements($ele1, $ele2) {
    $ele1.before($ele2);
}

if( $(window).width() <= 740){
    switchElements($('#voltar'), $('#enviar'));
}