let age:any = 21;

age = "Shreyesh"

// console.log(age) => type error

let name:unknown = "TypeScript";
     
if(typeof name === "string" ){ 
//  //(//🔥 Tiny Improvement

// Instead of

// if(typeof name == "string")

// prefer

// if (typeof name === "string")

// Why?

// Because in JavaScript/TypeScript:

// == → loose equality
// === → strict equality

// Professional codebases almost always use ===.

// So write:

// if (typeof name === "string") {
//     console.log(name.toUpperCase());
// })
    
    console.log(name.toUpperCase());
    
}


