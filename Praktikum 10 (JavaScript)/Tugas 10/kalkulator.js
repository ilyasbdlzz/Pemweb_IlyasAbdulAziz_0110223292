function kalkulator(){
    //tangkap input dari user
    let input1 = document.getElementById("bil1").value;
    let input2 = document.getElementById("bil2").value;

    //penjumlahan
    jumlah = (parseFloat(input1) + parseFloat(input2)).toFixed(2);

    //tangkap elemen hasil
    let hasilJumlah = document.getElementById("hasilJumlah")

    //tampilkan hasil
    hasilJumlah.innerHTML = jumlah
}