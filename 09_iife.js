//Immediately Invoked Function Expression (IIFE) 


(function() {
    var name = "IIFE Example";
    console.log(name);
}) ();

((name)=> {
    console.log(`Arrow Function IIFE Example ${name}`);
}) ("karan")
