const toDoItems = document.getElementsByClassName("to-do-item")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

function addItem() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkI = document.createElement("div");
  var checkT = document.createElement("div");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "<div>";

  checkI.className = "fa-solid fa-check";
  checkI.style.color = "lightgray";

  checkI.addEventListener("click", function () {
    checkI.style.color = "limegreen";
  });

  divChild.appendChild(checkI);

  checkT.className = "fa-solid fa-trash";
  checkT.style.color = "darkgray";
  checkT.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(checkT);
  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = "";
}
