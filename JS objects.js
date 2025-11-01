let students = [
{name: "A", age: 10, gender: "male", grades: {bangla: 80, english: 70, math: 50} },
{name: "B", age: 12, gender: "female", grades: {bangla: 50, english: 80, math: 70} },
{name: "C", age: 17, gender: "female", grades: {bangla: 88, english: 86, math: 77} },
{name: "D", age: 14, gender: "male", grades: {bangla: 65, english: 98, math: 40} },

];

let GradeOfStudent =(student)=> {
    let grades = Object.values(student.grades);
    let sum=grades.reduce((sum,grade)=>sum+grade,0);
let averageOfGrades=(sum/grades.length)
    return averageOfGrades;
}
console.log(GradeOfStudent(students[2]));
console.log(GradeOfStudent(students[3]));