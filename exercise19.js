//Rest parameter

// function Buku(...rest){
//     console.log(`Saya membeli buku tentang ${rest}`)
// }
// Buku('Javascript', 'PHP', 'React Native', 'Angular');

// function alatNgoding(...part){
//     alert(`Saya menyiapkan ${part}`)
// }
// alatNgoding('laptop', 'Koneksi wifi', 'teh', 'sans')


//arrow function
//dengan parameter
// let functionSalam = (nama, salam) => console.log(`${salam}, ${nama}!`);

// functionSalam("Teteh", "Assalamualaikum"); //parameter disimpan di function, terus dipanggil di console.log

//tanpa parameter
// let makan = () => alert("Selamat makan siang")

// makan()

// let arrowObject = function setName(id, name){
//     return {
//         id: id,
//         name: name
//     }
// }
// console.log(arrowObject(1, "Baha"));

// let arrowObject = (id, name) => ({id: id, name: name});
// console.log(arrowObject (1, "Bejo Selalu"));

// let buatObject = (id, email, password) => ({id: id, email: email, password: password});
// console.log(buatObject(14, "Mbaha713m@gmail.com", "hanya1234"))

// let restoran = (...alat) => ({alat: alat})
// console.log(restoran("piring", "sendok", "gelas"));

// let modul = function modul(id, name, password){
//     return {
//         id: 14,
//         name: "angga",
//         password: "bejoselalu"
//     }
// }
// console.log(modul()); 

// let akal = (id, name) => ({id: id, name: name})

// console.log(akal(132, "kerja keras"));

// let keranPring = (id, name) => ({id: 143, name: "jangan dulu"});
// console.log(keranPring());

const makanan = (key, value) => ({key: "piring", value: "Mie ayam"});
console.log(makanan());