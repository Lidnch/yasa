

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

// document.getElementById('btn-tambah-records').addEventListener('click', function () {
//     const inputList = document.getElementById('input-list');
//     const newItem = inputList.children[0].cloneNode(true);

//     newItem.querySelector('.nama-barang').value = '';

//     const inputCount = inputList.children.length + 1;
//     newItem.querySelector('.nama-barang').placeholder = `Contoh: Perlengkapan Mandi ${inputCount}`;

//     newItem.querySelector('.delete-button').addEventListener('click', function () {
//     this.closest('.input-barang-item').remove();
//     });

//     inputList.appendChild(newItem);
// });

// // Add event listener to the initial delete button
// document.querySelectorAll('.delete-button').forEach(button => {
//     button.addEventListener('click', function () {
//     this.closest('.input-barang-item').remove();
//     });
// });

// const addBarang = document.getElementById("btn-tambah-records-brg");
// const remove = document.querySelector(".delete-button");

// function addInputBarang(){;
//     const namaBarang = document.createElement("input")
// }

// addBarang.addEventListener("click", addInputBarang)

let rowIndex = 1;

        document.getElementById('btn-tambah-brg').addEventListener('click', function() {
            rowIndex++;
            const originalRow = document.getElementById('input-barang');
            const clonedRow = originalRow.cloneNode(true);
            
            clonedRow.id = '';
            clonedRow.querySelector('.nama-barang').id = `donasi-nama-barang-${rowIndex}`;
            clonedRow.querySelector('.num').id = `donasi-jumlah-barang-${rowIndex}`;
            clonedRow.querySelector('minus-operator').id = `minus-operator-${rowIndex}`;
            clonedRow.querySelector('plus-operator').id = `plus-operator-${rowIndex}`;

            // Set default values or clear input if necessary
            clonedRow.querySelector('.nama-barang').value = '';
            clonedRow.querySelector('.num').innerText = '1';

            // Append the cloned row to the table
            originalRow.parentNode.appendChild(clonedRow);
        });