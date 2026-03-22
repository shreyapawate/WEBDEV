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

