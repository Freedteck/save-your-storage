// DOM Elements
const form = document.querySelector('form')
const submitBtn = document.querySelector('button')
const itemTable = document.querySelector('tbody')
const inputs = document.querySelectorAll('input')

// Form Validation
function validateForm() {
    const id = document.querySelector('[name="itemId"]').value.trim();
    const name = document.querySelector('[name="itemName"]').value.trim();
    const price = document.querySelector('[name="itemPrice"]').value.trim();
    
    submitBtn.disabled = !(id && name && price);
}


inputs.forEach(input => {
    input.addEventListener('input', validateForm)
})


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const item = {
       id: document.querySelector('[name="itemId"]').value.trim(),
    name: document.querySelector('[name="itemName"]').value.trim(),   
        price: parseFloat(document.querySelector('[name="itemPrice"]').value.trim())
    };
    
    addItem(item);
    updateTable();
    form.reset();
    validateForm();
});

// LocalStorage functions
function getItems() {
    return JSON.parse(localStorage.getItem('items')) || [];
}

function setItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

function addItem(item) {
    const items = getItems();
    items.push(item);
    setItems(items);
}

// Update table function
function updateTable() {
    const items = getItems();
    itemTable.innerHTML = '';
    
    items.forEach(item => {
        const row = itemTable.insertRow();
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>₦${item.price.toFixed(2)}</td>
        `;
    });
}

// Initialize table on page load
updateTable();