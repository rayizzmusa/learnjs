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