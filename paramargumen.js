function tambah (a, b){ //a,b disini parameter
    return a + b;
}

function kali (a){
    return a * 2;
}

const bil1 = 3;
const bil2 = 4;
let hasil;

hasil = tambah(kali(bil1), kali(bil2)); //kali1, kali2 disini argumen
console.log(hasil);