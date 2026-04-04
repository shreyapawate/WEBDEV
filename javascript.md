**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 1. **What is JavaScript?**

### 📘 Notes:

* JavaScript is a **high-level programming language** used to make web pages interactive.
* It runs inside web browsers and also on servers using **Node.js**.
* JavaScript enables dynamic behaviour like DOM manipulation, API calls, and event handling.
* It is one of the **core web technologies** along with HTML and CSS.

### ✅ Key Points:

* Created by **Brendan Eich** in 1995.
* Standardized as **ECMAScript**.
* Supports object-oriented and functional programming.
* Runs using browser engines like **V8**.

### 🎯 Interview Answer:

> JavaScript is a scripting language used to build interactive web applications. It runs on both client-side browsers and server-side environments like Node.js.

---

## ✅ 2. **Console**

### 📘 Notes:

* The console is used to **display output** and **debug programs**.
* Helps developers test code during development.
* Output appears in browser developer tools or Node terminal.

### 🔹 Common Methods:

```javascript
console.log("Hello");
console.error("Error occurred");
console.warn("Warning message");
console.table([1,2,3]);
```

### 🎯 Interview Answer:

> The console in JavaScript is used for debugging and displaying program output using methods like console.log(), console.error(), and console.warn().

---

## ✅ 3. **REPL**

### 📘 Notes:

* **REPL** = Read – Eval – Print – Loop.
* Interactive environment to execute JavaScript line by line.
* Mostly used in Node.js terminal.

### 🔹 Start REPL:

```bash
node
```

### Example:

```javascript
> 2 + 3
5
```

### 🎯 Interview Answer:

> REPL is an interactive shell that reads input, evaluates it, prints the result, and repeats the process, allowing quick testing of JavaScript code.

---

## ✅ 4. **Variables**

### 📘 Notes:

Variables are containers used to store data values.

### 🔹 Variable Declarations:

```javascript
var name = "Shreya";
let age = 21;
const pi = 3.14;
```

| Keyword | Scope | Reassign | Redeclare |
|--------|-------|----------|-----------|
| var | function | ✅ | ✅ |
| let | block | ✅ | ❌ |
| const | block | ❌ | ❌ |

### ✅ Best Practice:

* Prefer **const**
* Use **let** when value changes
* Avoid **var** in modern JS

### 🎯 Interview Answer:

> Variables store data values in JavaScript. Modern JavaScript mainly uses let and const because they provide better scope control than var.

---

## ✅ 5. **Data Types**

### 📘 Notes:

JavaScript data types define the type of stored value.

### 🔹 Primitive Data Types:

```javascript
let name = "Shreya";   // String
let age = 21;          // Number
let isStudent = true;  // Boolean
let x = null;          // Null
let y;                 // Undefined
let id = Symbol();     // Symbol
let big = 123n;        // BigInt
```

### 🔹 Non-Primitive Type:

```javascript
let person = {
  name: "Shreya",
  age: 21
};
```

### 🎯 Interview Answer:

> JavaScript includes primitive data types such as string, number, boolean, null, undefined, symbol, and bigint, along with objects as non-primitive types.

---

## ✅ 6. **Numbers in JavaScript**

### 📘 Notes:

* JavaScript has only one numeric type → **Number**.
* Supports integers and floating-point values.

### 🔹 Examples:

```javascript
let a = 10;
let b = 10.5;
let c = 2e3; // 2000
```

### 🔹 Useful Methods:

```javascript
Number("123");
parseInt("50px");
parseFloat("3.14");
```

### Special Values:

```javascript
Infinity
-Infinity
NaN
```

### 🎯 Interview Answer:

> JavaScript uses a single Number type for all numeric values, represented using the IEEE 754 floating-point format.

---

## ✅ 7. **Operations in JavaScript**

### 📘 Notes:

JavaScript supports different types of operators.

### 🔹 Arithmetic Operators:

```javascript
+  // Addition
-  // Subtraction
*  // Multiplication
/  // Division
%  // Modulus
** // Exponent
```

### 🔹 Example:

```javascript
let result = 10 + 5;
```

### 🎯 Interview Answer:

> Operators in JavaScript perform operations on values and variables such as arithmetic, comparison, and logical operations.

---

## ✅ 8. **NaN (Not a Number)**

### 📘 Notes:

* NaN represents an invalid numeric result.
* Occurs when mathematical operations fail.

### Example:

```javascript
let x = "hello" / 2;
console.log(x); // NaN
```

### Check NaN:

```javascript
isNaN("abc"); // true
```

### 🎯 Interview Answer:

> NaN stands for Not a Number and represents an invalid numeric calculation result in JavaScript.

---

## ✅ 9. **Operator Precedence**

### 📘 Notes:

Operator precedence determines **execution order** in expressions.

### Example:

```javascript
let result = 10 + 5 * 2;
console.log(result); // 20
```

Multiplication executes before addition.

### Priority Order (High → Low):

1. `()` Parentheses
2. `**` Exponent
3. `* / %`
4. `+ -`

### 🎯 Interview Answer:

> Operator precedence defines the order in which operators are evaluated in a JavaScript expression.

---



---

## ✅ 10. **let Keyword**

### 📘 Notes:

* `let` is used to declare variables in modern JavaScript.
* It is **block-scoped**, meaning it works only inside `{ }`.
* Value can be updated but cannot be redeclared in the same scope.

### 🔹 Example:

```javascript
let age = 20;
age = 21; // allowed
// let age = 25; ❌ redeclaration not allowed
```

### ✅ Key Points:

* Introduced in ES6.
* Safer than `var`.
* Prevents scope issues.

### 🎯 Interview Answer:

> The `let` keyword declares block-scoped variables that can be reassigned but not redeclared within the same scope.

---

## ✅ 11. **const Keyword**

### 📘 Notes:

* `const` declares constant variables.
* Must be initialized during declaration.
* Cannot be reassigned later.
* Block-scoped like `let`.

### 🔹 Example:

```javascript
const PI = 3.14;
// PI = 4; ❌ Error
```

### Objects with const:

```javascript
const user = { name: "Shreya" };
user.name = "Sam"; // allowed
```

### 🎯 Interview Answer:

> The `const` keyword creates block-scoped variables whose values cannot be reassigned after initialization.

---

## ✅ 12. **String Indices**

### 📘 Notes:

* Strings behave like arrays of characters.
* Each character has an index.
* Index starts from **0**.

### 🔹 Example:

```javascript
let lang = "JavaScript";

console.log(lang[0]); // J
console.log(lang[4]); // S
```

### Key Points:

* Strings are immutable.
* Characters cannot be modified directly.

```javascript
lang[0] = "P"; // does not change string
```

### 🎯 Interview Answer:

> String indices allow accessing characters using their position starting from index 0.

---

## ✅ 13. **Concatenation**

### 📘 Notes:

Concatenation means joining strings together.

### Using + Operator:

```javascript
let first = "Hello";
let second = "World";

console.log(first + " " + second);
```

### Using Template Literals:

```javascript
let name = "Shreya";
console.log(`Hello ${name}`);
```

### Key Points:

* `+` joins strings.
* Template literals improve readability.

### 🎯 Interview Answer:

> Concatenation combines multiple strings using the plus operator or template literals.

---

## ✅ 14. **null and undefined**

### 📘 Notes:

Both represent absence of value but are different.

### undefined:

Variable declared but not assigned.

```javascript
let a;
console.log(a); // undefined
```

### null:

Intentional empty value.

```javascript
let b = null;
console.log(b); // null
```

### Difference:

| null | undefined |
|------|-----------|
| intentional empty value | value not assigned |
| type = object | type = undefined |

### 🎯 Interview Answer:

> Undefined means a variable has no assigned value, while null represents an intentional empty value.

---

## ✅ 15. **console.log()**

### 📘 Notes:

* Used to print output in console.
* Helps debugging programs.

### Example:

```javascript
console.log("Hello World");
console.log(10 + 5);
```

### Printing Variables:

```javascript
let name = "Shreya";
console.log(name);
```

### Key Points:

* Most commonly used debugging method.
* Works in browser console and Node.js.

### 🎯 Interview Answer:

> console.log() is used to display messages and variable values in the console for debugging and development.

---

## ✅ 16. **Linking JavaScript File**

### 📘 Notes:

