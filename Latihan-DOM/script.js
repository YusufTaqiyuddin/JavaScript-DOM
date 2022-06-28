// tombol ubah background color body menjadi lightgreen
const button = document.getElementById('btn-ubahWarna');
button.addEventListener("click", function(){
    // document.body.setAttribute('class', 'light-green');
    document.body.classList.toggle('light-green');
});



// membuat tombol sebelah tombol btn-ubahWarna
const btnRandomWarna = document.createElement('button');
const txtButton = document.createTextNode("Acak Warna");
btnRandomWarna.appendChild(txtButton);
btnRandomWarna.setAttribute('type', 'button');
button.after(btnRandomWarna);

// membuat fungsi untuk mengubah background color body secara random
btnRandomWarna.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// mengubah warna berdasarkan slider
const merah = document.querySelector('input[name=sliderMerah]');
const hijau = document.querySelector("input[name=sliderHijau]");
const biru = document.querySelector("input[name=sliderBiru]");

merah.addEventListener("input", function () {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

hijau.addEventListener("input", function(){
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

biru.addEventListener("input", function () {
  const r = merah.value;
  const g = hijau.value;
  const b = biru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


// mengubah background color body setiap mouse digerakan
document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    const posisiX = Math.round((event.clientX / window.innerWidth) * 255);
    const posisiY = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = `rgb(${posisiX}, ${posisiY}, 100)`;
})