//
var nama = 'jaka';
var angkaPembilang = '10';
var angkaPenyebut = '2';
var hasilBagi = angkaPembilang/angkaPenyebut;

console.log('Halo ' + nama + ' ' + angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi);

//task2
var alas = 10;
var tinggi = 5; 
var luasSegitiga = alas * tinggi / 2;

console.log('Luas segitiga: ' + luasSegitiga);


//task3
var tahun = 2020;

if (tahun % 4 === 0) {
    if (tahun % 100 !== 0) {
        console.log( tahun + ' adalah tahun kabisat')
    } else {
        if (tahun % 400 === 0) {
            console.log(tahun + ' adalah tahun kabisat');
        } else {
            console.log(tahun + '  adalah bukan tahun kabisat')
        }
    }
} else {
    console.log(tahun + ' adallah bukan tahun kabisat');
}