* JavaScript can be connected to an HTML file using the `<script>` tag.
* It allows browsers to execute JavaScript code.
* External files help keep code clean and reusable.

### 🔹 Internal JavaScript Example:

```html
<!DOCTYPE html>
<html>
<body>

<script>
  console.log("Hello from internal JS");
</script>

</body>
</html>
```

### 🔹 External JavaScript (Recommended):

Create a file named `script.js`.

```javascript
console.log("Hello from external JS");
```

Link it inside HTML:

```html
<script src="script.js"></script>
```

### ✅ Key Points:

* External JS improves code organization.
* Place `<script>` before `</body>` for better loading performance.

### 🎯 Interview Answer:

> JavaScript files are linked using the script tag with the src attribute, allowing separation of HTML and JavaScript code.

---

## ✅ 17. **Template Literals**

### 📘 Notes:

* Template literals use backticks `` ` `` instead of quotes.
* Allow embedding variables using `${}`.
* Support multi-line strings.

### 🔹 Example:

```javascript
let name = "Shreya";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

### Multi-line String:

```javascript
let message = `This is
a multi-line
string`;

console.log(message);
```

### ✅ Key Points:

* Improves readability.
* Supports expression interpolation.

### 🎯 Interview Answer:

> Template literals allow embedding variables and expressions inside strings using backticks and ${} syntax.

---

## ✅ 18. **Operations in JavaScript**

### 📘 Notes:

Operations perform calculations and value manipulations.

### Arithmetic Operators:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

### Assignment Operators:

```javascript
let x = 10;
x += 5;
x -= 2;
x *= 3;
x /= 2;
```

### Increment & Decrement:

```javascript
let n = 5;
n++;
n--;
```

### ✅ Key Points:

* Arithmetic operators perform math operations.
* Assignment operators update values quickly.

### 🎯 Interview Answer:

> JavaScript operations include arithmetic, assignment, and increment/decrement operators used to manipulate values and perform calculations.

---

## ✅ 19. **Comparison for Non-Numbers**

### 📘 Notes:

JavaScript can compare values of different types.

### Equality Operators:

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != "5");
console.log(5 !== "5");
```

### String Comparison:

```javascript
console.log("apple" > "banana");
console.log("cat" > "car");
```

### Boolean Comparison:

```javascript
console.log(true == 1);
console.log(false == 0);
```

### Falsy Values:

* false
* 0
* ""
* null
* undefined
* NaN

### 🎯 Interview Answer:

> JavaScript compares non-number values using type coercion with == and strict comparison with ===.

---

## ✅ 20. **Conditional Statements**

### 📘 Notes:

Conditional statements execute code based on conditions.

### if Statement:

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

### if...else Statement:

```javascript
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### else if Ladder:

```javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

### Ternary Operator:

```javascript
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
```

### ✅ Key Points:

* Controls program flow.
* Ternary operator is shorthand for if-else.

### 🎯 Interview Answer:

> Conditional statements like if, else, and ternary operators allow execution of code based on logical conditions.

---

## ✅ 21. **Logical Operators**

### 📘 Notes:

* Logical operators are used to combine multiple conditions.
* They return boolean values (`true` or `false`).

### 🔹 Types of Logical Operators:

```javascript
&&  // AND
||  // OR
!   // NOT
```

### 🔹 Examples:

```javascript
let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age < 18 || age == 20); // true
console.log(!(age > 18)); // false
```

### ✅ Key Points:

* `&&` → true only if both conditions are true.
* `||` → true if at least one condition is true.
* `!` → reverses boolean value.

### 🎯 Interview Answer:

> Logical operators combine multiple conditions and return boolean results based on logical evaluation.

---

## ✅ 22. **Truthy and Falsy Values**

### 📘 Notes:

In JavaScript, values are automatically treated as **true** or **false** in conditions.

### 🔹 Falsy Values (only 6):

```javascript
false
0
""
null
undefined
NaN
```

### 🔹 Truthy Values:

Everything else is truthy.

```javascript
"hello"
1
[]
{}
true
```

### Example:

```javascript
if ("hello") {
  console.log("Truthy value");
}
```

### ✅ Key Points:

* JavaScript performs automatic boolean conversion.
* Important for condition checking.

### 🎯 Interview Answer:

> Truthy values evaluate to true and falsy values evaluate to false when used in boolean contexts.

---

## ✅ 23. **Switch Statements**

### 📘 Notes:

* Used when multiple conditions depend on one variable.
* Cleaner alternative to multiple `if-else` statements.

### 🔹 Syntax:

```javascript
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

### 🔹 Example:

```javascript
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

### ✅ Key Points:

* `break` prevents fall-through.
* `default` runs if no case matches.

### 🎯 Interview Answer:

> A switch statement evaluates an expression and executes matching case blocks, providing a structured alternative to if-else ladders.

---

## ✅ 24. **Alert, Error, Warning & Prompts**

### 📘 Notes:

Browser provides dialog boxes for interaction.

### 🔹 alert()

Displays a message box.

```javascript
alert("Hello User!");
```

### 🔹 prompt()

Takes input from user.

```javascript
let name = prompt("Enter your name:");
console.log(name);
```

### 🔹 console.error() & console.warn()

```javascript
console.error("This is an error");
console.warn("This is a warning");
```

### ✅ Key Points:

* `alert()` → shows message.
* `prompt()` → accepts input.
* Used for simple user interaction and debugging.

### 🎯 Interview Answer:

> JavaScript provides alert and prompt dialogs for user interaction and console methods for error and warning messages.

---

## ✅ 25. **str.trim()**

### 📘 Notes:

* Removes whitespace from beginning and end of a string.
* Does not modify original string (returns new string).

### 🔹 Example:

```javascript
let text = "   Hello World   ";
let result = text.trim();

console.log(result);
```

### Output:

```
Hello World
```

### ✅ Key Points:

* Removes spaces only from start and end.
* Useful for form validation.

### 🎯 Interview Answer:

> trim() removes extra whitespace from the start and end of a string.

---

## ✅ 26. **str.toUpperCase()**

### 📘 Notes:

* Converts all characters of a string into uppercase letters.
* Returns a new string.

### 🔹 Example:

```javascript
let name = "shreya";
console.log(name.toUpperCase());
```

### Output:

```
SHREYA
```

### Related Method:

```javascript
name.toLowerCase();
```

### ✅ Key Points:

* Strings are immutable.
* Original string remains unchanged.

### 🎯 Interview Answer:

> toUpperCase() converts all characters in a string to uppercase and returns a new string.

---


## ✅ 27. **str.toLowerCase()**

### 📘 Notes:

* Converts all characters of a string into lowercase letters.
* Returns a **new string** (original string remains unchanged).

### 🔹 Example:

```javascript
let name = "SHREYA";
console.log(name.toLowerCase());
```

### Output:

```
shreya
```

### ✅ Key Points:

* Strings are immutable.
* Often used for case-insensitive comparisons.

### 🎯 Interview Answer:

> toLowerCase() converts all characters of a string into lowercase and returns a new modified string.

---

## ✅ 28. **indexOf()**

### 📘 Notes:

* Finds the **position (index)** of a substring inside a string.
* Returns the index of first occurrence.
* Returns `-1` if value is not found.

### 🔹 Example:

```javascript
let text = "JavaScript";

console.log(text.indexOf("S")); // 4
console.log(text.indexOf("z")); // -1
```

### ✅ Key Points:

* Case-sensitive.
* Useful for searching text.

### 🎯 Interview Answer:

> indexOf() returns the position of the first occurrence of a specified value in a string, or -1 if not found.

---

## ✅ 29. **Method Chaining**

### 📘 Notes:

* Method chaining means calling multiple methods on the same object in one line.
* Each method returns a value used by the next method.

### 🔹 Example:

```javascript
let text = "   hello world   ";

let result = text.trim().toUpperCase();
console.log(result);
```

### Output:

```
HELLO WORLD
```

### ✅ Key Points:

* Improves readability.
* Reduces extra variables.

### 🎯 Interview Answer:

> Method chaining is the technique of calling multiple methods sequentially on the same object because each method returns a value.

---

## ✅ 30. **slice()**

### 📘 Notes:

* Extracts a part of a string.
* Does not modify original string.

### 🔹 Syntax:

```javascript
string.slice(start, end);
```

### 🔹 Example:

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4)); // Java
console.log(text.slice(4));    // Script
```

