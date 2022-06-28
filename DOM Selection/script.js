// DOM Selection
// document.getElementById() 

const judul = document.getElementById('judul');

judul.style.color = 'orange';
judul.innerHTML = 'Yusuf Taqiyuddin';

// document.getElementsByTagName()
const p = document.getElementsByTagName('p');

for(let element of p){
    element.style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.backgroundColor = 'gray';

// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];

p1.innerHTML = "Ini dirubah melalui JavaScript";
p1.style.color = 'green';

// document.querySelector()
const p4 = document.querySelector('#b p');

p4.style.fontSize = '30px';
p4.style.color = '#fff';
p4.innerHTML = 'Paragraf diubah dari JS';

const li2 = document.querySelector('section#b ul li:nth-child(2)');

li2.style.backgroundColor = 'darkblue';
li2.style.color = '#fff';

// document.querySelectorAll()
const pall = document.querySelectorAll('p');
p[2].style.backgroundColor = 'pink';

// mengubah node root
const sectionB = document.getElementById('b');
const pp4 = sectionB.querySelector('p');
pp4.style.backgroundColor = 'tomato';