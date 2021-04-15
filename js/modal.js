var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
let cont = 0;

span.onclick = function() {
  modal.style.display = "none";
  cont = 1;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cont = 1;
  }
}

$('body').mouseleave(function(){
  if(cont == 0){
    modal.style.display = "block";
  }
});

/****VALIDACAO****/

function validateName(fullname){
	const re = /^[A-Za-z-ç ^a-zà-ú]+$/;
  	return re.test(fullname);
}

function validateCel(cel){
  if(cel.length == 14 || cel.length == 15){
      return true;
  }
}

function validateCPF(cpf) {	
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

$('#envia-modal').click(function(){
  
  const name = $('#name').val();
  const cel = $('#tel').val();
  const cpf = $('#cpf').val();

  const errorName = document.getElementById('name-error');
  const errorTel = document.getElementById('tel-error');
  const errorCpf = document.getElementById('cpf-error');

  if(!validateName(name)) errorName.innerHTML = 'Digite um nome valido'; else errorName.innerHTML = '';
  if(!validateCel(cel)) errorTel.innerHTML = 'Digite um número de celular valido'; else errorTel.innerHTML = '';
  if(!validateCPF(cpf)) errorCpf.innerHTML = 'Digite um CPF valido'; else errorCpf.innerHTML = '';

  if(!validateName(name) || !validateCel(cel) || !validateCPF(cpf)) return false;

});
/****MASK****/
$("#tel").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");