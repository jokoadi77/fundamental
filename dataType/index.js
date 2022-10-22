/////////////////
///////NUMBER////
/////////////////

// XYZ = W

// var x = 4, y = 3, z = 2

// var w = Math.pow((x + y * z) / (x * y), z)

// console.log(w);

///////////
//prompt///
///////////

// var input = +prompt("Silahkan masukkan angka 1 - 10")

// var result = Math.pow(input, 2)

// alert(`Kuadrat dari ${input} = ${result}`)


//////////
//485/////
//////////


// 485 hari = 1 tahun, 4 bulan, 0 minggu, 5 hari
// 485 / 360 = 1 tahun (360 hari) sisa 125 hari
// 125 / 30 = 4 bulan (120 hari) sisa 5 hari
// 5 / 7 = 0 minggu (0 minggu) sisa 5 hari

// var days = 485
// var years = Math.floor(days / 360)
// var daysLeft = days % 360
// var months = Math.floor(daysLeft / 30)
// daysLeft =  daysLeft % 30 
// var weeks = Math.floor(daysLeft / 7)
// daysLeft= daysLeft % 7 

// console.log(`${days} hari = ${years} tahun, ${months} bulan, ${weeks} minggu, ${daysLeft} hari`);

