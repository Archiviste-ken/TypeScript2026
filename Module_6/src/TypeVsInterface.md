🤔 Type vs Interface

Let's compare.

Type

type Car = {
    brand: string;
};

Interface

interface Car {
    brand: string;
}

Both are correct.

🎯 Type vs Interface Cheat Sheet
Feature	Interface	Type
Objects	✅	✅
Union Types	❌	✅
Literal Types	❌	✅
Tuples	❌	✅
Declaration Merging	✅	❌
Extends	✅	✅ (using intersections, which we'll cover later)