//Deklarasi fungsi

// function Orang(nama, umur, jk){

//     this.nama = nama;
  
//     this.umur = umur;
  
//     this.jk = jk;
  
//     this.sebutkanId = function(){
  
//       return `Nama saya ${this.nama}
//         umur ${this.umur}
//         jenis kelamin ${this.jk}`;
  
//      }
  
//     this.referensiThis = function(){
  
//       return this;
  
//      }
// }
  
  
  //pembuatan instance baru dari fungsi Orang
  
//   var kaskuser = new Orang("kaskuser", 20, "laki-laki");
  
//   alert(kaskuser.sebutkanId());
  
  /* Output >>
  
  Nama saya kaskuser
  
  umur 20
  
  jenis kelamin laki-laki
  
  */
  
//   console.log(kaskuser.referensiThis());
  
  /* Output >>
  
   { nama: 'kaskuser',
  
    umur: 20,
  
    jk: 'laki-laki',
  
    sebutkanId: [Function],
  
    referensiThis: [Function] }
  
  */

// function toko(posisi, bidangUsaha, fungsi){
//     this.posisi =  posisi;
//     this.bidangUsaha = bidangUsaha;
//     this.fungsi = function(){
//         return `Posisi saya sebagai ${this.posisi}
//         bidang usaha yang dijalani ${this.bidangUsaha}
//         `
//     }
//     this.kegiatan = function(){
//         return this;
//     }
// }

// let programJalan = new toko("Kasir", "Toko Alat Listrik");
// console.log (programJalan.fungsi());
function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}
 
 
// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
        // this -> People
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}
 
 
const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();