//2 parametere :
//namaPenumpang, array Penumpang

//rules:
//hanya 15 penumpang
//angkot kosong, duduk di kursi 1
//duduk berurutan
//jika ada kursi kosong krna turun, penumpang naik berikutnya duduk di kursi kosong dulu
//asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
//nama penumpang uniq

let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            }else if (penumpang[i] == namaPenumpang){
                console.log("Penumpang " + namaPenumpang + " sudah ada");
                return penumpang;
            }else if (i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log("Belum ada penumpang");
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1){
                console.log(namaPenumpang + " Tidak ada");
                return penumpang;
            }
        }
    }
}