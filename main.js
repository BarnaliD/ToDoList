const form = document.querySelector('form');
const newItemInput = document.querySelector('#new-item');
const toDoList = document.querySelector('#to-do-list');

// Add event listener to the form for adding a new item
form.addEventListener('submit', addItem);

// Add event listener to the to-do list for removing an item
toDoList.addEventListener('click', removeItem);

// Function to add a new item to the to-do list
function addItem(event) {
  event.preventDefault();
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    toDoList.appendChild(newItem);
    newItemInput.value = '';
  }
}

// Function to remove an item from the to-do list
function removeItem(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
}
addItem();
removeItem();
