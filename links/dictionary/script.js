const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const searchInput = document.getElementById('searchInput');

let items = ['Recon', 'Support', 'Wraight', 'Pathfinder', 'Lifeline'];

// Функция для отображения списка
function displayItems(filter = '') {
    itemList.innerHTML = '';
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    filteredItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        itemList.appendChild(li);
    });
}

// Добавление элемента
function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        itemInput.value = '';
        displayItems();
    }
}

// Поиск элементов
searchInput.addEventListener('input', () => {
    displayItems(searchInput.value);
});

// Обработка нажатия кнопки "Добавить"
addButton.addEventListener('click', addItem);

// Обработка нажатия клавиши Enter
itemInput.addEventListener('keypress', (event)=> {
    if (event.key === 'Enter') {
        addItem();
    }
});

// Изначальное отображение списка
displayItems();