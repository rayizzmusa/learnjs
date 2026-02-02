//element.innerHTML
// const judul=document.getElementById('judul');
// judul.innerHTML="<em>Rayhan</em>";

// const sectionA=document.querySelector('section#a');
// sectionA.innerHTML="Hello World";

//style.<property css>
// const judul2=document.querySelector('#judul');
// judul2.style.color='blue';
// judul2.style.backgroundColor='lightblue';

//element.setAttribute()
// const judul3 = document.getElementsByTagName("h1")[0];
// judul3.setAttribute('name', 'sandika');
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('href'); //mendapatkan atribut href
// a.removeAttribute('href'); //menghapus atribut href

//element.classList
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label'); //jika ada dihapus, jika tidak ada ditambah
// // document.body.style.backgroundColor = 'lightblue';
// document.body.classList.toggle('biru-muda');
// document.body.classList.toggle('biru-muda');
// p2.classList.add('label', 'tebal'); //menambah lebih dari 1 class sekaligus
// p2.classList.item(2); //mengambil class pada index ke 2(tebal)
// p2.classList.contains('tebal'); //mengembalikan nilai true/false apakah ada class tebal atau tidak
// p2.classList.replace('tebal', 'miring'); //mengganti class tebal menjadi miring

//element.createElement()
const paragrafBaru = document.createElement('p');
const teksParagrafBaru = document.createTextNode('paragraf baru');
//menggabungkan teks ke dalam paragraf baru
paragrafBaru.appendChild(teksParagrafBaru);
//menempatkan paragraf baru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(paragrafBaru);

//element.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru,li2);

//removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const hBaru = document.createElement('h2');
const teksHBaru = document.createTextNode('Judul Baru!');
hBaru.appendChild(teksHBaru);
sectionB.replaceChild(hBaru, p4);






