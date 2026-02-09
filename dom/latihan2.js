function getPilihanKomputer(){
    const comp = Math.random();

        if( comp < 0.34 ) return 'gajah';
        if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
}

function getHasil(comp, player){
        if( player == comp ) {
            return 'SERI!';
        } else if( player == 'gajah' ) {
            return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
        } else if( player == 'orang' ) {
            return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
        } else if( player == 'semut' ) {
            return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
        } else {
            return 'memasukkan pilihan yang salah!';
        }
}

const playerGajah = document.querySelector('.gajah');
playerGajah.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = playerGajah.className;

    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
    const gambarKomputer = document.querySelector('.img-komputer');
    gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
});

const playerOrang = document.querySelector('.orang');
playerOrang.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = playerOrang.className;

    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
    const gambarKomputer = document.querySelector('.img-komputer');
    gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
});

const playerSemut = document.querySelector('.semut');
playerSemut.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = playerSemut.className;

    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
    const gambarKomputer = document.querySelector('.img-komputer');
    gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
});