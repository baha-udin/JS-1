/* Regex atau Reguler Expression bahasa mudahnya adalah
mencari text string atau interger dalam variabel.
kenapa kita nggak cari saja dengan substr(), indexOf(), slice()
dalam case tertentu seperti pencarianya rumit dan ada pola
yang ditentukan akan lebih mudah kalau kita menggunakan Regex
contoh:
*/
// let paragraf = 'far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
// console.log(paragraf.match(/far/g));


//hasilnya ada 3 kata 'far' dan langsung masuk ke dalam array
/* 
. // - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
* // - Mencocokan 0 atau lebih dari karakter terdahulu.
+ // - Mencocokan 1 atau lebih dari karakter terdahulu.
? // - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
\d // - Mencocokan digit apapun
\w // - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
$ // - Mencocokan ujung dari sebuah string.
^ // - Mencocokan awal dari sebuah string.
[^a-z] // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowercase.
*/

var regexCont1 = new RegExp("baha");
console.log(regexCont1);