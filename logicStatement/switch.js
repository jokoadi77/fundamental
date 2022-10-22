// // points : 85 - 100 : A
// // points : 75 - 84 : B
// // points : 60 - 74 : C
// // points : 0 - 59 : D
// // points : null : F

// var points = 30
// var grade

// switch (true) {
//     // points : 85 - 100 : A
//     case points >= 85 && points <= 100:
//         grade = "A"
//         console.log(`Nilai ujian : ${points}\nGrade : ${grade}`)
//         break;
//     // points : 75 - 84 : B
//     case points >= 75 && points <= 84:
//         grade = "B"
//         console.log(`Nilai ujian : ${points}\nGrade : ${grade}`)
//         break;
//     // points : 60 - 74 : C
//     case points >= 60 && points <= 74 :
//         grade = "C"
//         console.log(`Nilai ujian : ${points}\nGrade : ${grade}`)
//         break;
//     // points : 0 - 59 : D
//     case points >= 0 && points <= 59 :
//         grade = "D"
//         console.log(`Nilai ujian : ${points}\nGrade : ${grade}`)
//         break;
//     // points : null : F
//     default:
//         grade = "F"
//         console.log(`Nilai ujian : ${points}\nGrade : ${grade}`)
//         break;
// }

///////////
//weather//
///////////

// var input = +prompt("Masukkan bulan")

// if (input <= 3 && input >= 1) {

//     alert("Sekarang sedang musim dingin ❄️")
    
// } else if (input >= 4 && input <= 6) {

//     alert("Sekarang sedang musim semi 🍃")
    
// } else if (input >= 7 && input <= 9) {
//     alert("Sekarang sedang musim panas 🌞")

// } else if (input >= 10 && input <= 12) {

//     alert("Sekarang sedang musim gugur 🍂")

// } else {

//     alert("Bulan tidak tersedia ❌")
// }


////////////////
//guest number//
///////////////
// alert("Game tebak angka 🎮🕹️🎯")
// const user = +prompt("Masukkan angka 1 - 5")
// const random = Math.ceil(Math.random() * 5 ) 


// if (user < 1 || user > 5) {

//     alert("input salah ❌")

// }
// else if( user === random) {

//     alert(`Tebakan anda : ${user}\nAngka keluar : ${random}\n\nYeeey tebakan anda benar 🤑`)
    
// } else {
    
//     alert(`Tebakan anda : ${user}\nAngka keluar : ${random}\n\nYah tebakan anda salah nih😢`)
// }



///////////
//contion//
///////////

// let a = "5"
// let b = "20"

// if (a.length < b.length) {

//     console.log(a + b + a);
    
// } else {
    
//     console.log( b + a + b );
// }