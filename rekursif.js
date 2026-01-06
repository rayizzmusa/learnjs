//loop
for (let i = 10; i >= 1; i--){
    console.log(i);
}

//rekursif yang sama dengan loop diatas
// function tampilAngka(n){
//     console.log(n);
//     return tampilAngka(n - 1);
// }

// tampilAngka(10); // ini tdak akan berhenti karena tidak ada kondisi berhenti
//base case : kondisi berhenti
function tampilAngka(n){
    if (n === 0){
        return;
    }
    console.log(n);
    return tampilAngka(n - 1);
}

tampilAngka(10);

//contoh lain rekursif adalah faktorial
function faktorial (n){
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

console.log(faktorial(5)); // 5 x 4 x 3 x 2 x 1 = 120