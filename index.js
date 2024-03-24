function submitForm(event) {
    event.preventDefault(); // Mencegah pengiriman form bawaan HTML
    // Mengambil data dari form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("chat").value;

    // Simpan data ke file CSV (contoh)
    saveToCSV(name, email, message);

    // Tampilkan pop-up
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function saveToCSV(name, email, message) {
    // Contoh implementasi menyimpan ke file CSV lokal
    var csvContent = "data:text/csv;charset=utf-8,"
        + "Name,Email,Message\n"
        + name + "," + email + "," + message + "\n";
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_data.csv");
    document.body.appendChild(link); // Required for Firefox
    alert("Message sent successfully!");
    link.click();
}

// JavaScript untuk menangani mode gelap/terang dan perubahan warna
f// JavaScript untuk menangani mode gelap/terang dan perubahan warna
function toggleMode() {
    var body = document.body;
    var modeToggle = document.getElementById("mode-toggle");

    // Toggle class 'dark-mode' pada body
    body.classList.toggle("dark-mode");

    // Ubah ikon tombol berdasarkan mode yang aktif
    if (body.classList.contains("dark-mode")) {
        modeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        // Memanggil fungsi untuk mengubah warna saat mode gelap aktif
        changeColorsDarkMode();
    } else {
        modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        // Memanggil fungsi untuk mengubah warna saat mode terang aktif
        changeColorsLightMode();
    }
}

// Fungsi untuk mengubah warna saat mode gelap diaktifkan
function changeColorsDarkMode() {
    var body = document.body;

    // Set ulang variabel CSS dengan warna kebalikan
    body.style.setProperty('--primary', 'linear-gradient(45deg, #360033, #0b8793, #360033, #0b8793)');
    body.style.setProperty('--bg', '#e3e5e0');
}

// Fungsi untuk mengubah warna saat mode terang diaktifkan
function changeColorsLightMode() {
    var body = document.body;

    // Set ulang variabel CSS dengan nilai aslinya
    body.style.setProperty('--primary', 'linear-gradient(45deg, #C9FFCC, #F4786C, #C9FFCC, #F4786C)');
    
    body.style.setProperty('--bg', '#1c1a1f');
}



// Panggil fungsi changeColors sesuai dengan mode yang aktif saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    if (document.body.classList.contains("dark-mode")) {
        changeColorsDarkMode();
    }
});
