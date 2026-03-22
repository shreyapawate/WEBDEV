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

# ⭐ JavaScript Interview Revision Summary

* JavaScript makes webpages interactive.
* Console is used for debugging.
* REPL allows quick testing.
* Variables store data values.
* JavaScript has dynamic data types.
* Numbers follow floating-point representation.
* Operators perform calculations.
* NaN represents invalid numeric results.
* Operator precedence controls execution order.
