//studi kasus pengelolaan unit angkot
//siapa sopir
//trayek jurusan
//kas/uang
//penumpang : penumpang naik, dan penumpang turun

// var angkot1 = {
//     sopir : "Rayhan",
//     trayek : "Bandung - Malang",
//     kas : 0,
//     penumpang :[]
// }

function Angkot(sopir, trayek, kas, penumpang){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length == 0){
            console.log("Angkot kosong");
            return false;
        }else{
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
        }
    }
}

var angkot1 = new Angkot("Rayhan", ["Bandung", "Malang"], 0, []);
var angkot2 = new Angkot("Ray", ["batu", "malang"], 0, []);