### ✅ Key Points:

* `start` index included.
* `end` index excluded.
* Supports negative indexing.

```javascript
text.slice(-6); // Script
```

### 🎯 Interview Answer:

> slice() extracts a portion of a string between specified indices and returns a new string.

---

## ✅ 31. **replace()**

### 📘 Notes:

* Replaces a specified value with another value.
* Returns a new string.

### 🔹 Example:

```javascript
let text = "Hello World";

console.log(text.replace("World", "JavaScript"));
```

### Output:

```
Hello JavaScript
```

### ✅ Key Points:

* Replaces only first occurrence by default.
* Original string remains unchanged.

### 🎯 Interview Answer:

> replace() substitutes a specified part of a string with another value and returns a new modified string.

---

## ✅ 32. **repeat()**

### 📘 Notes:

* Repeats a string a specified number of times.

### 🔹 Syntax:

```javascript
string.repeat(count);
```

### 🔹 Example:

```javascript
let word = "Hi ";

console.log(word.repeat(3));
```

### Output:

```
Hi Hi Hi
```

### ✅ Key Points:

* Count must be positive.
* Useful for patterns and formatting.

### 🎯 Interview Answer:

> repeat() creates a new string by repeating the original string a specified number of times.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 33. **Array**

### 📘 Notes:

* An array is a data structure used to store **multiple values in a single variable**.
* Arrays can store different data types.
* Indexing starts from **0**.

### 🔹 Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Apple
```

### ✅ Key Points:

* Ordered collection.
* Dynamic size.
* Supports built-in methods.

### 🎯 Interview Answer:

> An array in JavaScript is an ordered collection of elements stored in a single variable and accessed using index positions.

---

## ✅ 34. **Arrays are Mutable**

### 📘 Notes:

* Arrays in JavaScript are **mutable**, meaning their values can be changed after creation.

### 🔹 Example:

```javascript
let nums = [1, 2, 3];

nums[0] = 100;
console.log(nums);
```

### Output:

```
[100, 2, 3]
```

### ✅ Key Points:

* Elements can be added, removed, or modified.
* Reference type data structure.

### 🎯 Interview Answer:

> Arrays are mutable because their elements can be modified without creating a new array.

---

## ✅ 35. **Array Methods: push(), pop(), unshift(), shift()**

### 📘 Notes:

These methods modify the original array.

### 🔹 push() → adds element at end

```javascript
let arr = [1, 2];
arr.push(3);
console.log(arr);
```

Output:

```
[1, 2, 3]
```

### 🔹 pop() → removes last element

```javascript
arr.pop();
console.log(arr);
```

Output:

```
[1, 2]
```

### 🔹 unshift() → adds element at beginning

```javascript
arr.unshift(0);
console.log(arr);
```

Output:

```
[0, 1, 2]
```

### 🔹 shift() → removes first element

```javascript
arr.shift();
console.log(arr);
```

Output:

```
[1, 2]
```

### 🎯 Interview Answer:

> push and unshift add elements, while pop and shift remove elements from arrays.

---

## ✅ 36. **indexOf() (Array)**

### 📘 Notes:

* Returns index of first occurrence of an element.
* Returns `-1` if not found.

### 🔹 Example:

```javascript
let nums = [10, 20, 30];

console.log(nums.indexOf(20)); // 1
console.log(nums.indexOf(50)); // -1
```

### 🎯 Interview Answer:

> indexOf() searches an element in an array and returns its index position.

---

## ✅ 37. **includes()**

### 📘 Notes:

* Checks whether an array contains a specific value.
* Returns **true** or **false**.

### 🔹 Example:

```javascript
let fruits = ["Apple", "Mango"];

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Banana")); // false
```

### 🎯 Interview Answer:

> includes() checks if a value exists inside an array and returns a boolean result.

---

## ✅ 38. **concat()**

### 📘 Notes:

* Combines two or more arrays.
* Does **not** change original arrays.

### 🔹 Example:

```javascript
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result);
```

Output:

```
[1, 2, 3, 4]
```

### 🎯 Interview Answer:

> concat() merges arrays and returns a new combined array.

---

## ✅ 39. **reverse()**

### 📘 Notes:

* Reverses the order of elements.
* Modifies the original array.

### 🔹 Example:

```javascript
let nums = [1, 2, 3];

nums.reverse();
console.log(nums);
```

Output:

```
[3, 2, 1]
```

### 🎯 Interview Answer:

> reverse() changes the order of array elements by reversing them in place.

---

## ✅ 40. **slice() (Array)**

### 📘 Notes:

* Extracts a portion of an array.
* Does not modify original array.

### 🔹 Syntax:

```javascript
array.slice(start, end);
```

### 🔹 Example:

```javascript
let nums = [1, 2, 3, 4];

console.log(nums.slice(1, 3));
```

Output:

```
[2, 3]
```

### 🎯 Interview Answer:

> slice() returns a shallow copy of a selected portion of an array.

---

## ✅ 41. **splice()**

### 📘 Notes:

* Adds, removes, or replaces elements.
* Modifies original array.

### 🔹 Syntax:

```javascript
array.splice(start, deleteCount, newItem);
```

### 🔹 Example (remove):

```javascript
let nums = [1, 2, 3, 4];

nums.splice(1, 2);
console.log(nums);
```

Output:

```
[1, 4]
```

### 🔹 Example (add):

```javascript
nums.splice(1, 0, 99);
console.log(nums);
```

Output:

```
[1, 99, 4]
```

### 🎯 Interview Answer:

> splice() modifies an array by adding, removing, or replacing elements at a specific index.

---

**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 42. **sort()**

### 📘 Notes:

* `sort()` arranges array elements in order.
* By default, sorting happens **alphabetically (string order)**.
* It modifies the original array.

### 🔹 Example:

```javascript
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();

console.log(fruits);
```

Output:

```
["Apple", "Banana", "Mango"]
```

### ⚠ Number Sorting Issue:

```javascript
let nums = [10, 2, 5];
nums.sort();

console.log(nums);
```

Output:

```
[10, 2, 5] // incorrect numeric order
```

### ✅ Correct Numeric Sort:

```javascript
nums.sort((a, b) => a - b);
```

### 🎯 Interview Answer:

> sort() arranges array elements but sorts values as strings by default, so a compare function is needed for numeric sorting.

---

## ✅ 43. **Array References**

### 📘 Notes:

* Arrays are **reference types**.
* Assigning one array to another copies the **reference**, not the values.

### 🔹 Example:

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output:

```
[1, 2, 3, 4]
```

### ✅ Explanation:

Both variables point to the **same memory location**.

### 🎯 Interview Answer:

> Arrays are stored by reference in JavaScript, meaning multiple variables can point to the same array object.

---

## ✅ 44. **const Arrays**

### 📘 Notes:

* Arrays declared with `const` cannot be reassigned.
* But elements inside the array **can be modified**.

### 🔹 Example:

```javascript
const nums = [1, 2, 3];

