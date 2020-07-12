//recursion
function numberSum(num) {
    if (num == 1) {
        return 1;
    }
    else {
        return num + numberSum(num - 1);
    }
}

console.log(numberSum(4));

/*  fungsi yang berjalan numberSum(5), kemudian 
mengembalikan nila 5 + numberSum(4) dari num(5)-1
yang mengembalikan nilai 4 + numberSum(3) dan seterusnya
hingga mengembalikan nilai 1 dan keluar dari rekursif, sehingga
pada akhirnya akan menghasilkan nilai
5 + 4 + 3 + 2 + 1
*/

/*fungsi diatas akan mengembalikan nilai berupa hasil
5 + 4 + 3 + 2 + 1 gimana bisa cara kerja fungsi diatas?
hanya pake satu peremeter yaitu angka 5
fungsi numberSum akan memanggil kondisi.
Jika angka yg diinput 1 maka fungsi akan selesai dan mengembalikan angka 1

namun jika lebih dari satu, fungsi akan mengembalikan nilai berupa value dari variabel num
dan menambahkanya dengan numberSum(num - 1)
*/
