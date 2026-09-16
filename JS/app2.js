let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req == "quit"){
        console.log("Quiting app");
        break;
    }
    if(req == "list"){
        console.log("-------------");
        for(let i = 0; i < todo.length; i++){
            console.log(task);
        }
        console.log("---------");
    } else if(req == "add"){
        let task = prompt("Please enter tasks for a day");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task delete");
    } else {
         console.log("Wrong request");
    }
     req = prompt("Please enter your request");
}