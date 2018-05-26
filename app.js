window.onload = function() {

var todoList = [];

 document.getElementById('add').onclick = function add() {
   var d = document.getElementById('in').value;
  // {todo: addsmth, check: false}
  var temp = {};
   temp.todo = d;
   temp.check = false;
   var i = todoList.length;
   todoList[i] = temp;
   console.log(todoList);
   localStorage.setItem('todo',JSON.stringify(todoList))
 }
}
