const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");
        toggle.addEventListener("click" , () =>{
            sidebar.classList.toggle("close");
        })
        searchBtn.addEventListener("click" , () =>{
            sidebar.classList.remove("close");
        });

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