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