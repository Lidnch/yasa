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