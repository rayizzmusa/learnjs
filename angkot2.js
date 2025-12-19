const jmlAngkot = 10;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6){
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    } else if (noAngkot === 7){
        console.log("Angkot no. " + noAngkot + " tidak beroprasi.");
    }else if (noAngkot === 8){
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot no. " + noAngkot + " tidak beroperasi.");
    }
}