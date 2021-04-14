/****MASK****/

$("#cel").mask("(00) 00000-0000");    
$("#cpf").mask("000.000.000-00");

/*****VALIDATION******/

function validateName(fullname){
    const re = /^[A-Za-z ]+$/;
    return re.test(fullname);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateCel(cel){
    if(cel.length == 14 || cel.length == 15){
        return true;
    }
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

$.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', {id: 10, }, function (json) {
    var options = '<option value="">Ex: São Paulo</option>';
    for (var i = 0; i < json.length; i++) {
        options += '<option data-id="' + json[i].id + '" value="' + json[i].nome + '" >' + json[i].nome + '</option>';
    }
    $("select[name='estado']").html(options);
});

$("select[name='estado']").change(function () {
    if ($(this).val()) {
        $.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+$(this).find("option:selected").attr('data-id')+'/municipios', {id: $(this).find("option:selected").attr('data-id')}, function (json) {

            var options = '<option value="">Ex: São Paulo</option>';
            for (var i = 0; i < json.length; i++) {
                options += '<option value="' + json[i].nome + '" >' + json[i].nome + '</option>';

            }
            $("select[name='cidade']").html(options);
        });
    } else {
        $("select[name='cidade']").html('<option value="">Ex: São Paulo</option>');
    }
});

/****BOTOES-DE-ETAPA****/

$(function(){
    var et01 = document.getElementById('etapa01');
    var et02 = document.getElementById('etapa02');

    var nm = document.getElementById('fullname');
    var mail = document.getElementById('email');
    var cl = document.getElementById('cel');
    var cpf = document.getElementById('cpf');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    $('.next').click(function(){
        const email = $('#email').val();
        const name = $('#fullname').val();
        const cel = $('#cel').val();
        
        if (validateEmail(email) && validateName(name) && validateCel(cel)) {
            et01.style.display = 'none';
            et02.style.display = 'block';
        }
    });
    
    $('.prev').click(function(){
        et01.style = "display: block";
        et02.style = "display: none";
    });

    $('.conti').click(function(){
        if (mail.value && nm.value && cl.value && cpf.value && cidade.value && estado.value){
            return false;
        }
    });

    $('#enviar').click(function(){

        const cpf = $('#cpf').val();
        const uf = $('#estado').val();

        if (!validarCPF(cpf)) return false;
    });
});

/***CONF-DE-MOBILE****/

function switchElements($ele1, $ele2) {
    $ele1.before($ele2);
}

if( $(window).width() <= 740){
    switchElements($('#voltar'), $('#enviar'));
}