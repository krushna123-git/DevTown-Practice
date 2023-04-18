/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector("#todo-container");
const input = document.querySelector("#add-todo");
const addbutton = document.querySelector("#add-todo-btn");
const lastUpdatedContainer = document.querySelector("#last-updated");
console.log(lastUpdatedContainer);
let lastUpdated = new Date().toLocaleString();

lastUpdatedContainer.innerHTML = lastUpdated;

const listItemComplete = (todo_text="")=>` <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <div class="text-slate-500 line-through">${todo_text}</div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                </div>`

const listItem = (todo_text="")=>`<div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                    <div class="inline-flex items-center space-x-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500 hover:text-indigo-600 hover:cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                        </div>
                        <div>${todo_text}</div>
                        
                    </div>
                    
                    <div>
                    button class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                </div>`


const todos = [];

const showEdit = (id) => {
  const element = todos.find((todo) => todo.id === id);
  input.value = element.text;
  addbutton.style = "display: none";
  editButton.style = "display: inline";
  idOfElementToEdit = id;
};

const renderList = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    // if(todo.complete === true){
        todoElement.innerHTML = listItemComplete(todo.text);
    // }else{
    //   todoElement.innerHTML = listItem(todo.text);
    // }
    todoContainer.appendChild(todoElement);
  });
};

const handleAdd = (e) => {
  const itemToAdd = input.value;
  if (itemToAdd !== null && itemToAdd !== "") {
    todos.push({
      text: itemToAdd,
      completed: false,
      id: Date.now(),
    });
    input.value = "";
    renderList();
    console.log(todos)
    return;
  } else {
    return window.alert("adding an empty item is not possible");
  }
};


addbutton.addEventListener("click", handleAdd);