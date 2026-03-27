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

