const acoountid=123456;
let accountEmail="karan@gmail.com";
var accountPassword="12345";
accountCity="Pune";
let accountState; //undefined only declaration not initialization

//acoountid=78910; // not allowed
/*
  prefer not use var because of  its issue in block scope  and functional scope.
*/

console.log(acoountid);
console.table([acoountid,accountEmail,accountPassword,accountCity,accountState]);