//method selection

//document.getElementById() mengembalikan element
const judul = document.getElementById('judul');

//misal mengubah warna judul
judul.style.color = 'red'; //ini akan menambahkan atribut/element inline css color pada html
judul.style.backgroundColor = "yellow";
//misal mengubah tulisan
judul.innerHTML = "Hello Cok";

//document.getElementsByTagName() mengembalikan html collection
const par = document.getElementsByTagName('p');

//misal memberi warna, harus disertai index karena ini seperti array
// par[2].style.backgroundColor = 'gray';
for(let i = 0; i < par.length; i++){
    par[i].style.backgroundColor = "gray";
}
//walaupun tag nya cuma 1 tetap bentuknya html collection

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px'; //agar mudah tanpa perlu index

//document.getElementsByClassName() mengembalikan html collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "diubah di js";