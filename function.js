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