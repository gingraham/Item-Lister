var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
//Add item
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  // Add txt node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement("button");
  //Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Add txt node with del button
  deleteBtn.appendChild(document.createTextNode("X"));
  //Append button to li
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
