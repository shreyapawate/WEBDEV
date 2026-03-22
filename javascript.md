✅ 1. What is JavaScript?
📘 Notes

JavaScript is a high-level programming language used to add interactivity and logic to web pages.

It runs inside browsers and also outside browsers using Node.js.

JavaScript is:

Interpreted language
Event-driven
Single-threaded
Dynamically typed
Technology	Role
HTML	Structure
CSS	Styling
JavaScript	Behaviour & Logic
🔹 Example
console.log("Hello JavaScript");

Browser prints output in the console.

🎯 Interview Answer

JavaScript is a scripting language used to create dynamic and interactive web pages. It runs inside browsers using JavaScript engines and can also run on servers using Node.js.

✅ 2. Console in JavaScript
📘 Notes

The console is used for debugging and displaying program output.

Common Console Methods
console.log("Message");
console.error("Error");
console.warn("Warning");
console.table([1,2,3]);
Access Console

Browser → Developer Tools → Console tab.

🎯 Interview Answer

The console object is used to print output and debug JavaScript programs during development.

✅ 3. REPL (Read–Eval–Print Loop)
📘 Notes

REPL stands for:

Read → takes input
Evaluate → executes code
Print → shows output
Loop → repeats

Used in browser console and Node.js terminal.

Example
node
2 + 2

Output:

4
🎯 Interview Answer

REPL is an interactive environment that reads JavaScript input, evaluates it, prints the result, and repeats continuously.

✅ 4. Variables in JavaScript
📘 Notes

Variables store data values.

Declaration Methods
var a = 10;
let b = 20;
const c = 30;
Keyword	Scope	Reassign	Redeclare
var	function	Yes	Yes
let	block	Yes	No
const	block	No	No
Best Practice
Use const by default
Use let when value changes
Avoid var
🎯 Interview Answer

Variables are containers used to store data values. Modern JavaScript prefers let and const because they provide block scope and safer behavior.

✅ 5. Data Types in JavaScript
📘 Notes

JavaScript uses dynamic typing.

Primitive Data Types
String
Number
Boolean
Undefined
Null
BigInt
Symbol
Example
let name = "Shreya";
let age = 21;
let isStudent = true;
Non-Primitive Types
Object
Array
Function
🎯 Interview Answer

JavaScript data types are categorized into primitive and non-primitive types. Primitive types store single values, while objects store collections of data.

✅ 6. Numbers in JavaScript
📘 Notes

JavaScript has only one numeric type → Number.

let x = 10;
let y = 3.14;
Special Numeric Values
Infinity
-Infinity
NaN
Useful Methods
Number("123");
parseInt("10");
parseFloat("3.5");
🎯 Interview Tip

JavaScript does not differentiate between integers and floating numbers.

✅ 7. Operations in JavaScript
Arithmetic Operators
+   // addition
-   // subtraction
*   // multiplication
/   // division
%   // modulus
**  // exponent

Example:

5 + 2;   // 7
5 % 2;   // 1
Comparison Operators
==
===
!=
>
<

Important difference:

5 == "5";   // true
5 === "5";  // false
🎯 Interview Answer

Operators are symbols used to perform calculations, comparisons, and logical operations on values.

✅ 8. NaN (Not a Number)
📘 Notes

NaN represents an invalid numeric result.

Example
0 / 0;
Number("hello");

Output:

NaN

Special property:

typeof NaN; // "number"

Check NaN:

Number.isNaN(value);
🎯 Interview Answer

NaN stands for Not a Number and represents the result of an invalid mathematical operation.

✅ 9. Operator Precedence
📘 Notes

Operator precedence determines execution order.

Example
2 + 3 * 4;

Output:

14

Multiplication executes before addition.

Common Order (High → Low)
Parentheses ()
Exponent **
* / %
+ -
Comparison operators
Logical operators

Best practice:

(2 + 3) * 4;
🎯 Interview Answer

Operator precedence defines the order in which operators are evaluated in JavaScript expressions.
