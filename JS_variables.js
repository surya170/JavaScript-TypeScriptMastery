// Primitive / Value Types 
// String , number, Boolean,undefiende ,Null,Symbol
// JS is a Dynamic Language

console.log("Hello");


let x = "Surya";
console.log(x);
console.log(typeof(x));
x = 8;

console.log(x);
console.log(typeof(x));

let y = 1.4;
console.log(y);
console.log(typeof(y));

let z = 1;
console.log(z);
console.log(typeof(z));

let p = true;
console.log(p);
console.log(typeof(p));

let w;
console.log(w);
w = "charan";
console.log(typeof(w));


//Reference types - Objects , Arrays , Functions 
// I Want to Group all to togeher is called object

let course = {
    title : "HHLD",
    description : "projects",
    rating : 5
}

console.log(course);
console.log(typeof(course));

// You can access  object data one is dot notation and another one is brcket notation
console.log(course.title);
console.log(course['description']);


// Brainstrom
// Copy by value
let a = "Surya";
let b = a;

a = "Charan";

console.log(a);
console.log(b);


// copy by reference
let c = {name : "Revanth"};
let d  = c;

c.name = "Revanth charan";

console.log(c);
console.log(d);

// Arrays  

let courses = ["DSA","System Design","Angular","Reactjs"];
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

console.log(typeof(courses));
console.log(courses);

// Functions 

function createCourse(coursename) {
    console.log(" Creating "+coursename);
}

createCourse("DSA");
createCourse("System Design");

// Hoisting 
// 

createCourse1("DSA");  // in most of the languages it s not work but js its wor.
console.log(val); // Same here also we are accessing the variable even before declaring it.
// val is declared later even though the val is declared later then also i am able to access it 
// For these u need to understand how js code is executed.


/*
  Execution Context : 
  Global Execution Context: 
  Call Stack : 
  
*/

function createCourse1(coursename) {
    console.log(" Creating "+coursename);
}

var val = 10;
createCourse1("System Design");


