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


/****MASK****/
$("#tel").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");