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

addTwo(2,3)

greet("Shreyesh","Bhilai")