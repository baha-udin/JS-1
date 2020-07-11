var nama = "ken";
var peran = "Gatotkaca";

if (peran === "") {
    console.log("Halo " + nama + "," + " pilih peranmu untuk memulai game!") 
} else {
    if (peran === "Gatotkaca") {
        console.log("Selamat datang di Dunia Programmer, " + name);
        console.log("Halo " + peran +", kamu dapat menyerang dengan senjatamu!");
    } else {
        if (peran === "Tabib") {
            console.log("Selamat datang di Dunia Programmer, " + nama);
            console.log(
                "Halo" + peran + " " + nama + "," + " kamu akan membantu temanmu yang terluka"
            );
        } else {
            if (peran === "penyihir") {
                console.log("Selamat datang di Dunia Programmer, " + name);
                console.log(
                    "Halo " + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu')
            }
        }
    }
}