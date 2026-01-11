//object literal
var mhs1 = {
    nama : "Rayhan",
    nim : "202110370311028",
    email : "rayhan@exc.com",
    jurusan : "IT"
    //dll
}// mhs2 tinggal ganti isi propertinya

//function declaration
function buatObjectMhs(nama, nim, email, jurusan){
    var mhs ={};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs2 = buatObjectMhs("syifa", "202108", "syifa@exc.com", "B arab");

//constructor
function Mahasiswa(nama, nim, email, jurusan){
    //yg membedakan dengan function declaration adalah penggunaan this yang sudah otomatis
    //var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    //return this;
}


var mhs3 = new Mahasiswa("erik", "12129", "erik@sd.com", "IT");


//this
//pada function declaration
function halo(){
    console.log(this);
    console.log("halo");
}
this.halo(); //this disini mengembalikan object global


//pada object literal
var obj={};
obj.halo = function(){
    console.log(this);
    console.log("halo");
}
obj.halo(); //this disini mengembalikan object yang bersangkutan

//pada constuctor
function Halo(){
    console.log(this);
    console.log("halo");
}
new Halo(); //this disni mengembalikan object yang baru dibuat




