//function dengan parameter
var printPrint = function() {
    console.log("print")
}
printPrint()

//function tanpa parameter
var home = function(text) {
    console.log("meja" + text + "kursi")
}
home("lemari")

//function dengan parameter
let restoran = function(text) {
    console.log("koki" + text + "pengunjung")
}
restoran("pelayan")

//cheatsheet buat function
function kegiatan(text) {
    console.log("makan" + text + "Tidur")
}

kegiatan("ngoding")

//biasanya function mengembalikan nilai (return value) yg bisa
//kita ambil berikutnya
//jika kita ingin mendapatkan nilai yg dikembalikan, maka 
//kita assign ke sebuah variabel DILUAR FUNCTION

let timesTwo =  function(x) {
    return x * 2;
}; 
var result = timesTwo(8)
console.log(result)

let tanggal = function(data) {
    return data - 10;
}
var hasil = tanggal(12)
console.log(hasil)