const todoList = [{name:'Physics Homework',
    dueDate:'2025-08-19'}
];
renderTodoList();
function renderTodoList(){
    let todoListHTML = '';
    todoList.forEach(function(todoObject,index){
        const {name,dueDate} = todoObject;
        const html = 
          `<div>${name}</div>
          <div>${dueDate} </div> 
          <button onclick="
            todoList.splice(${index},1); renderTodoList()
          " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    

    });

    //added forEach so i comment out them
    // for (let i = 0; i<todoList.length;i++){
    //     const todoObject = todoList[i];
    //     // const name = todoObject.name;
    //     //const dueDate = todoObject.dueDate;
    //     const {name,dueDate} = todoObject;
    //     const html = 
    //       `<div>${name}</div>
    //       <div>${dueDate} </div> 
    //       <button onclick="
    //         todoList.splice(${i},1); renderTodoList()
    //       " class="delete-todo-button">Delete</button>`
    //     todoListHTML += html;
    // }
        
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;


}
function addTodoList(){
    const inputNameElement  = document.querySelector('.todo-name-input');
    const name = inputNameElement.value;
    const inputDueDateElement = document.querySelector('.due-date-input');
    const dueDate = inputDueDateElement.value;

    todoList.push({
        // name:name,
        //dueDate:dueDate
        name,dueDate
    });
    
    renderTodoList();
}