document.getElementById('item-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    addItemToList(itemName);
    document.getElementById('item-name').value = '';
});

function addItemToList(name) {
    const list = document.getElementById('item-list');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
}