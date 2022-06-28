// DOM Manipulation 2
// buat element baru
const pBaru = document.createElement('p');
const txtBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(txtBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// buat element baru
const liBaru = document.createElement('li');
const txtLiBaru = document.createTextNode('Item Baru');
// simpan tulisan ke dalam list
liBaru.appendChild(txtLiBaru);

//simpan liBaru sebelum li 2
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// menghapus child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// mengganti paragraf 4
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const txtH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(txtH2Baru);
sectionB.replaceChild(h2Baru, p4); // node baru (h2Baru) replace node lama (p4)

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';