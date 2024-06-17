const donasiForm = document.getElementById('donasi-form');
const nominalUang = document.getElementById('donasi-nominal-uang');
const namaBarang = document.getElementById('donasi-nama-barang');
const jumlahBarang = document.getElementById('donasi-jumlah-barang');

// Add event listener to the form submission
donasiForm.addEventListener('submit', function(e) {
    e.preventDefault();

    function formatCurrency(value) {
        const number = parseInt(value.replace(/\D/g, ''), 10);
        if (isNaN(number)) return "Rp0,00";
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        }).format(number);
    }

    const nominalUangValue = nominalUang.value;
    const namaBarangValue = namaBarang.value;
    const jumlahBarangValue = jumlahBarang.textContent;

    localStorage.setItem('nominal-uang', nominalUangValue);
    localStorage.setItem('nama-barang', namaBarangValue);
    localStorage.setItem('jumlah-barang', jumlahBarangValue);

    // Forbidden items list
    const forbiddenItems = ['rokok', 'alkohol'];

    // Check for forbidden items in the form
    const items = namaBarang;
    let hasForbiddenItem = false;

    const value = items.value.toLowerCase();
        if (forbiddenItems.includes(value)) {
            hasForbiddenItem = true;
        }

    // items.forEach(item => {
    //     const value = item.value.toLowerCase();
    //     if (forbiddenItems.includes(value)) {
    //         hasForbiddenItem = true;
    //     }
    // });

    // Redirect based on validation
    if (hasForbiddenItem) {
        window.location.href = 'donasi-ditolak.html';
    } else {
        window.location.href = 'donasi-diterima.html';
    }
});