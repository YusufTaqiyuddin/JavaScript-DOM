// menentukan pilihan computer dengan random
function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp <= 0.67) return "orang";
  return "semut";
}

// membuat aturan suwit
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

// membuat tampilan pilihan computer lebih interaktif
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();

    // memutar gambar dari nilai aray gambar
    setInterval(function(){
        // menghentikan putaran setelah sudah 1 detik dimulai
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100) 
}

// mendapatkan pilihan player berdasarkan img click
const getPilihanPlayer = document.querySelectorAll('li img');
getPilihanPlayer.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        // menampilkan pilihan computer setelah animasi putar gambar
        setTimeout(function(){
          // mengubah gambar pilihan komputer
          const imgComputer = document.querySelector(".img-komputer");
          imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

          // menampilkan hasil suwit
          const info = document.querySelector(".info");
          info.innerHTML = hasil;
        }, 1000);
    })
})

