const formItem = document.getElementById('items');
const items = formItem.querySelectorAll('.item');

for (let item = 0; item < items.length; item++){
    items[item].style.color = 'red';
}