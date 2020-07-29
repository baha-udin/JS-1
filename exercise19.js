//Rest parameter

function Buku(...rest){
    console.log(`Saya membeli buku tentang ${rest}`)
}
Buku('Javascript', 'PHP', 'React Native', 'Angular');

//arrow function
//dengan parameter
let functionSalam = (nama, salam) => console.log(`${salam}, ${nama}!`);

functionSalam("Teteh", "Assalamualaikum"); //parameter disimpan di function, terus dipanggil di console.log

//tanpa parameter
let makan = () => alert("Selamat makan siang")

makan()