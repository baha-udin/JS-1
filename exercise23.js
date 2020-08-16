//slice: ambil array
// const heran = ["kucing", "kuda", "kambing", "kelelawar", "kowe"];

//buat var baru, kemudian declare array
// let heranDeh = heran.slice(0, 3); //0: array keberapa dimulai, 3: dimana akhirnya

// console.log(heranDeh);


//splice: ubah konten array dan mengganti
const heran = ["kucing", "kuda", "kambing", "kelelawar", "kowe"];

heran.splice(1, 1, "buaya")

console.log(heran);
