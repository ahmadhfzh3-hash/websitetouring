// Fungsi untuk menampilkan tanggal dan waktu real-time
function updateRealTime() {
    const now = new Date();
    
    // Format tanggal Indonesia
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Format waktu
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Tambahkan nol di depan jika angka < 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Gabungkan semua
    const dateString = `${day}, ${date} ${month} ${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;
    const fullDateTime = `${dateString} - ${timeString} WIB`;
    
    // Tampilkan di semua elemen dengan id "real-time"
    const realTimeElements = document.querySelectorAll('#real-time');
    realTimeElements.forEach(element => {
        element.textContent = fullDateTime;
    });
}

// Jalankan fungsi pertama kali
updateRealTime();

// Update setiap detik
setInterval(updateRealTime, 1000);

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const touringForm = document.getElementById('touring-form');
    const formNotification = document.getElementById('form-notification');
    
    if (touringForm) {
        touringForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai form
            const name = document.getElementById('name').value;
            const destination = document.getElementById('destination').value;
            
            // Tampilkan notifikasi
            formNotification.innerHTML = `
                <h3><i class="fas fa-check-circle"></i> Terima Kasih, ${name}!</h3>
                <p>Pengalaman touring Anda ke <strong>${destination}</strong> telah berhasil dikirim. Cerita Anda dapat menginspirasi traveler lainnya!</p>
                <p>Kami akan menghubungi Anda melalui email jika ada pertanyaan atau informasi lebih lanjut.</p>
            `;
            formNotification.style.display = 'block';
            formNotification.style.background = '#e8f5e9';
            formNotification.style.borderColor = '#a5d6a7';
            
            // Reset form
            touringForm.reset();
            
            // Scroll ke notifikasi
            formNotification.scrollIntoView({ behavior: 'smooth' });
            
            // Sembunyikan notifikasi setelah 10 detik
            setTimeout(() => {
                formNotification.style.display = 'none';
            }, 10000);
        });
    }
    
    // Efek hover untuk kartu di halaman home
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Efek hover untuk item gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Highlight menu aktif berdasarkan halaman
    function highlightActiveMenu() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Cek apakah link mengarah ke halaman saat ini
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    highlightActiveMenu();
});