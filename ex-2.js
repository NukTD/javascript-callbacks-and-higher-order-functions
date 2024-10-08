//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let totalPassStudent=0;
  let classRoom ="";
  for(let i=0;i<array.length;i++){
    operation(70,array[i])=== true ? totalPassStudent++: totalPassStudent=totalPassStudent
  }
  
  //console.log(totalPassStudent);
  //console.log(totalPassStudent>=5 ? "ผ่านเกณฑ์ ✅" : "ไม่ผ่านเกณฑ์ ❌")
  totalPassStudent>=5 ? classRoom ="ผ่านเกณฑ์ ✅" : classRoom ="ไม่ผ่านเกณฑ์ ❌"
  return classRoom;

}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];


// ฟังก์ชั่นเช็ค เกณฑ์ผ่านรายบุคคล ใส่ เกณฑ์คะแนน และ คะแนนนักเรียน
function individualPassQualify(qualifyScore,studentScore){
  return studentScore>=qualifyScore ? true: false;
}



// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result=atLeastFive(studentScoresRoom1,individualPassQualify)
console.log("นักเรียนห้องที่ 1 "+scoreRoom1Result)

scoreRoom1Result=atLeastFive(studentScoresRoom2,individualPassQualify)
console.log("นักเรียนห้องที่ 2 "+scoreRoom1Result)

scoreRoom1Result=atLeastFive(studentScoresRoom3,individualPassQualify)
console.log("นักเรียนห้องที่ 3 "+scoreRoom1Result)