nums.push(4); // allowed
console.log(nums);
```

### ❌ Not Allowed:

```javascript
nums = [5, 6]; // Error
```

### 🎯 Interview Answer:

> A const array prevents reassignment of the reference but still allows modification of its elements.

---

## ✅ 45. **Nested Arrays**

### 📘 Notes:

* Arrays inside another array are called nested arrays.
* Used to represent matrices or grouped data.

### 🔹 Example:

```javascript
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log(matrix[0][1]); // 2
```

### ✅ Key Points:

* Access using multiple indices.
* Common in 2D data structures.

### 🎯 Interview Answer:

> Nested arrays are arrays containing other arrays and are commonly used for multidimensional data representation.

---

## ✅ 46. **Loops**

### 📘 Notes:

Loops execute code repeatedly until a condition becomes false.

---

### 🔹 for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 🔹 Infinite Loop (⚠ Dangerous)

```javascript
for (;;) {
  console.log("Runs forever");
}
```

Occurs when stopping condition is missing.

---

### 🔹 Nested Loop

```javascript
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
```

Loop inside another loop.

---

### 🔹 while Loop

```javascript
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
```

Runs while condition is true.

### 🎯 Interview Answer:

> Loops in JavaScript execute blocks of code repeatedly using constructs like for and while loops based on conditions.

---

## ✅ 47. **break Keyword**

### 📘 Notes:

* `break` immediately stops loop execution.
* Control moves outside the loop.

### 🔹 Example:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

Output:

```
1
2
```

### ✅ Key Points:

* Used in loops and switch statements.
* Helps exit early when condition is met.

### 🎯 Interview Answer:

> The break keyword terminates the current loop or switch statement immediately when executed.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 48. **Loops with Arrays**

### 📘 Notes:

* Loops are commonly used to access each element of an array.
* Helps perform operations on all items.

### 🔹 Using for Loop:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### 🔹 Using while Loop:

```javascript
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
```

### ✅ Key Points:

* `array.length` controls loop execution.
* Used for searching, updating, or printing elements.

### 🎯 Interview Answer:

> Loops with arrays allow iteration through each element using index-based access, commonly implemented using for or while loops.

---

## ✅ 49. **Loops with Nested Arrays**

### 📘 Notes:

* Nested arrays require **nested loops** for traversal.
* Each inner array must be accessed separately.

### 🔹 Example:

```javascript
let students = [
  ["Shreya", "Amit"],
  ["Riya", "Rahul"],
  ["Neha", "Karan"]
];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
```

### Output:

```
Shreya
Amit
Riya
Rahul
Neha
Karan
```

### ✅ Key Points:

* Outer loop → rows
* Inner loop → elements inside row

### 🎯 Interview Answer:

> Nested loops are used to iterate through nested arrays where each inner array requires a separate loop for traversal.

---

## ✅ 50. **for...of Loop**

### 📘 Notes:

* `for...of` is a modern loop used to iterate directly over values.
* Eliminates the need for index variables.
* Works with arrays, strings, and iterable objects.

### 🔹 Syntax:

```javascript
for (variable of iterable) {
   // code
}
```

### 🔹 Example with Array:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### 🔹 Example with String:

```javascript
for (let char of "Hello") {
  console.log(char);
}
```

### ✅ Key Points:

* Cleaner and readable syntax.
* Does not provide index directly.
* Preferred for simple iteration.

### 🎯 Interview Answer:

> The for...of loop iterates over iterable objects and directly accesses values instead of indexes, making iteration simpler and more readable.

---

**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 51. **JavaScript Object Literals**

### 📘 Notes:

* Object literals store data in **key–value pairs**.
* Used to represent real-world entities.

### 🔹 Syntax:

```javascript
let student = {
  name: "Shreya",
  age: 20,
  city: "Pune"
};
```

### Access Values:

```javascript
console.log(student.name);
console.log(student["age"]);
```

### ✅ Key Points:

* Keys are strings.
* Values can be any data type.

### 🎯 Interview Answer:

> Object literals are collections of key–value pairs used to store structured data in JavaScript.

---

## ✅ 52. **Get Values — Add, Update, Delete**

### 📘 Notes:

Objects allow dynamic modification.

### 🔹 Get Value:

```javascript
console.log(student.name);
```

### 🔹 Add Property:

```javascript
student.grade = "A";
```

### 🔹 Update Property:

```javascript
student.age = 21;
```

### 🔹 Delete Property:

```javascript
delete student.city;
```

### ✅ Key Points:

* Objects are mutable.
* Properties can be modified anytime.

### 🎯 Interview Answer:

> Object properties can be accessed, added, updated, or deleted dynamically using dot or bracket notation.

---

## ✅ 53. **Objects of Objects**

### 📘 Notes:

* Objects can contain other objects as values.

### 🔹 Example:

```javascript
let classInfo = {
  student1: { name: "Shreya", age: 20 },
  student2: { name: "Amit", age: 21 }
};

console.log(classInfo.student1.name);
```

### ✅ Key Points:

* Useful for hierarchical data.
* Access using chained keys.

### 🎯 Interview Answer:

> Objects of objects store nested structured data where each property itself is another object.

---

## ✅ 54. **Array of Objects**

### 📘 Notes:

* Combines arrays and objects.
* Commonly used in APIs and databases.

### 🔹 Example:

```javascript
let students = [
  { name: "Shreya", marks: 90 },
  { name: "Amit", marks: 85 },
  { name: "Riya", marks: 88 }
];

