console.log("Hello Javascript");
//Data types
let age = 23;
console.log(age); //Number
let name = "Saurabh";
console.log(name); //String
let isStudent = true;
console.log(isStudent);  //Boolean
let isloggedoff = false;
console.log(isloggedoff);  //Boolean
let x;
console.log(x); //unidentified
let data = null;
console.log(data); //Null
let numbers =[10,20,30,40,50];
console.log(numbers);
console.log(numbers[0]); //Array
let student = {
    name: "Saurabh",
    age: 23
};
console.log(student.name); ///Object
console.log(student.age);

//OPERATORS

let a = 20;
let b = 40;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); //Mode
console.log(a**b); //Exponantional

let count = 5;
count++;
console.log(count);
count--;
console.log(count);

//Example
let Name = "Saurabh";
let marks = 85;
console.log("Name:",Name);
console.log("Marks:",marks);
if(marks > 40){
    console.log("Pass");
}
else{
    console.log("Failed");
}