const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(event){

    // cek apakah yang di click adalah thumb
    if(event.target.className == 'thumb'){

        jumbo.src = event.target.src; // mengganti src class jumbo
        jumbo.classList.add('fade'); // menambah class fade

        setTimeout(function(){
            jumbo.classList.remove('fade'); // menghapus class fade
        }, 500)

        // untuk membuat semua class thumb menjadi thumb
        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            thumb.classList = 'thumb'; // membuat semua class menjadi thumb
        });

        // menambah class active pada thumb yang dipilih
        event.target.classList.add('active');
        
    }
})