console.log(students[0].name);
```

### ✅ Key Points:

* Access using index + key.
* Very common data structure.

### 🎯 Interview Answer:

> An array of objects stores multiple object records inside an array structure.

---

## ✅ 55. **Math Object**

### 📘 Notes:

* JavaScript provides built-in mathematical functions via `Math`.

### 🔹 Common Methods:

```javascript
Math.PI
Math.round(4.6)
Math.floor(4.9)
Math.ceil(4.1)
Math.abs(-5)
Math.pow(2,3)
Math.sqrt(16)
```

### ✅ Key Points:

* No need to create Math object.
* Static methods.

### 🎯 Interview Answer:

> The Math object provides built-in mathematical constants and functions for calculations.

---

## ✅ 56. **Random Integer**

### 📘 Notes:

* `Math.random()` generates numbers between **0 and 1**.

### 🔹 Random Integer Formula:

```javascript
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
```

### Explanation:

* `Math.random()` → 0 to 0.999
* Multiply → range scale
* `Math.floor()` → integer value

### 🎯 Interview Answer:

> Random integers are generated using Math.random() combined with Math.floor() to control the range.

---

## ✅ 57. **this Keyword**

### 📘 Notes:

* `this` refers to the **current object** executing the function.

### 🔹 Example:

```javascript
let user = {
  name: "Shreya",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```

### Behavior:

* In object → refers to object.
* In global scope → refers to window (browser).

### 🎯 Interview Answer:

> The this keyword refers to the object that is currently calling the function.

---

## ✅ 58. **try and catch**

### 📘 Notes:

* Used for **error handling**.
* Prevents program crash.

### 🔹 Syntax:

```javascript
try {
  console.log(a);
} catch (error) {
  console.log("Error handled");
}
```

### Example:

```javascript
try {
  let result = 10 / x;
} catch (err) {
  console.log(err.message);
}
```

### ✅ Key Points:

* `try` → risky code
* `catch` → handles error

### 🎯 Interview Answer:

> try...catch is used to handle runtime errors gracefully without stopping program execution.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 59. **Arrow Function**

### 📘 Notes:

* Arrow functions are a shorter way to write functions.
* Introduced in **ES6**.
* Uses `=>` syntax.

### 🔹 Syntax:

```javascript
const greet = () => {
  console.log("Hello");
};

greet();
```

### With Parameters:

```javascript
const add = (a, b) => {
  return a + b;
};
```

### ✅ Key Points:

* Short syntax.
* Does not have its own `this`.

### 🎯 Interview Answer:

> Arrow functions provide a concise syntax for writing functions and inherit `this` from their surrounding scope.

---

## ✅ 60. **Implicit Return in Arrow Function**

### 📘 Notes:

* Arrow functions can return values **without using `return`** keyword.
* Works when function has a single expression.

### 🔹 Example:

```javascript
const square = num => num * num;

console.log(square(4));
```

### Multiple Parameters:

```javascript
const sum = (a, b) => a + b;
```

### ✅ Key Points:

* No `{}` required.
* Expression result is returned automatically.

### 🎯 Interview Answer:

> Implicit return allows arrow functions to return values automatically without writing the return keyword.

---

## ✅ 61. **setTimeout() and Uses**

### 📘 Notes:

* Executes code **after a specified delay**.
* Delay is measured in milliseconds.

### 🔹 Syntax:

```javascript
setTimeout(function, delay);
```

### Example:

```javascript
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

### Uses:

* Delayed execution
* Animations
* API retry logic

### 🎯 Interview Answer:

> setTimeout() executes a function once after a specified time delay.

---

## ✅ 62. **setInterval()**

### 📘 Notes:

* Runs a function **repeatedly** after a fixed interval.

### 🔹 Example:

```javascript
setInterval(() => {
  console.log("Running every 2 seconds");
}, 2000);
```

### ✅ Key Points:

* Executes continuously.
* Useful for timers and live updates.

### 🎯 Interview Answer:

> setInterval() repeatedly executes a function after a specified interval of time.

---

## ✅ 63. **clearInterval()**

### 📘 Notes:

* Stops a running interval.

### 🔹 Example:

```javascript
let id = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(id);
```

### ✅ Key Points:

* Requires interval ID.
* Prevents infinite execution.

### 🎯 Interview Answer:

> clearInterval() stops a function that was started using setInterval().

---

## ✅ 64. **Difference: `this` in Function vs Arrow Function**

### 📘 Notes:

#### Normal Function:

* `this` depends on **how function is called**.

```javascript
let user = {
  name: "Shreya",
  show: function() {
    console.log(this.name);
  }
};
```

#### Arrow Function:

* Does **not create its own `this`**.
* Uses parent's `this`.

```javascript
let user = {
  name: "Shreya",
  show: () => {
    console.log(this.name);
  }
};
```

### Difference Table:

| Normal Function | Arrow Function |
|-----------------|---------------|
| Own `this` | Inherits `this` |
| Dynamic binding | Lexical binding |

### 🎯 Interview Answer:

> Normal functions have their own this context, while arrow functions inherit this from their surrounding scope.

---

## ✅ 65. **Function to Print "Shreya" After 2 Seconds (Multiple Times)**

### 📘 Notes:

Use `setTimeout()` inside a loop.

### 🔹 Example:

```javascript
function printName(times) {
  for (let i = 1; i <= times; i++) {
    setTimeout(() => {
      console.log("Shreya");
    }, 2000 * i);
  }
}

printName(3);
```

### Explanation:

* Prints **Shreya** repeatedly.
* Each print happens after 2 seconds gap.

### 🎯 Interview Answer:

> We can use setTimeout inside a loop to execute delayed repeated printing.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 66. **Array Methods**

### 📘 Notes:

JavaScript provides powerful built-in array methods for iteration and transformation.

---

### i) **forEach()**

* Executes a function for each array element.
* Does not return a new array.

```javascript
let nums = [1, 2, 3];

nums.forEach(function(num) {
  console.log(num);
});
```

✅ Used for side effects like printing or updating UI.

🎯 Interview Answer:

> forEach() executes a callback function once for every array element without returning a new array.

---

### ii) **map()**

* Creates a **new array** after transforming elements.

```javascript
let nums = [1, 2, 3];

let doubled = nums.map(num => num * 2);

console.log(doubled);
```

✅ Returns new array.

🎯 Interview Answer:

> map() transforms each element and returns a new array of equal length.

---

### iii) **filter()**

* Returns elements that satisfy a condition.

```javascript
let nums = [1, 2, 3, 4];

let even = nums.filter(num => num % 2 === 0);

console.log(even);
```

🎯 Interview Answer:

> filter() creates a new array containing elements that pass a test condition.

---

### iv) **every()**

* Checks if **all elements** satisfy a condition.

```javascript
let nums = [2, 4, 6];

console.log(nums.every(n => n % 2 === 0));
```

🎯 Interview Answer:

> every() returns true only if all array elements satisfy the condition.

---

### v) **some()**

* Checks if **at least one element** satisfies condition.

```javascript
let nums = [1, 3, 4];

console.log(nums.some(n => n % 2 === 0));
```

🎯 Interview Answer:

> some() returns true if at least one element passes the condition.

---

### vi) **reduce()**

* Reduces array into a single value.

```javascript
let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
```

Parameters:

* `acc` → accumulator
* `curr` → current value

🎯 Interview Answer:

> reduce() processes array elements and returns a single accumulated result.

---

## ✅ 67. **Find Maximum Value Using reduce()**

### 📘 Notes:

reduce() can compare values to find maximum.

```javascript
let nums = [10, 45, 3, 99, 21];

let max = nums.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(max);
```

🎯 Interview Answer:

> reduce() can be used to compare values and compute maximum by accumulating comparisons.

---

## ✅ 68. **Default Parameters (Arguments)**

### 📘 Notes:

Default parameters assign values if arguments are not provided.

```javascript
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
```

### Output:

```
Hello Guest
```

🎯 Interview Answer:

> Default parameters allow functions to use predefined values when arguments are missing.

---

## ✅ 69. **Spread Operator (`...`)**

### 📘 Notes:

Spread operator expands iterable elements.

### Copy Array:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);
```

### Merge Arrays:

```javascript
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];
```

🎯 Interview Answer:

> Spread operator expands elements of arrays or iterables into individual values.

---

## ✅ 70. **Spread with Object Literals**

### 📘 Notes:

Used to copy or merge objects.

```javascript
let user = {
  name: "Shreya",
  age: 21
};

let updatedUser = {
  ...user,
  city: "Pune"
};

console.log(updatedUser);
```

### Override Values:

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, b: 5 };

console.log(obj2);
```

🎯 Interview Answer:

> Spread operator copies or merges object properties into a new object.

---



## ✅ 71. **Rest Operator (`...`)**

### 📘 Notes:

* The **rest operator** collects multiple values into a single array.
* Mostly used in **function parameters**.
* Opposite of the spread operator.

### 🔹 Syntax:

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

### Output:

```
[1, 2, 3, 4]
```

### Example — Sum Function:

```javascript
function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(add(1, 2, 3));
```

### Key Points:

* Must be the **last parameter**.
* Converts values into an array.

🎯 Interview Answer:

> The rest operator collects multiple arguments into a single array, allowing functions to accept unlimited parameters.

---

## ✅ 72. **Arguments Object (Not an Array but a Collection)**

### 📘 Notes:

* `arguments` is a special object available inside regular functions.
* Contains all passed arguments.
* It is **array-like**, but **NOT a real array**.

### Example:

```javascript
function show() {
  console.log(arguments);
}

show(10, 20, 30);
```

### Properties:

* Has index values.
* Has length property.
* Does NOT support array methods like map() or filter().

### Convert to Array:

```javascript
function demo() {
  let arr = Array.from(arguments);
  console.log(arr);
}
```

### Important:

❌ Not available in arrow functions.

🎯 Interview Answer:

> The arguments object stores all function arguments but is array-like, meaning it has indexes and length but lacks array methods.

---

## ✅ 73. **Destructuring (Array Destructuring)**

### 📘 Notes:

Destructuring extracts values from arrays into variables easily.

### Example:

```javascript
let colors = ["red", "green", "blue"];

let [first, second, third] = colors;

console.log(first);
```

### Skipping Values:

```javascript
let [a, , c] = colors;
console.log(c);
```

### Default Values:

```javascript
let [x = "default"] = [];
console.log(x);
```

### Key Advantage:

* Cleaner and readable code.

🎯 Interview Answer:

> Destructuring allows unpacking array values into individual variables using concise syntax.

---

## ✅ 74. **Destructuring of Objects**

### 📘 Notes:

Extract object properties into variables.

### Example:

```javascript
let user = {
  name: "Shreya",
  age: 21,
  city: "Pune"
};

let { name, age } = user;

console.log(name);
```

### Rename Variables:

```javascript
let { name: username } = user;

console.log(username);
```

### Default Values:

```javascript
let { country = "India" } = user;
console.log(country);
```

### Key Points:

* Variable names must match property names.
* Order does not matter.

🎯 Interview Answer:

> Object destructuring extracts properties from objects into variables using matching keys.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 71. **Rest Operator (`...`)**

### 📘 Notes:

* The **rest operator** (`...`) collects multiple values into a single array.
* Mainly used in **function parameters**.
* Opposite of the spread operator.
* Helps handle unknown number of arguments.

### 🔹 Syntax:

```javascript
function show(...values) {
  console.log(values);
}

show(1, 2, 3, 4);
```

### Output:

```
[1, 2, 3, 4]
```

### Example — Sum Function:

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(10, 20, 30));
```

### Key Points:

* Must always be the **last parameter**.
* Converts arguments into a real array.

🎯 Interview Answer:

> The rest operator collects multiple arguments into a single array, allowing functions to accept flexible numbers of parameters.

---

## ✅ 72. **Arguments (Not an Array but a Collection)**

### 📘 Notes:

* `arguments` is a special object available inside **regular functions**.
* Stores all passed arguments automatically.
* It is **array-like**, not an actual array.

### Example:

```javascript
function demo() {
  console.log(arguments);
}

