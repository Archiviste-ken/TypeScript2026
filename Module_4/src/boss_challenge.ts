// 👑 Boss Challenge (10 Minutes)
// Create an arrow function:
// calculateAverage
// Requirements:
// Accept any number of numeric arguments using a rest parameter.
// Return the average as a number.
// Example:
// calculateAverage(10, 20, 30);
// Output:
// 20

const calculateAverage = (...numbers: number[]): number => {
  return numbers.reduce((sum, current) => (sum + current) / 2, 0);
};

let print = calculateAverage(2,3,5)

console.log(print);

/* 👑 Boss Challenge Review
Your code:
const calculateAverage = (...numbers: number[]): number => {
  return numbers.reduce((sum, current) => (sum + current) / 2, 0);
};
❌ The syntax is correct.
But the logic is wrong.
Let's see why.
Suppose:
calculateAverage(2, 3, 5);
Your reduce does this:
Start:
sum = 0
First number:
(0 + 2) / 2 = 1
Second:
(1 + 3) / 2 = 2
Third:
(2 + 5) / 2 = 3.5
Returns:
3.5
But the real average is:
(2 + 3 + 5) / 3

= 10 / 3

= 3.33
So the calculation is incorrect.
✅ Correct Solution
First calculate the sum.
Then divide once.
const calculateAverage = (...numbers: number[]): number => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);

  return sum / numbers.length;
};
Now:
2 + 3 + 5 = 10

10 / 3

3.33
Correct.*/