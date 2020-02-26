function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var list=document.getElementById('demo');

function addTask(task) {
  // document.getElementById('task') ver naxulobda. inputs id ar qonda minichebuli
  var t = document.getElementById('task').value; // aq shegidzlia pirdapir task.value - s mimarto
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(t));
  list.appendChild(entry);
}