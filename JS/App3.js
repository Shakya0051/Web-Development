const post = {
    username: "@Saurabh1234",
    content: "This is my post",
    likes: 150,
    Repost: 5,
    Tags: ["@Sumit", "bprince"]
};
 function hello() {
    console.log("hello");
 }

 hello();
const post2 = {
    username: "@Saurabh1234",
    content: "This is my post",
    likes: 150,
    Repost: 5,
    Tags: ["@Sumit", "bprince"]
};
function print(){
    for(let i = 0; i <= 5; i++){
        console.log(i);
    }
}
print();

function isAdult(){
    let age = 13;
    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("Not adult");
    }   
}

isAdult();

function Rolldice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

Rolldice();
Rolldice();
Rolldice();
Rolldice();
Rolldice();
Rolldice();

function printName(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printName("Saurabh",23);
printName("Himanshu",22);
printName("Sharad",21);
printName("Sumit",23);
printName(29);

function sum(a, b){
    return a + b;
}
console.log(sum(6,54)); 

function avg(a,b,c){
    console.log((a + b + c)/ 3);
}

avg(36,43,59);

function printTable(n){
    for(let i = n; i <= n*10; i+=n){
        console.log(i);
    }
}

printTable(5);

function Sum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
