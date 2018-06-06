window.onload = function() {
  if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    out();
  }
function out(){
  var out = ' ';
  for (var key in todoList){
    if (todoList[key].check == true){
      out += '<input type="checkbox" checked>';
    }
    else {
      out += '<input type="checkbox">';
    }
    out += todoList[key].todo +'<br>'+ todoList[key].time + '<br>';
  }
  document.getElementById('out').innerHTML = out;
  out();
}


/* Початкова таблиця*/
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

}
