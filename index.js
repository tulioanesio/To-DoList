let tasks = [];

window.onload = function () {
  let savedTasks = localStorage.getItem("savedTasks");
  savedTasks = JSON.parse(savedTasks);
  let pMsgTask = document.getElementById("pMsgTask");
  if (savedTasks) {
    pMsgTask.innerHTML = "";

    savedTasks.forEach((tasks) => {
      pMsgTask.innerHTML += `<input type="checkbox"> ${tasks}<br>`;
    });
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

  tasks.forEach((task) => {
    pMsgTask.innerHTML += `<input type="checkbox" class=check> ${task}<br>`;
  });

  if(check.checked == true){
  }

}
