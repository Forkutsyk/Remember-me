window.onload = function() {
var todoList = [];
 document.getElementById('add').onclick = function add() {
   var d = document.getElementById('in','time').value;
  // {todo: addsmth, time:00:00, check: false}
  var temp = {};
   temp.todo = d;
   temp.check = false;
   temp.time = d;
   var i = todoList.length;
   todoList[i] = temp;
   console.log(todoList);
   localStorage.setItem('todo',JSON.stringify(todoList))
 }
}
