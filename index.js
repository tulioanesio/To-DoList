let tasks = [];
let completedtasks = [];

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
  let pendingTasks = localStorage.getItem("pendingTasks");
  pendingTasks = JSON.parse(pendingTasks);
  let completedTasks = localStorage.getItem("completedTasks");
  completedTasks = JSON.parse(completedTasks);

  const completedTask = {
    id: Date.now(),
    task: "Test",
    completed: true,
  };

  completedtasks.push(completedTask);

  localStorage.setItem("completedTasks", JSON.stringify(completedtasks));

  let pMsgTask = document.getElementById("pMsgTask");
  if (pendingTasks) {
    pMsgTask.innerHTML = "";
    pendingTasks.forEach((task) => {
      pMsgTask.innerHTML += `<input type="checkbox" id=taskItem${task.id}> ${task.task}<br>`;
    });
    pMsgAccordion.textContent = `Tasks(${pendingTasks.length})`;
  } else {
  }
};

function addTask() {
  if (localStorage.pendingTasks) {
    tasks = JSON.parse(localStorage.getItem("pendingTasks"));
  }

  let taskInput = document.getElementById("taskInput").value;
  let pMsgTask = document.getElementById("pMsgTask");

  const newTask = {
    id: Date.now(),
    task: taskInput,
    completed: false,
  };

  tasks.push(newTask);

  localStorage.setItem("pendingTasks", JSON.stringify(tasks));

  pMsgTask.innerHTML = "";

  document.getElementById("btn-Add").disabled = false;
  document.getElementById("btn-Add").style.cursor = "pointer";
  tasks.forEach((task) => {
    pMsgTask.innerHTML += `<input type="checkbox" id=taskItem${task.id}> ${task.task}<br>`;
  });

  pMsgAccordion.textContent = `Tasks(${tasks.length})`;
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
