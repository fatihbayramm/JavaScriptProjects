const addTaskButtonDom = document.querySelector(".addTask");
const todoInputDom = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");

const toggleComplete = (event) => {
    const {parentElement} = event.currentTarget;

    const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
    );

    if (!isCompleted) {
        event.currentTarget.innerText = "Todo";
    } else {
        event.currentTarget.innerText = "Complete";
    }

    event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
    todosContainer.removeChild(event.currentTarget.parentElement);

}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement("li");
    todoItemElement.classList.add("todoItem");

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", toggleComplete);
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", removeItem)
    todoItemElement.appendChild(deleteButton);

    const textElement = document.createElement("p");
    textElement.innerText = todoText;
    textElement.classList.add("todoText");
    todoItemElement.appendChild(textElement);

    todosContainer.appendChild(todoItemElement);
    todoInputDom.value = "";
    todoInputDom.focus();
}

const addTask = () => {
    if (todoInputDom.value == "") {
        alert("Input bos olamaz");
    } else {
        renderTodoItem(todoInputDom.value);
    }
} 

addTaskButtonDom.addEventListener("click", addTask);