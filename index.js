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
