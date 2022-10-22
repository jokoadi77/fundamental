// points : 85 - 100 : A
// points : 75 - 84 : B
// points : 60 - 74 : C
// points : 0 - 59 : D
// points : null : F

var points = 88
var grade
// points : 85 - 100 : A
if(points >= 85 && points <= 100) {
    grade = "A"
// points : 75 - 84 : B
} else if (points >= 75 && points <= 84) {
    grade = "B"
// points : 60 - 74 : C
} else if(points >= 60 && points <= 74) {
    grade = "C"
// points : 0 - 59 : D
} else if(points >= 0 && points <= 59) {
    grade = "D"
// points : null : F
} else {
    grade = "F"
}

console.log(`Nilai ujian : ${points}\nGrade : ${grade}`);