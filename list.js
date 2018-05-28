window.onload = function() {
  if (localStorage.getItem('todo')!= undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    out();
  }
function out(){
  var out = '';
  for (var key in todoList){
    if (todoList[key].check == true){
      out += '<input type="checkbox" checked>';
    }
    else {
      out += '<input type="checkbox">';
    }
    out += todoList[key].todo + '<br>';
  }
  document.getElementById('out').innerHTML = out;
  out();
}
}
