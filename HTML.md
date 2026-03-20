## ✅ 1. What is Node.js?

### 📘 Notes
Node.js is a runtime environment that lets you run JavaScript outside the browser (like in terminal/servers).

It is built on Google Chrome’s **V8 engine**, which converts JavaScript into machine code.

Node uses an **event-driven, non-blocking I/O model**, making it ideal for scalable server-side applications.

### ✅ Key Points
- Written using C++, JavaScript, and libuv
- Used to build APIs, servers, and real-time apps (chat apps, streaming apps)

### 🎯 Interview Answer
Node.js is an open-source JavaScript runtime environment that runs on the V8 engine, allowing JavaScript execution outside the browser. It is widely used for backend development because its event-driven and non-blocking architecture makes it scalable and efficient for I/O-heavy applications.

---

## ✅ 2. What is Node REPL?

### 📘 Notes
REPL = **Read – Eval – Print – Loop**

It is a command-line interface where JavaScript code runs line by line.

Used for:
- Testing snippets
- Debugging
- Learning Node quickly

### 🔹 Open REPL
```bash
node
```

### 🎯 Interview Answer
REPL in Node.js stands for Read-Eval-Print Loop. It is an interactive shell that reads input, evaluates it, prints the result, and repeats the process until exited.

---

## ✅ 3. Running Node Files

### 📘 Notes
Create a `.js` file and run it using:

```bash
node file.js
```

### Example
```js
// hello.js
console.log("Hello, Node!");
```

```bash
node hello.js
```

### 🎯 Interview Tip
To run a Node script:
> `node filename.js`

---

## ✅ 4. Process in Node.js

### 📘 Notes
`process` is a global object providing information about the running Node process.

### Common Uses
```js
console.log(process.argv); // command arguments
console.log(process.env);  // environment variables
process.exit();            // stop program
```

### 🎯 Interview Answer
The process object provides information and control over the current Node.js execution, including command-line arguments, environment variables, and runtime control.

---

## ✅ 5. Exporting in Node.js (Modules)

### 📘 Notes
Every `.js` file in Node.js is a module.

Use `module.exports` to share code between files.

### Example
```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

```js
// app.js
const add = require('./math');
console.log(add(2, 3)); // 5
```

### 🎯 Interview Answer
`module.exports` is used to export functions or variables so they can be reused in other files using CommonJS modules.

---

## ✅ 6. Exporting from Directories (index.js Pattern)

### 📘 Notes
`index.js` centralizes exports inside folders.

### Example
```js
// math/add.js
module.exports = (a, b) => a + b;
```

```js
// math/index.js
const add = require('./add');
module.exports = { add };
```

```js
// app.js
const { add } = require('./math');
```

### 🎯 Interview Tip
Using `index.js` simplifies imports and improves project structure.

---

## ✅ 7. What is npm?

### 📘 Notes
npm = **Node Package Manager**

Used to install libraries like Express.

Comes preinstalled with Node.js.

### Commands
```bash
npm init
npm install xyz
```

### 🎯 Interview Answer
npm is the default package manager for Node.js used to manage dependencies and install libraries required in projects.

---

## ✅ 8. What is package.json?

### 📘 Notes
Created using:

```bash
npm init
```

Stores:
- Project metadata
- Dependencies
- Scripts

### Example
```json
{
  "name": "myapp",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### 🎯 Interview Answer
package.json is the configuration file that stores project details, dependencies, and scripts required to run a Node.js application.

---

## ✅ 9. Local vs Global Installation

### 📘 Notes

**Local Install**
```bash
npm install express
```
- Installed inside project
- Stored in `node_modules`

**Global Install**
```bash
npm install -g nodemon
```
- Available system-wide
- Used mainly for CLI tools

---

## ✅ 10. Importing Modules

### 📘 Notes
Node.js uses **CommonJS modules**.

```js
const fs = require('fs');
```

Used to import built-in or custom modules.

---

# 🌐 HTML Basics

## 1. Why HTML is Important

- Every website starts with HTML.
- Browser converts HTML → DOM (Document Object Model).
- JavaScript interacts with the DOM.
- Without HTML → No webpage.

---

## 2. HTML Elements

An HTML element consists of:

```
Start Tag + Content + End Tag
```

Example:
```html
<p>This is a paragraph</p>
```

### Structure
- `<p>` → Opening tag
- Content → Text
- `</p>` → Closing tag

---

## Types of Elements

### Container Elements
```html
<p></p>
<div></div>
```

### Empty (Void) Elements
```html
<img>
<br>
<hr>
```

---

## 3. HTML Boilerplate (VERY IMPORTANT)

```html
<!DOCTYPE html>
<html>
<head>
   <title>My Page</title>
</head>
<body>
   Content here
</body>
</html>
```

### Explanation

**`<!DOCTYPE html>`**
- Defines HTML5 document
- Prevents compatibility issues

**`<html>`**
- Root element

**`<head>`**
- Metadata
- CSS links
- SEO info

**`<title>`**
- Appears in browser tab
- Helps SEO ranking

**`<body>`**
- Visible webpage content

---

## Anchor Tag

```html
<a href="https://google.com">Visit</a>
```

- `href` → destination link

---

## Image Tag

```html
<img src="image.jpg" alt="profile">
```

| Attribute | Purpose |
|-----------|---------|
| src | image path |
| alt | alternative text |

### Why `alt` is Important
- Accessibility
- Screen readers
