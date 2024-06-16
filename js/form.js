const plus = document.querySelector("#plus-operator"),
num = document.querySelector(".num"),
minus = document.querySelector("#minus-operator");

let a = 1;

plus.addEventListener("click", ()=>{
    a++;
    num.innerHTML = a;
    console.log(a);
})

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
    }
    num.innerHTML = a;
    console.log(a);
})

document.getElementById('btn-tambah-records').addEventListener('click', function () {
    const inputList = document.getElementById('input-list');
    const newItem = inputList.children[0].cloneNode(true);

    newItem.querySelector('.nama-barang').value = '';

    const inputCount = inputList.children.length + 1;
    newItem.querySelector('.nama-barang').placeholder = `Contoh: Perlengkapan Mandi ${inputCount}`;

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