const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
}

function deleteTask(e) {
  e.target.parentNode.remove();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTask()
    }
})