demo(10, 20, 30);
```

### Properties:

* Has index positions.
* Has `length` property.
* Does NOT support array methods like `map()` or `filter()`.

### Convert into Array:

```javascript
function convert() {
  let arr = Array.from(arguments);
  console.log(arr);
}
```

### Important:

❌ Not available in arrow functions.

🎯 Interview Answer:

> The arguments object contains all function parameters but is array-like, meaning it has indexes and length but lacks array methods.

---

## ✅ 73. **Destructuring (Array Destructuring)**

### 📘 Notes:

Destructuring allows extracting values from arrays into variables easily.

### Example:

```javascript
let colors = ["red", "green", "blue"];

let [first, second, third] = colors;

console.log(first);
```

### Skipping Elements:

```javascript
let [a, , c] = colors;
console.log(c);
```

### Default Values:

```javascript
let [x = "default"] = [];
console.log(x);
```

### Key Benefits:

* Cleaner syntax.
* Improves readability.
* Reduces repetitive code.

🎯 Interview Answer:

> Array destructuring extracts values from arrays into individual variables using concise syntax.

---

## ✅ 74. **Object Destructuring**

### 📘 Notes:

Extract object properties directly into variables.

### Example:

```javascript
let user = {
  name: "Shreya",
  age: 21,
  city: "Nashik"
};

let { name, age } = user;

console.log(name);
```

### Rename Variables:

```javascript
let { name: username } = user;

console.log(username);
```

### Default Values:

```javascript
let { country = "India" } = user;
console.log(country);
```

### Key Points:

* Variable names must match object keys.
* Order does not matter.

🎯 Interview Answer:

> Object destructuring allows extracting object properties into variables using matching property names.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 75. **Document Object Model (DOM)**

### 📘 Notes:

* The **Document Object Model (DOM)** is a programming interface for web documents.
* It represents the HTML structure as a **tree of objects**.
* JavaScript can use the DOM to **access**, **modify**, **add**, or **delete** HTML elements dynamically.

### Example HTML:

```html
<body>
  <h1>Hello</h1>
</body>
```

DOM Representation:

```
Document
 └── html
      └── body
            └── h1
```

### What DOM Allows:

* Change content
* Change styles
* Handle events
* Create/remove elements

### Key Points:

* Browser automatically creates DOM when page loads.
* Each HTML tag becomes a DOM node.
* JavaScript interacts with webpage using DOM APIs.

🎯 Interview Answer:

> The DOM is a tree-like representation of an HTML document that allows JavaScript to dynamically access and manipulate webpage elements.

---

## ✅ 76. **Printing the Document Object**

### 📘 Notes:

* The entire webpage is represented by the **document object**.
* We can print it inside the browser console.

### Example:

```javascript
console.log(document);
```

### Output:

* Shows complete HTML structure.
* Helps inspect elements programmatically.

### Useful Properties:

```javascript
document.title
document.body
document.head
document.URL
```

### Example:

```javascript
console.log(document.title);
```

### Key Points:

* `document` is the root object of DOM.
* Available automatically in browsers.

🎯 Interview Answer:

> The document object represents the entire webpage, and console.log(document) prints the DOM structure for inspection and debugging.

---

## ✅ 77. **Selecting Elements in DOM**

Selecting elements means accessing HTML elements using JavaScript.

---

### 🔹 1. `getElementById()`

### 📘 Notes:

* Selects an element using its **id** attribute.
* IDs must be unique.

### Syntax:

```javascript
document.getElementById("idName");
```

### Example:

```html
<h1 id="title">Hello</h1>
```

```javascript
let heading = document.getElementById("title");
console.log(heading);
```

### Key Points:

* Returns a single element.
* Fast and commonly used.

🎯 Interview Answer:

> getElementById() selects a unique HTML element using its id attribute.

---

### 🔹 2. `getElementsByClassName()`

### 📘 Notes:

* Selects elements using class name.
* Returns an **HTMLCollection** (array-like object).

### Syntax:

```javascript
document.getElementsByClassName("className");
```

### Example:

```html
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
let items = document.getElementsByClassName("text");
console.log(items);
```

### Access Individual Element:

```javascript
items[0];
```

### Key Points:

* Multiple elements can share same class.
* Result is not a real array.

🎯 Interview Answer:

> getElementsByClassName() selects multiple elements sharing the same class and returns an HTMLCollection.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 75. **Document Object Model (DOM)**

### 📘 Notes:

* The **Document Object Model (DOM)** is a programming interface for web documents.
* It represents the HTML structure as a **tree of objects**.
* JavaScript can use the DOM to **access**, **modify**, **add**, or **delete** HTML elements dynamically.

### Example HTML:

```html
<body>
  <h1>Hello</h1>
</body>
```

DOM Representation:

```
Document
 └── html
      └── body
            └── h1
```

### What DOM Allows:

* Change content
* Change styles
* Handle events
* Create/remove elements

### Key Points:

* Browser automatically creates DOM when page loads.
* Each HTML tag becomes a DOM node.
* JavaScript interacts with webpage using DOM APIs.

🎯 Interview Answer:

> The DOM is a tree-like representation of an HTML document that allows JavaScript to dynamically access and manipulate webpage elements.

---

## ✅ 76. **Printing the Document Object**

### 📘 Notes:

* The entire webpage is represented by the **document object**.
* We can print it inside the browser console.

### Example:

```javascript
console.log(document);
```

### Output:

* Shows complete HTML structure.
* Helps inspect elements programmatically.

### Useful Properties:

```javascript
document.title
document.body
document.head
document.URL
```

### Example:

```javascript
console.log(document.title);
```

### Key Points:

* `document` is the root object of DOM.
* Available automatically in browsers.

🎯 Interview Answer:

> The document object represents the entire webpage, and console.log(document) prints the DOM structure for inspection and debugging.

---

## ✅ 77. **Selecting Elements in DOM**

Selecting elements means accessing HTML elements using JavaScript.

---

### 🔹 1. `getElementById()`

### 📘 Notes:

* Selects an element using its **id** attribute.
* IDs must be unique.

### Syntax:

```javascript
document.getElementById("idName");
```

### Example:

```html
<h1 id="title">Hello</h1>
```

```javascript
let heading = document.getElementById("title");
console.log(heading);
```

### Key Points:

* Returns a single element.
* Fast and commonly used.

🎯 Interview Answer:

> getElementById() selects a unique HTML element using its id attribute.

---

### 🔹 2. `getElementsByClassName()`

### 📘 Notes:

* Selects elements using class name.
* Returns an **HTMLCollection** (array-like object).

### Syntax:

```javascript
document.getElementsByClassName("className");
```

### Example:

```html
<p class="text">One</p>
<p class="text">Two</p>
```

```javascript
let items = document.getElementsByClassName("text");
console.log(items);
```

### Access Individual Element:

```javascript
items[0];
```

### Key Points:

* Multiple elements can share same class.
* Result is not a real array.

🎯 Interview Answer:

> getElementsByClassName() selects multiple elements sharing the same class and returns an HTMLCollection.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 78. **Manipulating Styles in DOM**

JavaScript allows dynamic styling of HTML elements using DOM properties and class manipulation.

---

### 🔹 1. Using `classList`

### 📘 Notes:

* `classList` is used to add, remove, or manage CSS classes.
* Cleaner and safer than modifying `className`.

### Example:

```javascript
let box = document.getElementById("box");

