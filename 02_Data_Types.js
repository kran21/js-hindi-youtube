"use strict"; //treat all js code as newer version

//alert(3+3); //we are use nodejs not browser so alert is not defined here

let name="karan";
let age=22;
let isLoggedIn=false;

//console.log(name);
//console.log(age);
//console.log(isLoggedIn);//boolean value
//null=> standalone value that represents "nothing" or "empty". It is an assignment value. It can be assigned to a variable as a representation of no value.    
//undefined=> It means a variable has been declared but has not yet been assigned a value. It is also a type itself (undefined). When you declare a variable without initializing it, it is automatically assigned the value undefined.
//symbol=> It is a unique and immutable primitive value that can be used as the key of an object property. Symbols are often used to create private properties or to avoid name collisions in objects.


console.log(typeof name); //string
console.log(typeof null);//object (this is a known bug in JavaScript, null is not actually an object, but typeof returns "object" for historical reasons)
console.log(typeof undefined); //undefined