

function buttonIya() {
    document.getElementById('tombol-iya').style.display = 'none'; // Mengubah ID menjadi 'tombol-iya'
    document.getElementById('tombol-tidak').style.display = 'none'; // Mengubah ID menjadi 'tombol-iya'
    document.getElementById('pict').src = "./assets/image 3.png"; // Mengubah sumber gambar menggunakan src
    document.getElementById('kartu').style.backgroundColor = '#E12E2E';
    document.getElementById('jdl').innerHTML = 'Anda Berbohog'; // Menggunakan innerHTML untuk mengubah teks
    document.getElementById('yakin').innerHTML = 'Anda seorang Teknisi'; // Menggunakan innerHTML untuk mengubah teks
  }


function buttonTidak() {
    document.getElementById('tombol-iya').style.display = 'none'; // Mengubah ID menjadi 'tombol-iya'
    document.getElementById('tombol-tidak').style.display = 'none'; // Mengubah ID menjadi 'tombol-iya'
    document.getElementById('pict').src = "./assets/image 2.png"; // Mengubah sumber gambar menggunakan src
    document.getElementById('kartu').style.backgroundColor = '#6FD240';
    document.getElementById('jdl').innerHTML = 'Anda Benar'; // Menggunakan innerHTML untuk mengubah teks
    document.getElementById('yakin').innerHTML = 'Anda adalah seorang Mahasiswa'; // Menggunakan innerHTML untuk mengubah teks
  }