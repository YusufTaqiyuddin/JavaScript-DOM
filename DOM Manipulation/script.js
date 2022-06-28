// DOM Manipulation

// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = "<i>Yusuf Taqiyuddin<i>";

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Hello World';

// element.style.<propertiesCSS>
const p4 = document.getElementsByClassName('p4');
p4[0].style.backgroundColor = 'lightgreen';

// element.setAttribute()
const ig = document.querySelector('section#b a');
ig.style.color = 'green';
ig.setAttribute('name', 'Yusuf');


// element.getAttribute & removeAttribute
const p4get = document.getElementsByClassName("p4")[0];
p4get.getAttribute("class"); // p4
p4get.removeAttribute("style"); // menghapus style pada p4

// element.classList
const p5 = document.querySelector(".p5");
p5.classList.add('label'); // class pada p5 menjadi 'p5 label'
