window.onload = function(){
var todoList = [];
 document.getElementById('add').onclick = function add() {
   var d = document.getElementById('in').value;
   var t = document.getElementById('time').value;
  // {todo: addsmth, time: dd.mm.yyyyT00:00, check: false}
   var temp = {};
   temp.todo = d;
   temp.check = false;
   temp.time = t;
   var i = todoList.length;
   todoList[i] = temp;
   console.log(todoList);
   if (todoList === '') {
     alert("You must write something!");
   }
   localStorage.setItem('todo',JSON.stringify(todoList));
 }
}
/*'todo',JSON.stringify(todoList)*/
