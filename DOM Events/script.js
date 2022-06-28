function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightgreen';
}

function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightgreen';
}

// mengubah background color class paragraf 3
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// function untuk menambah list baru jika p4 di click
const ul = document.querySelector("section#b ul");
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function(){
    const liBaru = document.createElement('li');
    const txtLiBaru = document.createTextNode('Item Baru');

    liBaru.appendChild(txtLiBaru);
    ul.appendChild(liBaru); 
});

// merubah background color li1
const li1 = ul.querySelector('li:nth-child(1)');

li1.addEventListener("mouseenter", function(){
    li1.style.backgroundColor = 'lightgreen';
});

li1.addEventListener("mouseleave", function(){
    li1.style.backgroundColor = "white";
})
