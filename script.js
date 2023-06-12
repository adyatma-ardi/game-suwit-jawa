// menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan computer
var comp = Math.random();

if (comp < 0.34) {
    comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
// menentukan aturan
if (p == comp) {
    hasil = 'SERI!';
} else if (p == 'gajah') {
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'salah memasukkan pilihan';
}

// tampilkan hasil
alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + comp + '\nMaka kamu ' + hasil);