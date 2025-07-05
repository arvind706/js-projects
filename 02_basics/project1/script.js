const input = document.getElementById('todo-input')
const addbtn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')
const clearbtn = document.getElementById('clear-btn')

addbtn.addEventListener('click',addtodo)
clearbtn.addEventListener('click',cleartodos)

function addtodo() {
    const todoText = input.value.trim();

    if(todoText === ""){
        alert("Please enter a task")
        return;
    }

    const li = document.createElement('li')
    li.textContent = todoText;

    // Toggle completion on click
    li.addEventListener('click',()=>{
        li.classList.toggle("completed");
    });
    
    //Right click to delete
    li.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        li.remove();
    });
    
    list.appendChild(li);
    input.value=""; //clear input
}

function cleartodos(){
    list.innerHTML= "";
}
