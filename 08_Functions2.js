const user={
    name:"karan",
    price:199
}

function handleObject(anyObject){
    console.log(`the name is ${anyObject.name} and price is ${anyObject.price}`);
}

//handleObject(user);
handleObject({
    name:"Rushi",
    price:299
})
const myArray=[1,2,3,4,5];
function returnSecondArray(anyArray){
    return anyArray[1];
}
console.log(returnSecondArray(myArray));
console.log(returnSecondArray([10,20,30,40,50]));