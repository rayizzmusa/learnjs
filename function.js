// membuat function user defined
// function declaration 

function jumlahkanDuaAngka(a, b){
    let hasil;
    hasil = a + b;
    return hasil;
}

//function expression
const kaliDuaAngka = function(a, b){
    let hasil;
    hasil = a * b;
    return hasil;
}

alert(jumlahkanDuaAngka(3, 4)); // memanggil function
alert(kaliDuaAngka(3, 4)); // memanggil function

// ini manual menghitung volume kubus
// const sisiA = 8;
// const sisiB = 5;
// let volumeA;
// let volumeB;
// let totalVolume;

// volumeA = sisiA * sisiA * sisiA; // volume kubus sisiA
// volumeB = sisiB * sisiB * sisiB; // volume kubus sisiB

// totalVolume = jumlahkanDuaAngka(volumeA, volumeB); // memanggil function
// console.log("Total volume kubus adalah " + totalVolume);

// makanya kita buat function untuk menghitung volume kubus
function jumlahkanVolumeKubus(sisiKubusA, sisiKubusB){
    let volumeA;
    let volumeB;
    let total;

    volumeA = sisiKubusA * sisiKubusA * sisiKubusA; // volume kubus sisiA
    volumeB = sisiKubusB * sisiKubusB * sisiKubusB; // volume kubus sisiB

    total = jumlahkanDuaAngka(volumeA, volumeB); // memanggil function

    return total;
}

console.log(jumlahkanVolumeKubus(8, 5)); // memanggil function
console.log(jumlahkanVolumeKubus(3, 4)); // memanggil function
