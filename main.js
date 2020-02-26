var viewListToggled = false;

function openForm() {
  document.getElementById("myForm").style.display = "block";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var list=document.getElementById('demo');

function addTask(task) {
  var ba=document.getElementById("num").innerHTML;
  ba=+ba;
  ++ba;
  document.getElementById("num").innerHTML=ba;
  // document.getElementById('task') ver naxulobda. inputs id ar qonda minichebuli
  var t = document.getElementById('task').value; // aq shegidzlia pirdapir task.value - s mimarto
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(t));
  list.appendChild(entry);
  
}

function viewList(){
  // if(document.getElementById("view1").innerHTML=="View List"){
  //   document.getElementById("myList").style.display="block";
  //   document.getElementById("view1").innerHTML="Hide list";
  // }
  // else{
  //   document.getElementById("myList").style.display="none";
  //   document.getElementById("view1").innerHTML="View List";
  // }

  if (!viewListToggled) {
    document.getElementById("myList").style.display="block";
    document.getElementById("view1").innerHTML="Hide list";
  } else {
    document.getElementById("myList").style.display="none";
    document.getElementById("view1").innerHTML="View List";
  }
  
  viewListToggled = !viewListToggled;

}