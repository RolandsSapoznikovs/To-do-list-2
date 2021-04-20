var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}
var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Error");
    } else {
      document.getElementById("UL").appendChild(li);
    }
    document.getElementById("Input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < remove.length; i++) {
      remove[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }