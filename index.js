let tasks = [];

document.getElementById("btn-Add").disabled = true;
document.getElementById("btn-Add").style.cursor = "not-allowed";

document
  .getElementById("taskInput")
  .addEventListener("input", function (event) {
    var conteudo = document.getElementById("taskInput").value;

    if (conteudo !== null && conteudo !== "") {
      document.getElementById("btn-Add").disabled = false;
      document.getElementById("btn-Add").style.cursor = "pointer";
      document.getElementById("btn-Add").style.color = "#78BAFD";
    } else {
      document.getElementById("btn-Add").disabled = true;
      document.getElementById("btn-Add").style.cursor = "not-allowed";
      document.getElementById("btn-Add").style.color = "#605e5c";
    }
  });

window.onload = function () {
  let savedTasks = localStorage.getItem("savedTasks");
  savedTasks = JSON.parse(savedTasks);
  let pMsgTask = document.getElementById("pMsgTask");
  if (savedTasks) {
    pMsgTask.innerHTML = "";

    savedTasks.forEach((tasks) => {
      pMsgTask.innerHTML += `<input type="checkbox" class=check> ${tasks}<br>`;
    });
    pMsgPending.textContent = `Pendentes(${savedTasks.length})`;
  } else {
  }
};

function addTask() {
  if (localStorage.savedTasks) {
    tasks = JSON.parse(localStorage.getItem("savedTasks"));
  }

  let taskInput = document.getElementById("taskInput").value;
  let pMsgTask = document.getElementById("pMsgTask");

  tasks.push(taskInput);
  console.log(tasks);
  localStorage.savedTasks = JSON.stringify(tasks);

  pMsgTask.innerHTML = "";

  document.getElementById("btn-Add").disabled = false;
  document.getElementById("btn-Add").style.cursor = "pointer";
  tasks.forEach((task) => {
    pMsgTask.innerHTML += `<input type="checkbox" class=check> ${task}<br>`;
  });

  pMsgPending.textContent = `Pendentes(${tasks.length})`;

  if (check.checked == true) {
    pDoneTask.innerHTML += `<input type="checkbox" class=check> ${task}<br>`;
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
