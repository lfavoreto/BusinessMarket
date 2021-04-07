var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function apear() {
    
    var cpf = document.getElementById('cpf');
    var cit = document.getElementById('cidade');
    var sta = document.getElementById('estado');

    var nome = document.getElementById('fullname').value;
    var tel = document.getElementById('cel').value;

    if(cpf.value && cit.value && sta.value){
        modal.style.display = "block";
        document.getElementById('no').innerHTML = nome;
        document.getElementById('te').innerHTML = tel;
        document.getElementById('cp').innerHTML = cpf.value;
    }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}