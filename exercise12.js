// Tipe data ataupun struktur data adalah konsep penting 
// dalam mengkategorisasikan beberapa hal/jenis berbeda pada unit, 
// pengukuran, juga memungkinkan kita untuk beroperasi pada variabel.


// Array
// Array adalah kumpulan dari berbagai data. Kita bisa tulis dengan kurung kotak (square brackets) dan butir-butirnya dipisah dengan koma. Indeks array berbasis-nol yang berarti urutan awalnya merupakan [0], keduanya [1], dan seterusnya. Kita juga bisa memasukkan (insert), memperbarui/mengubah (update/change), atau bahkan meniadakan (undefine) nilai yang ada di dalam array. Spesifik di JS, kita bisa gunakan beberapa tipe data berbeda di dalam suatu array. Bahkan memasukkan array ke dalam array!

// var animals = ["Singa", "tiger", "Puma"]
// animals
// animals[0]
// animals[3] = "jaguar"
// animals[8] = "Leopard"
// animals[1] = undefined

var animalsArray = ["lion", "horse"];
animalsArray.push("duck");


// function balikString1(str) {
//     var string = '';
    
//     for (var index = str.length - 1; index >= 0; index--){
//         string += str[index];
//     }
//     return string
// }

// console.log(balikString1('kenapa'))