box.classList.add("active");
```

### Key Methods:

```javascript
element.classList.add("className");
element.classList.remove("className");
element.classList.contains("className");
element.classList.toggle("className");
```

🎯 Interview Answer:

> classList allows adding, removing, and managing CSS classes dynamically in JavaScript.

---

### 🔹 2. Reset Styles (Remove Class)

### 📘 Notes:

Removing a class resets styles applied by that class.

```javascript
box.classList.remove("active");
```

Or remove all classes:

```javascript
box.className = "";
```

🎯 Interview Answer:

> Styles can be reset by removing CSS classes using classList.remove().

---

### 🔹 3. Check if Class Exists

### 📘 Notes:

Use `contains()` to verify whether a class is present.

```javascript
box.classList.contains("active");
```

Returns:

* `true` → class exists
* `false` → class not present

🎯 Interview Answer:

> classList.contains() checks whether an element has a specific CSS class.

---

### 🔹 4. Toggle Between Add & Remove

### 📘 Notes:

`toggle()` automatically adds or removes a class.

```javascript
box.classList.toggle("dark");
```

If class exists → removed  
If class not exists → added

🎯 Interview Answer:

> classList.toggle() switches a class on and off automatically.

---

## ✅ 79. **DOM Navigation**

DOM navigation helps move between related elements.

---

### 🔹 1. Parent Element

### 📘 Notes:

Access parent node of an element.

```javascript
element.parentElement;
```

Example:

```javascript
let child = document.querySelector("p");
console.log(child.parentElement);
```

🎯 Interview Answer:

> parentElement returns the immediate parent of an HTML element.

---

### 🔹 2. Children Elements

### 📘 Notes:

Access child elements inside a parent.

```javascript
element.children;
```

Example:

```javascript
let list = document.querySelector("ul");
console.log(list.children);
```

🎯 Interview Answer:

> children property returns all child elements of a selected parent element.

---

### 🔹 3. Previous & Next Element Siblings

### 📘 Notes:

Access elements beside the current element.

```javascript
element.previousElementSibling;
element.nextElementSibling;
```

Example:

```javascript
let item = document.querySelector(".item");
console.log(item.nextElementSibling);
```

🎯 Interview Answer:

> previousElementSibling and nextElementSibling help navigate between adjacent elements in DOM.

---

## ✅ 80. **Adding Elements in DOM**

JavaScript can dynamically create and insert elements.

---

### 🔹 1. `appendChild()`

### 📘 Notes:

Adds a new child at the end of a parent element.

```javascript
let newEl = document.createElement("p");
newEl.innerText = "Hello";

document.body.appendChild(newEl);
```

🎯 Interview Answer:

> appendChild() adds a node as the last child of a parent element.

---

### 🔹 2. `append()` Function

### 📘 Notes:

More flexible than appendChild.

* Can add text or elements.
* Can add multiple items.

```javascript
element.append("Text");
element.append(newEl);
```

🎯 Interview Answer:

> append() inserts content at the end of an element and supports both nodes and text.

---

### 🔹 3. `prepend()`

### 📘 Notes:

Adds element at the beginning.

```javascript
element.prepend(newEl);
```

🎯 Interview Answer:

> prepend() inserts content at the start of a parent element.

---

### 🔹 4. `insertAdjacentElement(position, element)`

### 📘 Notes:

Inserts element relative to another element.

### Positions:

| Position | Meaning |
|----------|---------|
| beforebegin | before element |
| afterbegin | inside start |
| beforeend | inside end |
| afterend | after element |

### Example:

```javascript
element.insertAdjacentElement("beforebegin", newEl);
```

🎯 Interview Answer:

> insertAdjacentElement() inserts an element at a specified position relative to another element.

---

**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 78. **Manipulating Styles in DOM**

JavaScript allows dynamic styling of HTML elements using DOM properties and class manipulation.

---

### 🔹 1. Using `classList`

### 📘 Notes:

* `classList` is used to add, remove, or manage CSS classes.
* Cleaner and safer than modifying `className`.

### Example:

```javascript
let box = document.getElementById("box");

box.classList.add("active");
```

### Key Methods:

```javascript
element.classList.add("className");
element.classList.remove("className");
element.classList.contains("className");
element.classList.toggle("className");
```

🎯 Interview Answer:

> classList allows adding, removing, and managing CSS classes dynamically in JavaScript.

---

### 🔹 2. Reset Styles (Remove Class)

### 📘 Notes:

Removing a class resets styles applied by that class.

```javascript
box.classList.remove("active");
```

Or remove all classes:

```javascript
box.className = "";
```

🎯 Interview Answer:

> Styles can be reset by removing CSS classes using classList.remove().

---

### 🔹 3. Check if Class Exists

### 📘 Notes:

Use `contains()` to verify whether a class is present.

```javascript
box.classList.contains("active");
```

Returns:

* `true` → class exists
* `false` → class not present

🎯 Interview Answer:

> classList.contains() checks whether an element has a specific CSS class.

---

### 🔹 4. Toggle Between Add & Remove

### 📘 Notes:

`toggle()` automatically adds or removes a class.

```javascript
box.classList.toggle("dark");
```

If class exists → removed  
If class not exists → added

🎯 Interview Answer:

> classList.toggle() switches a class on and off automatically.

---

## ✅ 79. **DOM Navigation**

DOM navigation helps move between related elements.

---

### 🔹 1. Parent Element

### 📘 Notes:

Access parent node of an element.

```javascript
element.parentElement;
```

Example:

```javascript
let child = document.querySelector("p");
console.log(child.parentElement);
```

🎯 Interview Answer:

> parentElement returns the immediate parent of an HTML element.

---

### 🔹 2. Children Elements

### 📘 Notes:

Access child elements inside a parent.

```javascript
element.children;
```

Example:

```javascript
let list = document.querySelector("ul");
console.log(list.children);
```

🎯 Interview Answer:

> children property returns all child elements of a selected parent element.

---

### 🔹 3. Previous & Next Element Siblings

### 📘 Notes:

Access elements beside the current element.

```javascript
element.previousElementSibling;
element.nextElementSibling;
```

Example:

```javascript
let item = document.querySelector(".item");
console.log(item.nextElementSibling);
```

🎯 Interview Answer:

> previousElementSibling and nextElementSibling help navigate between adjacent elements in DOM.

---

## ✅ 80. **Adding Elements in DOM**

JavaScript can dynamically create and insert elements.

---

### 🔹 1. `appendChild()`

### 📘 Notes:

Adds a new child at the end of a parent element.

```javascript
let newEl = document.createElement("p");
newEl.innerText = "Hello";

document.body.appendChild(newEl);
```

🎯 Interview Answer:

> appendChild() adds a node as the last child of a parent element.

---

### 🔹 2. `append()` Function

### 📘 Notes:

More flexible than appendChild.

* Can add text or elements.
* Can add multiple items.

```javascript
element.append("Text");
element.append(newEl);
```

🎯 Interview Answer:

> append() inserts content at the end of an element and supports both nodes and text.

---

### 🔹 3. `prepend()`

### 📘 Notes:

Adds element at the beginning.

```javascript
element.prepend(newEl);
```

🎯 Interview Answer:

> prepend() inserts content at the start of a parent element.

---

### 🔹 4. `insertAdjacentElement(position, element)`

### 📘 Notes:

Inserts element relative to another element.

### Positions:

| Position | Meaning |
|----------|---------|
| beforebegin | before element |
| afterbegin | inside start |
| beforeend | inside end |
| afterend | after element |

### Example:

```javascript
element.insertAdjacentElement("beforebegin", newEl);
```

🎯 Interview Answer:

> insertAdjacentElement() inserts an element at a specified position relative to another element.

---

**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 81. **Removing Elements (DOM)**

JavaScript allows removing HTML elements dynamically from the webpage.

### 📘 Notes:

Elements can be removed using DOM methods.

### 🔹 `remove()` Method

Removes the selected element directly.

```javascript
let para = document.querySelector("p");
para.remove();
```

### 🔹 `removeChild()` Method

Removes a child from a parent element.

```javascript
let parent = document.querySelector("ul");
let child = document.querySelector("li");

parent.removeChild(child);
```

### 🎯 Interview Answer:

> Elements can be removed from the DOM using remove() or removeChild() methods.

---

## ✅ 82. **DOM Events**

Events are actions performed by users or browsers such as clicking, typing, or hovering.

---

### 🔹 1. `onclick` Event

Triggered when an element is clicked.

```html
<button onclick="sayHello()">Click</button>
```

```javascript
function sayHello() {
  console.log("Button Clicked");
}
```

🎯 Interview Answer:

> onclick event executes JavaScript code when a user clicks an element.

---

### 🔹 2. `onmouseenter` Event

Triggered when mouse pointer enters an element.

```javascript
let box = document.querySelector(".box");

