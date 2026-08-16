// ⚔️ Mini Challenge (5 Minutes)
// Create a variable named userId.
// It should accept:
// a number
// or a string
// Assign both values one after another and print them.

// Create another variable named theme.
// It should only allow:
// "light"
// "dark"
// Assign "dark" and print it.

let userId: number | String;

userId = 1234;
userId = "Shreyesh"

console.log(userId);

let theme: "dark" | "light"

theme = "dark"

console.log(theme);

// ✅ What you did right
// ✔ Correct Union Type
// let userId: number | String;
// Conceptually correct—it accepts both numbers and strings.
// ✔ Correct assignments
// userId = 1234;

// userId = "Shreyesh";
// Perfect.
// ✔ Correct Literal Type
// let theme: "dark" | "light";
// Excellent.
// Only "dark" or "light" are allowed.
// Exactly what we wanted.
// 🔥 Small Improvement #1
// Instead of
// String
// use
// string
// So write:
// let userId: number | string;
// Why?
// There are two different things:
// string   ✅ Primitive type (use this)
// String   ❌ Wrapper object (almost never use)
// The same applies to:
// number
// boolean
// instead of
// Number
// Boolean
// Professional Rule
// Always use:
// string
// number
// boolean
// Never:
// String
// Number
// Boolean
// unless you have a very specific reason (99.9% of the time, you won't).

