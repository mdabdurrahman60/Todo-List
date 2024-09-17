const todoList = [];
renderTodoList();
function renderTodoList(){
    let todoListHTML = '';
    for (let i = 0; i<todoList.length;i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


}
function addTodoList(){
    const inputElement  = document.querySelector('.todo-name-input')
    const todoName = inputElement.value;
    todoList.push(todoName);
    inputElement.value = '';
    renderTodoList();
}