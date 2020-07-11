//contoh input
var nama = 'chef amsyong';
var pekerjaan = 'Koki';
var pengunjung = 'Diana';

if (pekerjaan === '') {
    document.write('halo' + name + ',' + ' Selamat bekerja dengan senang')
} else {
    if (pekerjaan === 'pelayan') {
        document.write('Selamat datang ' + nama + ', silahkan siapkan peralatan dapur anda')
        document.write(
            ' Kamu akan melayani pelanggan dengan sepenuh hati'
        )
    } else {
        if (pekerjaan === 'Bartender') {
            document.write('Selamat bekerja, ' + nama);
            document.write(
                'Halo ' + nama + ' kamu akan membantu ' + pekerjaan + 'melayani pesanan pelanggan'
            )
        } else {
            if (pengunjung === 'Diana') {
                document.write('Selamat datang di restoran kami, ')
                document.write('Semoga anda menikmati hidangan dari ' + nama)
            }
        }
    } 
}
