const mySym=Symbol("mySymbol");
//console.log([mySym]);


const jsUser={
    name:"Karan",
    "full name":"Karan Parasharam Patil",
    [mySym]:"This is a symbol property",
    age:28,
    email:"Karan.coremagix.com",
    location:"Kolhapur",

}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser.age);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
}

console.log(jsUser.greeting());


jsUser.grettring2=function(){
    console.log(`Hello js user,  ${this.name}`);
}

console.log(jsUser.grettring2());



const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Karan Parasharam Patil",
}

//course.courseInstructor;

const {courseInstructor:Instructor} = course;
console.log(Instructor);


