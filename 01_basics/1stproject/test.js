const display = document.getElementById('display');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const savedList = document.getElementById('saved-list');

// count to start
let count = 0;

// Helper to update the screen
function render(){
    display.textContent = count;
};

// Event listeners for the button to work
incBtn.addEventListener('click',   () => {count++;  render();});
decBtn.addEventListener('click',   () => {count--;  render();});
resetBtn.addEventListener('click', () => {count = 0; render();});

saveBtn.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.textContent = count;
    savedList.appendChild(li)
});

render();