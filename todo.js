document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add-button");
  const incompleteTaskHolder = document.getElementById("incomplete-tasks");
  const completedTasksHolder = document.getElementById("completed-tasks");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
    } else {
      const listItem = createTaskElement(taskText);
      incompleteTaskHolder.appendChild(listItem);
      taskInput.value = "";
      bindTaskEvents(listItem);
    }
  });

  function createTaskElement(taskString) {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    label.innerText = taskString;
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
  }

  function bindTaskEvents(listItem) {
    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      const ul = listItem.parentNode;
      ul.removeChild(listItem);
    });
  }
});
