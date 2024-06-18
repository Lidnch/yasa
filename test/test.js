document.getElementById('btn-tambah-records').addEventListener('click', function () {
    const inputList = document.getElementById('input-list');
    const newItem = inputList.children[0].cloneNode(true);

    // Reset the input field value
    newItem.querySelector('.nama-barang').value = '';

    // Update the placeholder of the cloned input field
    const inputCount = inputList.children.length + 1;
    newItem.querySelector('.nama-barang').placeholder = `Contoh: Perlengkapan Mandi ${inputCount}`;

    // Add event listener to the new delete button
    newItem.querySelector('.delete-button').addEventListener('click', function () {
    this.closest('.input-barang-item').remove();
    });

    inputList.appendChild(newItem);
});

// Add event listener to the initial delete button
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', function () {
    this.closest('.input-barang-item').remove();
    });
});

// Add event listener to the form submission
document.getElementById('donasi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Forbidden items list
    const forbiddenItems = ['rokok', 'alkohol'];

    // Check for forbidden items in the form
    const items = document.querySelectorAll('.nama-barang');
    let hasForbiddenItem = false;

    items.forEach(item => {
        const value = item.value.toLowerCase();
        if (forbiddenItems.includes(value)) {
            hasForbiddenItem = true;
        }
    });

    // Redirect based on validation
    if (hasForbiddenItem) {
        window.location.href = 'donasi-ditolak.html';
    } else {
        window.location.href = 'donasi-diterima.html';
    }
});