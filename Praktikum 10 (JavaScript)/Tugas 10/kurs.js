function hitungkurs(){
    //Tangkap Inputan User
    let inputrupiah = document.getElementById("kurs1").value;

    //Kurs dari Rupiah ke Dollar
    let nilaitukar = 14650;

    //Hitung tukar kurs dollar
    kursDollar = (inputrupiah / nilaitukar).toFixed(2);
    
    //tangkap elemn hasil
    let hasilkurs = document.querySelector("#hasilkurs")

    //tampilkan hasil
    hasilkurs.innerHTML = kursDollar
}
