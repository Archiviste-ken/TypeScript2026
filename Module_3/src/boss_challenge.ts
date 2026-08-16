// 👑 Boss Challenge (10 Minutes)
// Create a type alias named Student.
// It should have:
// name → string
// age → number
// course → string
// isGraduated → boolean
// Now create an object using that type and print it.


type Student = {
    name: String,
    age: number,
    course: String,
    isGraduated: boolean
}

const Shreyesh: Student = {
    name: "shreyesh" ,
    age: 21,
    course: "CSE",
    isGraduated: true
}

console.log(Shreyesh);

/* ✅ What you did right
✔ Created a type alias.
✔ Created an object.
✔ Correct property names.
✔ Correct values.
Excellent.
🔥 Small Improvement #2
Again,
Instead of
name: String
use
name: string
Instead of
course: String
use
course: string
Professional version:
type Student = {
    name: string;
    age: number;
    course: string;
    isGraduated: boolean;
};

const shreyesh: Student = {
    name: "Shreyesh",
    age: 21,
    course: "CSE",
    isGraduated: true,
};

console.log(shreyesh);
💼 Professional Naming Tip
This isn't an error, just a style convention.
Instead of:
const Shreyesh = { ... };
prefer:
const shreyesh = { ... };
Why?
By convention:
Variables and objects → camelCase
Types, Interfaces, Classes → PascalCase
Example:
type Student = {};

interface User {}

class Car {}

const student = {};

const currentUser = {};
This makes your code look like what you'll see in professional TypeScript codebases.
🎯 Interview Question*/