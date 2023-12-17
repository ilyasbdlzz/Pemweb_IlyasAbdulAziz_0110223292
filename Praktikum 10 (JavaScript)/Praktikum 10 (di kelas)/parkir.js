function hitungparkir(){
    //tangkap inputan user
    let jammasuk = document.querySelector("#jammasuk").value
    let jamkeluar = document.getElementById("jamkeluar").value

    //hitung durasi parkir
    let durasi = jamkeluar - jammasuk

    let biaya = 3000;
// looping durasi untuk menghitung biaya
    for (let i = 2; i < durasi ; i++){
        biaya += 1000
    }
// tangkap elemen hasil
    let hasildurasi = document.querySelector("#durasi")
    let totalbiaya = document.querySelector("#totalbiaya")

    //tampilkan hasil
    hasildurasi.innerHTML = durasi
    totalbiaya.innerHTML = biaya
}