//jika variable biasa
var hari1 = "senin";
var hari2 = "selasa"; // ini akan susah dimanage jika banyak hari

//jika menggunakan array
var hari = ["senin", "selasa", "rabu", "kamis"];

var arr = ["a", 3, true];
console.log(arr);
console.log(hari[2]); // mengakses array rabu

//mengisi array
// var buah = [];
// buah[0] = "nanas";
// buah[1] = "jeruk";
// buah[2] = "semangka";
// console.log(buah);
// console.log(buah[1]); // mengakses jeruk

//menghapus isi array
var hewan = ["sapi", "kambing", "kerbau"];
// hewan[1] = undefined; // menghapus kambing
// console.log(hewan);

//menampilkan semua isi array
for (var i = 0; i < hewan.length; i++){
    console.log(hewan[i]);
}

//join
console.log(hewan.join(", ")); // menggabungkan semua isi array menjadi string

//push, pop, unshift, shift
hewan.push("domba"); // menambah domba di akhir array
console.log(hewan.join(", "));
hewan.pop(); // menghapus hewan di akhir array
console.log(hewan.join(", "));
hewan.unshift("babi"); // menambah hewan di awal array
console.log(hewan.join(", "));
hewan.shift();  // menghapus hewan di awal array
console.log(hewan.join(", "));

//slice dan splice
//splice : menyisipkan array ditengah2
hewan.splice(3, 0, "Jangkrik");
console.log(hewan.join(", "));

hewan.splice(1, 2);
console.log(hewan.join(", "));

//slice : mengiris array jadi array baru
var buah = ["apel", "mangga", "durian", "nanas"];
console.log(buah.join(", "));
var buah2 = buah.slice(0, 2);
console.log(buah2.join(", "));
