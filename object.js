//anatomi object
var orang = { //object orang
    nama: "rayhan",
    umur: 22,
    pekerjaan: "staf", //3 variable dlm object ini properti
    sapa : function(){
        return "hi saya " + this.nama + this.umur + this.pekerjaan;
    } // function didalam object method
};

//memanggilnya orang.sapa()
//bisa juga cukup deklarasikan objectnya, kemudian isi propertinya di tapi tidak tersimpan di memori
//contoh lain

var mahasiswa ={
    nama : "Syifa",
    umur : 23,
    ip : [3.00, 3.55, 3.23],
    alamat : {
        jalan : "jl abs",
        kota : "Pesisir barat",
        provinsi : "Lampung"
    },//object dalam object
    ipk : function(){
        let total = 0;
        var ips = this.ip;
        for(i = 0; i < ips.length; i++){
            total += ips[i];
        }

        return total/ips.length;
    }

};
//manggilnya bisa mahasiswa.nama / mahasiswa['nama']