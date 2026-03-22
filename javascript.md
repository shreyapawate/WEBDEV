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

