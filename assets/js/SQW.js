//javascript timer function belongs to:
//https://codepen.io/mathiasschjott/pen/rerdGj
//used here with many thanks

function startTime() {
    const today = new Date();

    // Opsi untuk format waktu HH:MM:SS
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Menggunakan format 24 jam
    };

    // Mengambil waktu lokal berdasarkan zona waktu browser pengguna
    // Jika pengguna di Serang, ini akan menampilkan WIB
    const timeString = today.toLocaleTimeString('en-US', timeOptions);

    // Memperbarui elemen dengan id 'clock'
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerHTML = timeString;
    }

    // Panggil fungsi ini lagi setelah 1 detik (1000 milidetik)
    setTimeout(startTime, 1000);
}

// Mulai jam ketika halaman dimuat
startTime();