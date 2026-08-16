// ⚔️ Mini Challenge (5 Minutes)
// Create a function:
// multiply
// Requirements:
// Accept two numbers.
// Return their multiplication.
// Print the result.

// Create another function:
// introduce
// Requirements:
// Required parameter: name
// Optional parameter: city
// Print:
// Hi, I'm Shreyesh
// or
// Hi, I'm Shreyesh from Bhilai
// depending on whether city is provided.

function addTwo(a: number, b: number): number {
  return a * b;
}

function greet(name: String, city?: String) {
  if (city) {
    console.log(`Hello ${name} from ${city}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

let print = addTwo(2, 3);

console.log(print);


greet("Shreyesh", "Bhilai");


/*⚔️ Mini Challenge Review
Your code:
function addTwo(a: number, b: number): number {
  return a * b;
}
✅ Correct
Parameter types ✔
Return type ✔
Function syntax ✔
The challenge asked for multiplication, so this is perfect.
Your second function:
function greet(name: String, city?: String) {
  if (city) {
    console.log(`Hello ${name} from ${city}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
✅ Logic is correct.
It works exactly as expected.
🔥 Improvement #1
Again 😆...
Use
string
instead of
String
Professional version:
function greet(name: string, city?: string) {
  if (city) {
    console.log(`Hello ${name} from ${city}`);
  } else {
    console.log(`Hello ${name}`);
  }
} */