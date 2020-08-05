function Aplikasi(nama, jenisAplikasi, bidangIndustri){
    this.nama = nama;
    this.jenisAplikasi = jenisAplikasi;
    this.bidangIndustri = bidangIndustri;
}

Aplikasi.prototype.nambahinFitur = function(){
    setTimeout(() => {
        alert(`Hallo saya membuat aplikasi ${this.nama} jenis aplikasi ini ${this.jenisAplikasi}`)
        alert(`Bidang industri yang disasar ${this.bidangIndustri}`)
    }, 300)
}

let penjelasan = new Aplikasi("Cosovvo", "Pos System", "Small & Medium Entreprise")
penjelasan.nambahinFitur();

let sayHello = (nama = "Saolin", greet = "cripto") => alert(`${nama} ${greet}`)

sayHello()

function parameter(nama = "kai", panggilan = "Kuda nil"){
    console.log(`nama asli dia ${nama} biasa dipanggil ${panggilan}`)
}
parameter()

//contoh callback HttpRequest Asynchronous
function requestAjax(callback){

    // inisialisasi library XML Http Request
    var xhr = new XMLHttpRequest();
  
    // set target request
    xhr.open('GET','https://jsonplaceholder.typicode.com/users/1')
  
    // terapkan callback
    xhr.onload = function(){
      if(xhr.status === 200){
        callback(xhr.responseText)
      }else{
        //handling error
        callback('Failed')
      }
    }
  
    // mulai request
    xhr.send()
    
  }
  
  function showResult(data){
    if (data != 'Failed'){
      //tampilkan Data
      data=JSON.parse(data)
      console.log(data)
    }
  }
  
  requestAjax(showResult)

//fetch: API yg diperkenalkan di es6 u/ request ajax
fetch('https://jsonplaceholder.typicode.com/users/3')
  
  //mengambil object Response Json
  .then(function(response) {
      //handle HTTP response
    return response.json();
  })

  //kemudian Json Response dibaca
  .then(function(user) {
  console.log(user)
})