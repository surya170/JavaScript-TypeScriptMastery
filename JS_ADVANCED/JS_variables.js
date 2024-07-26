// Primitive / Value Types 
// String , number, Boolean,undefined ,Null,Symbol
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

// Hoisting : Hoisting is nothing but access or extract variables and functions before intializng them or before putting value to them is called hoisting
// 

createCourse1("DSA");  // in most of the languages it s not work but js its wor.
console.log(val); // Same here also we are accessing the variable even before declaring it.
// val is declared later even though the val is declared later then also i am able to access it 
// For these u need to understand how js code is executed.


/*
  // Refer these medium article : https://medium.com/@kumarayush9694/javascript-693914f28380
  Execution Context : 
  Global Execution Context: 
  Call Stack : 

  Execution Context environment also has 2 Main Components has phases.

  1st Phase : Memory is allocated for variables [ These phase is also called Variable Environment ]
  2nd Phase : In 2nd phase Code is Executed line by line in synchronus in single thread manner. [ These phase is called Code Phase or Thread of execution].
 
*/

function createCourse1(coursename) {
    console.log(" Creating "+coursename);
}

var val = 10;
createCourse1("System Design");



// Window

/*
  window :
→ JS creates something call window.

→ It is a object, which is created in a global space and can be accessed from any where in the program.

→ It contains lots of functions and variables.
*/

console.log(f);
console.log(this.a);
console.log(window.a);

var  f  = 10;

console.log(f);
console.log(this.a);
console.log(window.a);


// const,var,let

let g = 10;
const h =20;
var i = 30;

// Var will be in global space and cons and let are not in global space so we cannot access

/*

let & const:

let and const are also hoisted, but are different from var.

console.log(a);  //ReferenceError: cannot access a before intialization
console.log(b);  // undefined

let a=10;
console.log(a);   //10

var b=100;
console.log(window.b); //100
console.log(window.a); //undefined

Both a and b are actually initialized as undefined in hoisting stage. But var b is inside the storage space of global and let a is inside separate memory called script, where it can only be accessed only after some value is assigned to it otherwise it will throw err.

 
Temporal Dead Zone:

Time since when let variable was hoisted until some value is assigned to it.
so any line till “let a=10”is TDZ for a.
Since a is not in global space, window.a or this.a will give undefined.
Reference error is thrown when variables are in temporal dead zone.

*/


