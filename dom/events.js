//inline html attribute (tidak disarankan)
const p3 = document.querySelector('.p3');
function ubahWarnap3(){
    p3.style.backgroundColor='green';
}

function ubahWarnap1(){
    p1.style.backgroundColor='green';
}

//element method
const p1 = document.querySelector('.p1');
p1.onclick = ubahWarnap1;


//addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const libaru = document.createElement('li');
    const teks = document.createTextNode('Item Baru');
    libaru.appendChild(teks);
    ul.appendChild(libaru);
});
