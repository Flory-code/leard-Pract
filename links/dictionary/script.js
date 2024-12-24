const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const searchInput = document.getElementById('searchInput');

let items = ['Recon', 'Support', 'Wraight', 'Pathfinder', 'Lifeline'];


function displayItems(filter = '') {
    itemList.innerHTML = '';
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    filteredItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        itemList.appendChild(li);
    });
}


function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        itemInput.value = '';
        displayItems();
    }
}


searchInput.addEventListener('input', () => {
    displayItems(searchInput.value);
});


addButton.addEventListener('click', addItem);


itemInput.addEventListener('keypress', (event)=> {
    if (event.key === 'Enter') {
        addItem();
    }
});


displayItems();