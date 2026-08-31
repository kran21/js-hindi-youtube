//Karan


function sayMyName(){
console.log("K");
console.log("A");
console.log("R");
console.log("A");
console.log("N");
}


sayMyName();

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

addTwoNumbers(2,3);
addTwoNumbers(5,"6");
addTwoNumbers(5,"a");


function addTwoNumbers1(num1,num2){
    // let result=num1+num2;
    // return result;

    return num1+num2;
}

const result=addTwoNumbers1(5,6);
console.log(result);

function loginUserMessage(username){
    return `Welcome ${username}!`;
}


console.log(loginUserMessage("Karan"));
