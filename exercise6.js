//menggabungkan for dan if-else dalam satu task
for (var deret = 1; deret <= 100; deret++) { //untuk var deret yg kurang dari =100, lakukan perulangan menurun
    if (deret % 2 === 0) { // jika deret habis dibagi 2 === 0
        console.log(deret + ' genep'); // maka munculkan angka deretnya + genap
    } else {
        console.log(deret + ' ganjil'); //jika tidak genap, maka munculkan ganjil
    }
}

console.log('PERULANGAN 1'); //munculkan perulangan 1
for (var deret = 1; deret <= 100; deret += 2) { //untuk var deret = 1, yg kuran dari 100, 
    if (deret % 3 === 0) {  //jika deret habis dibagi 3 sampe 0
        console.log(deret + ' kelipatan 3'); //munculkan deret + kelipatan 3
    } else {
        console.log(deret); //jika tidak ada kosong
    }
}

console.log('PERULANGAN 2'); //munculkan perulangan 2
for (var deret = 1; deret <= 100; deret += 5) { //var deret menginisiasi 1, dengan kondisi angka kurangdari =1000, lakukan iterasi =+ 5
    if (deret % 6 === 0) { //jika deret 100 habis dibagi 6 sampe angka 0
        console.log(deret + ' kelipatan 6'); //munculkan angka deret + kelipatan 6 mulai dari 0
    } else {
        console.log(deret);
    }
}

console.log('PERULANGAN 3');
for (var deret = 1; deret <= 100; deret += 9) {
    if (deret % 10 === 0) {
        console.log(deret + ' kelipatan 10');
    } else {
        console.log(deret);
    }
}