box.onmouseenter = function () {
  console.log("Mouse entered");
};
```

🎯 Interview Answer:

> onmouseenter runs when the mouse pointer moves over an element.

---

## ✅ 83. **Event Listeners**

Event listeners attach events using JavaScript instead of HTML attributes.

### 📘 Notes:

Preferred modern method for handling events.

### Syntax:

```javascript
element.addEventListener("event", function);
```

### Example:

```javascript
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("Button clicked");
});
```

### Advantages:

* Multiple events can be added.
* Cleaner code separation.

🎯 Interview Answer:

> addEventListener() attaches event handlers dynamically and allows multiple listeners on the same element.

---

## ✅ 84. **`this` in Event Listeners**

### 📘 Notes:

Inside an event listener, `this` refers to the element that triggered the event.

### Example:

```javascript
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});
```

Here, `this` = button element.

⚠️ Arrow functions behave differently (they do not bind `this`).

```javascript
btn.addEventListener("click", () => {
  console.log(this); // not button
});
```

🎯 Interview Answer:

> In event listeners, this refers to the element receiving the event when using a normal function.

---

## ✅ 85. **Keyboard Events**

Keyboard events occur when keys are pressed or released.

### Common Keyboard Events:

| Event | Description |
|------|-------------|
| keydown | key pressed |
| keyup | key released |
| keypress | key typed |

### Example:

```javascript
document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
```

🎯 Interview Answer:

> Keyboard events detect user key actions using events like keydown and keyup.

---

## ✅ 86. **Event Bubbling**

### 📘 Notes:

Event bubbling means events propagate from child → parent elements.

### Example:

```javascript
document.querySelector("div").addEventListener("click", () => {
  console.log("DIV clicked");
});

document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked");
});
```

Clicking button prints:

```
Button clicked
DIV clicked
```

### Stop Bubbling:

```javascript
event.stopPropagation();
```

🎯 Interview Answer:

> Event bubbling is the process where an event moves upward through parent elements in the DOM hierarchy.

---

## ✅ 87. **Event Delegation**

### 📘 Notes:

Event delegation attaches a single event listener to a parent instead of multiple children.

Useful for dynamically added elements.

### Example:

```javascript
document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked");
  }
});
```

### Advantages:

* Better performance
* Handles dynamic elements
* Less memory usage

🎯 Interview Answer:

> Event delegation uses event bubbling to handle events at a parent level instead of adding listeners to multiple child elements.

---
**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 88. **Call Stack**

### 📘 Notes:

* The **call stack** is a data structure used by JavaScript to keep track of function execution.
* It follows **LIFO (Last In First Out)** principle.
* When a function is called → pushed into stack.
* When execution finishes → removed from stack.

### Example:

```javascript
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

Execution Order in Stack:

```
one() → two() → console.log()
```

### Stack Overflow:

Occurs when too many function calls happen without stopping (infinite recursion).

🎯 Interview Answer:

> The call stack is a mechanism that tracks function execution order using a Last In First Out structure.

---

## ✅ 89. **Breakpoints**

### 📘 Notes:

* Breakpoints are used in browser developer tools for debugging.
* They pause JavaScript execution at a specific line.
* Helps inspect variables and program flow.

### How to Use:

1. Open DevTools → Sources tab.
2. Click line number.
3. Code pauses during execution.

### Using `debugger` keyword:

```javascript
let x = 10;
debugger;
console.log(x);
```

🎯 Interview Answer:

> Breakpoints pause program execution to help developers debug and inspect code behavior.

---

## ✅ 90. **JavaScript is Single-Threaded**

### 📘 Notes:

* JavaScript runs on **one main thread**.
* Executes **one task at a time**.
* Uses **call stack** for execution.

Example:

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```
A
B
C
```

### Why Important?

Prevents race conditions but requires async handling for long tasks.

🎯 Interview Answer:

> JavaScript is single-threaded because it executes one instruction at a time using a single call stack.

---

## ✅ 91. **Asynchronous Behaviour of JavaScript**

### 📘 Notes:

Even though JS is single-threaded, it handles async tasks using:

* Web APIs
* Callback Queue
* Event Loop

### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Async Task
```

### Flow:

1. Async task goes to Web API.
2. Moves to callback queue.
3. Event loop pushes it to call stack when free.

🎯 Interview Answer:

> JavaScript handles asynchronous operations using the event loop, allowing non-blocking execution despite being single-threaded.

---

## ✅ 92. **Callback Hell**

### 📘 Notes:

Callback hell happens when multiple nested callbacks make code hard to read and maintain.

### Example:

```javascript
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
```

Problems:

* Hard to read
* Difficult debugging
* Poor maintainability

### Solution:

* Promises
* Async/Await

🎯 Interview Answer:

> Callback hell refers to deeply nested callbacks that reduce code readability and are solved using promises or async/await.

---

## ✅ 93. **Promises — Resolve & Reject**

### 📘 Notes:

A **Promise** represents a future result of an asynchronous operation.

### States:

| State | Meaning |
|------|---------|
| Pending | initial state |
| Fulfilled | resolved successfully |
| Rejected | error occurred |

### Creating Promise:

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
```

### Using Promise:

```javascript
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

🎯 Interview Answer:

> A Promise handles asynchronous operations with resolve for success and reject for failure.

---

## ✅ 94. **Request Using `.then()`**

### 📘 Notes:

`.then()` executes when a promise is resolved.

Commonly used for API requests.

### Example:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Flow:

1. Request sent.
2. Promise returned.
3. `.then()` handles success.
4. `.catch()` handles error.

🎯 Interview Answer:

> The .then() method is used to handle successful promise results, commonly used in API requests.

---

**important JavaScript fundamentals**—commonly asked in placements.

---

## ✅ 88. **Call Stack**

### 📘 Notes:

* The **call stack** is a data structure used by JavaScript to keep track of function execution.
* It follows **LIFO (Last In First Out)** principle.
* When a function is called → pushed into stack.
* When execution finishes → removed from stack.

### Example:

```javascript
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

Execution Order in Stack:

```
one() → two() → console.log()
```

### Stack Overflow:

Occurs when too many function calls happen without stopping (infinite recursion).

🎯 Interview Answer:

> The call stack is a mechanism that tracks function execution order using a Last In First Out structure.

---

## ✅ 89. **Breakpoints**

### 📘 Notes:

* Breakpoints are used in browser developer tools for debugging.
* They pause JavaScript execution at a specific line.
* Helps inspect variables and program flow.

### How to Use:

1. Open DevTools → Sources tab.
2. Click line number.
3. Code pauses during execution.

### Using `debugger` keyword:

```javascript
let x = 10;
debugger;
console.log(x);
```

🎯 Interview Answer:

> Breakpoints pause program execution to help developers debug and inspect code behavior.

---

## ✅ 90. **JavaScript is Single-Threaded**

### 📘 Notes:

* JavaScript runs on **one main thread**.
* Executes **one task at a time**.
* Uses **call stack** for execution.

Example:

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```
A
B
C
```

### Why Important?

Prevents race conditions but requires async handling for long tasks.

🎯 Interview Answer:

> JavaScript is single-threaded because it executes one instruction at a time using a single call stack.

---

## ✅ 91. **Asynchronous Behaviour of JavaScript**

### 📘 Notes:

Even though JS is single-threaded, it handles async tasks using:

* Web APIs
* Callback Queue
* Event Loop

### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Async Task
```

### Flow:

1. Async task goes to Web API.
2. Moves to callback queue.
3. Event loop pushes it to call stack when free.

🎯 Interview Answer:

> JavaScript handles asynchronous operations using the event loop, allowing non-blocking execution despite being single-threaded.

---

## ✅ 92. **Callback Hell**

### 📘 Notes:

Callback hell happens when multiple nested callbacks make code hard to read and maintain.

### Example:

```javascript
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
```

Problems:

* Hard to read
* Difficult debugging
* Poor maintainability

### Solution:

* Promises
* Async/Await

🎯 Interview Answer:

> Callback hell refers to deeply nested callbacks that reduce code readability and are solved using promises or async/await.

---

## ✅ 93. **Promises — Resolve & Reject**

### 📘 Notes:

A **Promise** represents a future result of an asynchronous operation.

### States:

| State | Meaning |
|------|---------|
| Pending | initial state |
| Fulfilled | resolved successfully |
| Rejected | error occurred |

### Creating Promise:

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
```

### Using Promise:

```javascript
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

🎯 Interview Answer:

> A Promise handles asynchronous operations with resolve for success and reject for failure.

---

## ✅ 94. **Request Using `.then()`**

### 📘 Notes:

`.then()` executes when a promise is resolved.

Commonly used for API requests.

### Example:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Flow:

1. Request sent.
2. Promise returned.
3. `.then()` handles success.
4. `.catch()` handles error.

🎯 Interview Answer:

> The .then() method is used to handle successful promise results, commonly used in API requests.

---

