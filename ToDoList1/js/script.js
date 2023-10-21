const todolist = [
    {
        name: 'make dinner', 
        dueDate: '2023-10-21'
    },
    {
        name: 'wash dishes',
        dueDate: '2023-10-22'
    }
];

renderTodoList();

// Generating the HTML
function renderTodoList() {
    let todolistHTML = '';

    todolist.forEach((todoObject, index) => {
        // this is called destructuring
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
         `;
        todolistHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todolist.splice(index, 1);
                renderTodoList();
            });
    });
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    // shorthand property
    todolist.push({
        name,
        dueDate
    });
    inputElement.value = '';
    renderTodoList();
}