                                         // TASK 1 - 17/04/2026

//  Task 1: Variable Update
var num =50
num =100
console.log(num) // ans: 100


//  Task 2: Let Variable Math
let marks = 80
marks = marks +10
console.log(marks) //ans: 90


//  Task 3: Const Value
const price = 500
var finalPrice = price + 100
console.log(finalPrice)  // ans: 600


//  Task 4: Printing Statements
console.log("Welcome Team") // ans:Welcome Team
console.log(2026) // ans: 2026
console.log(true) // ans: true


//  Task 5: Datatype Check
console.log(typeof "JavaScript") // ans:string
console.log(typeof 250)  // ans: number
console.log(typeof false) // ans: boolean


//  Task 6: Array Task
let fruits = ["Apple","orange","Banana","Grapes","Mango"]

console.log(fruits) // ans: ["Apple","orange","Banana","Grapes","Mango"]
console.log(fruits[0]) // ans: Apple
console.log(fruits[fruits.length-1]) // ans: Mango


//  Task 7: Object Task
 student = {
 name: "Naveen",
  age: 20,
  course: "MERN"
 }
 console.log(student.name) // ans: Naveen
 console.log(student.age) // ans: 20
 console.log(student.course) // ans: MERN


//  Task 8: Arithmetic Operators
console.log(20 +10) // ans: 30
console.log(50 - 25)// ans: 25
console.log(5 * 5) // ans: 25
console.log(100 / 4) // ans: 25
console.log(20 % 3) // ans: 2


//  Task 9: Increment / Decrement
let x = 5
x++
console.log(x) // ans: 6
let y = 10
y--
console.log(y) // ans: 9


//  Task 10: Comparison Operators
console.log(10 > 5)  // ans: true
console.log(5 < 2)   // ans: false
console.log(20 == "20")  // ans: true
console.log(15 === "15")   // ans: false
console.log(10 != 8)  // ans: true


//  Task 11: Logical Operators
console.log(5 > 2 && 10 > 3)  // ans: true
console.log(7 < 5 || 8 > 2)   // ans: true
console.log(!(10 > 5))   // ans: false


//  Task 12: Ternary Operator
let age = 18;
console.log(age >= 18 ? "Eligible" : "Not Eligible");  // ans:Eligible


                                        //TASK 2 - 22/04/2026


let students = [
    { id: 1, name: "Naveen", mark: 85, course: "MERN" },
    { id: 2, name: "John", mark: 45, course: "Python" },
    { id: 3, name: "Priya", mark: 72, course: "Java" },
    { id: 4, name: "Arun", mark: 95, course: "React" }
];

 // Task 1: Print All Students

 for(let i=0; i < students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    )
 }
 //output: 
 //1 'Naveen' 85 'MERN'
 // 2 'John' 45 'Python'
 // 3 'Priya' 72 'Java'
 // 4 'Arun' 95 'React'

// Task 2: Pass / Fail

for(let i=0; i<students.length; i++){

    if(students[i].mark >=50){
        console.log(students[i].name + " - PASS")
    }
    else{
        console.log(students[i].name +" - FAIL")
    }
}
// output:
// Naveen - PASS
//  John - FAIL
//  Priya - PASS
//  Arun - PASS

// Task 3: Grade System

for(let i =0; i<students.length; i++){
    if(students[i].mark >= 90){
       console.log(students[i].name + " - Grade A")
    }
    else if(students[i].mark >= 75){
        console.log(students[i].name + " - Grade B")
    }
    else if(students[i].mark >= 50){
    console.log(students[i].name + " - Grade C")
    }
    else{
        console.log(students[i].name + " - Fail")
    }
}
//output:
// Naveen - Grade B
// John - Fail
// Priya - Grade C
// Arun - Grade A

// Task 4 - Topper Student 

let topper = students[0]
for(let i=0; i<students.length;i++){
if(students[i].mark > topper.mark)
    topper = students[i]
}
console.log("Topper is " + topper.name +" - " + topper.mark)
//output:
//Topper is Arun - 95


//Task 5: Course Search

for(let i=0; i<students.length; i++){
    if(students[i].course === "React"){
      console.log(
            students[i].id,
            students[i].name,
            students[i].mark,
            students[i].course
        )
    }

}
//output:
//4 'Arun' 95 'React'

// Task 6: Add New Student

students.push(
    {
        id: 5,
        name: "Rajarajan",
        mark: 89,
        course: "Java"
}
)
for(let i=0; i < students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    )
}

//output
// 1 'Naveen' 85 'MERN'
// 2 'John' 45 'Python'
// 3 'Priya' 72 'Java'
// 4 'Arun' 95 'React'
// 5 'Rajarajan' 89 'Java'


// Task 7: Attendance System

let status = "present"

switch(status){
    case"present":console.log("Welcome")
    break

    case"absent":console.log("Mark absent")
    break

    case"leave":console.log("Approved Leave")
    break

    default: console.log("Invalid status")
}
// output:
// Welcome

// Task 8: Login System

let username = "admin"
let password = "1234"

if(username === "admin" && password === "1234"){
       console.log("Login Success")
}
else{
    console.log("Invalid User")
}
// Output:
// Login Success



