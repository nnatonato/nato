function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }  
  var list=document.getElementById('demo');
  function addTask(task){
    var t = document.getElementById('task').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(t));
    list.appendChild(entry);
  }