var orang = {
    id: "1as2316",
    nama: "andri",
    age: 21,
    favorites: [
        "coding",
        "reading",
        {
            sports: ["parkour", "hil climbing"]
        }
    ],
//Head
    alamat: {},
    speak: function() {
        console.log("Saya bukan suparman");

        alamat: {
            jalan: "pluto";
            zipCode: 50231
        }
    }
}

console.log(orang.nama);
console.log(orang.favorites);
console.log(orang.age);
console.log(orang.favorites[2].sports)
console.log(orang.alamat);