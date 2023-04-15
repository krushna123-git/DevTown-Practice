const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const todos = []


const handleAdd = (e)=>{
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
    console.log(todos)
        return 
    }else{
       return window.alert('adding an empty item is not possible')
    }
}

button.addEventListener('click',handleAdd)