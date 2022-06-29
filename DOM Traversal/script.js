// Event handling
/*  const close = document.querySelector('.close');
    const card = document.querySelector('.card');

    close.addEventListener('click', function(){
     card.style.display = 'none';
    });*/

// DOM Tranversal
// cara 1 untuk menghilankan card
// const close = document.querySelectorAll('.close');

/*for(let pil of close){
    pil.addEventListener('click', function(event){
        event.target.parentElement.style.display = 'none';
    });
}*/

// cara 2 untuk menghilangkan card
// close.forEach(function(el){
//     el.addEventListener('click', function(event){
//         event.target.parentElement.style.display = 'none';
//         // agar aksi default tidak dijalankan 
//         event.preventDefault();
//         event.stopPropagation();
//     })
// });

// Event Bubbling
const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
    card.addEventListener('click', function(event){
        alert('ok');
    })
})

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.previousElementSibling);


// cara 3 untuk menghilangkan card
const container = document.querySelector('.container');

container.addEventListener('click', function(event){
    if(event.target.className == 'close'){
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    }
})