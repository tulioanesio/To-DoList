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

  let pMsgPendingTask = document.getElementById("pMsgPendingTask");
  if (pendingTasks) {
    pMsgPendingTask.innerHTML = "";
    pendingTasks.forEach((task) => {
      pMsgPendingTask.innerHTML += `<input type="checkbox" id=taskItem${task.id}> ${task.task}<br>`;
    });
    PendingAccordion.textContent = `Pending(${pendingTasks.length})`;
  }

  const completedTask = {
    id: Date.now(),
    task: "Test",
    completed: true,
  };

  completedtasks.push(completedTask);

  localStorage.setItem("completedTasks", JSON.stringify(completedtasks));

  let pMsgCompletedTask = document.getElementById("pMsgCompletedTask");
  if (completedTasks) {
    pMsgCompletedTask.innerHTML = "";
    completedTasks.forEach((task) => {
      pMsgCompletedTask.innerHTML += `<input type="checkbox" id=taskItem${task.id}> ${task.task}<br>`;
    });
    CompletedAccordion.textContent = `Completed(${completedTasks.length})`;
  }
};

function addTask() {
  if (localStorage.pendingTasks) {
    tasks = JSON.parse(localStorage.getItem("pendingTasks"));
  }

  let taskInput = document.getElementById("taskInput").value;
  let pMsgPendingTask = document.getElementById("pMsgPendingTask");

  const newTask = {
    id: Date.now(),
    task: taskInput,
    completed: false,
  };

  tasks.push(newTask);

  localStorage.setItem("pendingTasks", JSON.stringify(tasks));

  pMsgPendingTask.innerHTML = "";

  document.getElementById("btn-Add").disabled = false;
  document.getElementById("btn-Add").style.cursor = "pointer";
  tasks.forEach((task) => {
    pMsgPendingTask.innerHTML += `<input type="checkbox" onclick="selectCheckBox()" id=taskItem${task.id}> ${task.task}<br>`;
  });

  PendingAccordion.textContent = `Pending(${tasks.length})`;
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

// function selectCheckBox() {
//   // Pega as tarefas pendentes do localStorage
//   let pendingTasks = JSON.parse(localStorage.getItem("pendingTasks")) || [];
//   let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

//   // Cria uma nova lista filtrando as que continuam pendentes
//   const stillPending = [];

//   pendingTasks.forEach((task) => {
//     const checkbox = document.getElementById(`taskItem${task.id}`);

//     if (checkbox && checkbox.checked) {
//       // Se estiver marcada, adiciona em completedTasks
//       task.completed = true;
//       completedTasks.push(task);
//       pMsgPendingTask.innerHTML += "";
//     } else {
//       // Se não, mantém na lista de pendentes
//       stillPending.push(task);
//     }
//   });

//   // Atualiza o localStorage
//   localStorage.setItem("pendingTasks", JSON.stringify(stillPending));
//   localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

//   // Atualiza a lista visível na tela (se quiser)
//   renderTasks(); // <- essa função você precisaria ter pra re-renderizar as tarefas
// }

// window.onload()
