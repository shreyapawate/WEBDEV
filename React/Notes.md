# React Fundamentals

> This section lays the foundation for React. Understanding these concepts thoroughly is crucial for interviews, project development, and advanced React topics.

---

# Table of Contents

1. What is React?
2. Why React was Created?
3. Problems with Vanilla JavaScript
4. SPA vs MPA
5. React Architecture
6. React Project Structure
7. Component-Based Architecture
8. React Rendering Process
9. Interview Questions
10. Quick Revision Notes

---

# What is React?

React is an open-source JavaScript library used for building User Interfaces (UI), especially for Single Page Applications (SPA).

It was developed by Meta (formerly Facebook) to simplify the process of building dynamic and interactive web applications.

React focuses only on the View layer of an application (UI layer).

---

## Official Definition

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

---

## Key Characteristics of React

### Declarative

Instead of manually manipulating the DOM, developers describe what the UI should look like.

#### Imperative Approach (Vanilla JavaScript)

```javascript
const heading = document.getElementById("heading");
heading.innerText = "Hello";
heading.style.color = "red";
```

Developer manually instructs every step.

---

#### Declarative Approach (React)

```jsx
<h1 style={{ color: "red" }}>
  Hello
</h1>
```

React handles DOM updates automatically.

---

### Component-Based

UI is divided into reusable pieces called components.

Example:

```text
Website
│
├── Navbar
├── Sidebar
├── Content
└── Footer
```

Each section can be built independently.

---

### Learn Once, Write Anywhere

React concepts can be applied to:

- React Web
- React Native
- Next.js
- Electron Apps

---

## Why React Became Popular

### Before React

Developers manually:

- Created elements
- Updated elements
- Removed elements
- Managed UI state

This became difficult for large applications.

---

### After React

React introduced:

- Components
- Virtual DOM
- State Management
- Efficient Rendering

Making development much easier.

---

# Why React Was Created?

To understand React, we need to understand the problems developers faced before React.

---

## Early Web Applications

Initially websites were simple:

```text
Home
About
Contact
```

Mostly static pages.

---

## Modern Applications

Applications became dynamic:

Examples:

- Gmail
- Facebook
- Instagram
- Netflix
- YouTube

Requirements:

- Live updates
- Notifications
- Chat systems
- Dynamic content

Managing these manually became difficult.

---

## Problems Faced

### Problem 1: Complex DOM Manipulation

Example:

```javascript
document.createElement();
document.appendChild();
document.removeChild();
```

For large applications, this became messy.

---

### Problem 2: Code Duplication

Same UI repeated multiple times.

Example:

```text
User Card
User Card
User Card
User Card
```

No reusable architecture.

---

### Problem 3: Poor Performance

Entire DOM often updated unnecessarily.

Result:

- Slow applications
- Poor user experience

---

### Problem 4: State Management

Managing changing data became complicated.

Examples:

- Shopping Cart
- User Authentication
- Notifications

---

## React's Solution

React introduced:

### Virtual DOM

Updates only changed parts.

### Components

Reusable UI blocks.

### State

Built-in state management.

### One-Way Data Flow

Predictable data movement.

---

# Problems with Vanilla JavaScript

Vanilla JavaScript is powerful but becomes difficult for large applications.

---

## 1. Manual DOM Manipulation

Example:

```javascript
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
```

Every update requires manual coding.

---

## 2. Difficult Maintenance

Imagine:

```text
Dashboard
├── Profile
├── Notifications
├── Messages
├── Settings
```

Updating interconnected sections becomes difficult.

---

## 3. Poor Reusability

Creating reusable UI components is challenging.

---

## 4. State Synchronization Problems

Keeping UI and data synchronized manually is error-prone.

Example:

```javascript
cartCount++;
updateCartUI();
```

Developer responsible for everything.

---

## 5. Scalability Issues

As application grows:

- More files
- More DOM updates
- More bugs

Maintenance becomes difficult.

---

# SPA vs MPA

One of the most important interview topics.

---

# Single Page Application (SPA)

An SPA loads a single HTML page and updates content dynamically without refreshing the entire page.

Examples:

- Gmail
- Facebook
- Instagram
- Netflix

---

## How SPA Works

```text
Browser
    ↓
index.html
    ↓
React Application Loaded
    ↓
UI Updates Dynamically
```

---

## Advantages

### Faster Navigation

No full-page reload.

---

### Better User Experience

Feels like a desktop application.

---

### Reduced Server Requests

Only required data is fetched.

---

## Disadvantages

### Initial Load Time

Large JavaScript bundle.

---

### SEO Challenges

Search engines may struggle with client-side rendering.

---

# Multi Page Application (MPA)

Each request loads a completely new page.

Examples:

- Traditional websites
- Government portals

---

## How MPA Works

```text
User Clicks Link
      ↓
Server Sends New HTML
      ↓
Browser Reloads
```

---

## Advantages

### Better SEO

Each page has separate HTML.

---

### Easier Initial Loading

Smaller page sizes.

---

## Disadvantages

### Slower Navigation

Entire page reloads.

---

# SPA vs MPA Comparison

| Feature | SPA | MPA |
|----------|------|------|
| Reload Required | No | Yes |
| User Experience | Better | Moderate |
| Speed | Faster | Slower |
| SEO | Difficult | Better |
| Development Complexity | Higher | Lower |
| Examples | Gmail, Facebook | Traditional Websites |

---

# React Architecture

React follows a Component-Based Architecture.

---

## High-Level Architecture

```text
Application
│
├── Components
│
├── State
│
├── Props
│
├── Hooks
│
├── Router
│
└── API Layer
```

---

## Typical React Application

```text
App
│
├── Navbar
├── Sidebar
├── Main
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
│
└── Footer
```

---

## Benefits

### Separation of Concerns

Each component has one responsibility.

---

### Reusability

Same component can be used multiple times.

---

### Maintainability

Code becomes easier to manage.

---

# React Project Structure

There is no strict rule, but industry follows a structured approach.

---

## Basic Structure

```text
my-app/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── assets/
│   ├── App.js
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## public Folder

Contains static files.

Example:

```text
public/
├── index.html
├── favicon.ico
```

---

## src Folder

Contains application source code.

---

### components/

Reusable UI components.

Example:

```text
components/
├── Navbar.jsx
├── Footer.jsx
├── Button.jsx
```

---

### pages/

Page-level components.

```text
pages/
├── Home.jsx
├── About.jsx
├── Contact.jsx
```

---

### hooks/

Custom Hooks.

```text
hooks/
├── useFetch.js
├── useAuth.js
```

---

### services/

API logic.

```text
services/
├── userService.js
├── productService.js
```

---

### context/

Global state.

```text
context/
├── AuthContext.jsx
```

---

### assets/

Images, icons, fonts.

```text
assets/
├── logo.png
├── banner.jpg
```

---

# Component-Based Architecture

One of React's strongest features.

---

## What is a Component?

A component is a reusable piece of UI.

Example:

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

---

## Real-World Example

Imagine building a website.

Without components:

```text
Navbar code repeated
Footer code repeated
Sidebar code repeated
```

With components:

```text
Navbar Component
Footer Component
Sidebar Component
```

Reuse anywhere.

---

## Component Hierarchy

```text
App
│
├── Navbar
│
├── Dashboard
│   ├── Profile
│   ├── Notifications
│   └── Settings
│
└── Footer
```

---

## Benefits

### Reusability

Write once, use many times.

---

### Maintainability

Easy updates.

---

### Scalability

Large projects become manageable.

---

### Testability

Components can be tested independently.

---

# React Rendering Process

One of the most important interview topics.

---

## What is Rendering?

Rendering means converting React components into UI visible on the screen.

---

# Step 1: Component Creation

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

React creates a component tree.

---

# Step 2: Virtual DOM Creation

React creates a Virtual DOM representation.

```text
Virtual DOM
     ↓
<h1>Hello React</h1>
```

---

# Step 3: Initial Render

Virtual DOM converted into Real DOM.

```text
Virtual DOM
     ↓
Real DOM
     ↓
Browser Screen
```

---

# Step 4: State Change

Example:

```jsx
setCount(count + 1);
```

State updates.

---

# Step 5: New Virtual DOM

React creates a new Virtual DOM tree.

---

# Step 6: Diffing

React compares:

```text
Old Virtual DOM
        vs
New Virtual DOM
```

This process is called Diffing.

---

# Step 7: Reconciliation

React determines:

```text
What changed?
What didn't change?
```

Only changed elements are updated.

---

# Step 8: Real DOM Update

Only affected nodes are modified.

This is why React is fast.

---

## Complete Flow

```text
Component Render
        ↓
Virtual DOM Created
        ↓
Real DOM Rendered
        ↓
State Change
        ↓
New Virtual DOM
        ↓
Diffing
        ↓
Reconciliation
        ↓
Minimal DOM Update
```

---

# Interview Questions

## What is React?

React is a JavaScript library used for building user interfaces using reusable components.

---

## Why was React created?

To solve problems like:

- Complex DOM manipulation
- Poor performance
- Lack of reusable architecture
- Difficult state management

---

## What is SPA?

A Single Page Application loads a single HTML page and updates content dynamically.

---

## Difference Between SPA and MPA?

SPA updates content without reloading.

MPA loads a new page on every request.

---

## What is Component-Based Architecture?

A design approach where UI is divided into reusable independent components.

---

## What is Rendering in React?

The process of converting React components into UI displayed in the browser.

---

## What is Virtual DOM?

A lightweight JavaScript representation of the Real DOM used for efficient updates.

---
# JSX Deep Dive (Quick Placement Revision Notes)

> This is a **concise revision version** of JSX Deep Dive covering only essential points for interviews and exams.

---

# 1. What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;
```

### Key Point:
JSX is NOT HTML. It is syntactic sugar for `React.createElement()`.

---

# 2. Why JSX was Introduced?

Before JSX:

```javascript
React.createElement("h1", null, "Hello");
```

Problems:
- Hard to read
- Verbose
- Difficult to maintain

JSX solves this by making UI code readable and HTML-like.

---

# 3. How JSX Works Internally?

```text
JSX Code
   ↓
Babel Transpilation
   ↓
React.createElement()
   ↓
Virtual DOM Object
   ↓
Real DOM
```

JSX is converted into JavaScript before execution.

---

# 4. Babel Conversion

Example:

```jsx
const el = <h1>Hello</h1>;
```

Becomes:

```javascript
const el = React.createElement("h1", null, "Hello");
```

---

# 5. JSX Rules (Important)

## Rule 1: Single Parent Element

❌ Wrong:
```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

✅ Correct:
```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

## Rule 2: Close all tags

```jsx
<img />
<input />
```

---

## Rule 3: className instead of class

```jsx
<div className="box"></div>
```

---

## Rule 4: htmlFor instead of for

```jsx
<label htmlFor="name"></label>
```

---

## Rule 5: Use camelCase attributes

```jsx
onClick, tabIndex, readOnly
```

---

## Rule 6: Use {} for JS expressions

```jsx
<h1>{name}</h1>
```

---

# 6. Expressions in JSX

JSX allows JavaScript expressions inside `{}`.

### Examples:

```jsx
<h1>{10 + 20}</h1>
<h1>{user.name}</h1>
<h1>{isLoggedIn ? "Yes" : "No"}</h1>
```

### Not allowed:
```jsx
<h1>{user}</h1> // object not allowed
```

---

# 7. Fragments

Used to avoid extra DOM nodes.

### Without Fragment:
```jsx
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
```

### With Fragment:
```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

# 8. Conditional JSX

## Ternary Operator (Most Used)

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

## Logical AND

```jsx
{isAdmin && <AdminPanel />}
```

---

# 9. JSX vs HTML

| Feature | HTML | JSX |
|--------|------|-----|
| Read by browser | Yes | No |
| JavaScript support | No | Yes |
| class attribute | class | className |
| for attribute | for | htmlFor |
| Expressions | No | Yes |

---

# 10. Common JSX Errors

## 1. Multiple elements without wrapper
```
Adjacent JSX elements must be wrapped
```

## 2. Objects not allowed in JSX
```
Objects are not valid as React child
```

## 3. Using class instead of className

---

# 11. JSX Interview Questions

### Q1. What is JSX?
JSX is a syntax extension that allows writing HTML-like code in JavaScript.

---

### Q2. Does browser understand JSX?
No. Babel converts JSX into JavaScript.

---

### Q3. What does JSX compile to?
`React.createElement()`.

---

### Q4. Why use JSX?
- Better readability
- Easier debugging
- Cleaner UI code

---

### Q5. Why must JSX have one parent element?
Because a React component must return a single root element.

---

### Q6. What is Fragment?
A wrapper that avoids extra DOM nodes.

---

# React State Management (Quick Placement Notes)

> State is one of the most important React concepts. It is heavily asked in interviews and is the core of dynamic UI behavior.

---

# 1. What is State?

State is a **built-in object in React** that holds **dynamic data** of a component.

### Example:

```jsx
const [count, setCount] = useState(0);
```

### Key Point:
- State controls UI changes
- When state changes → component re-renders

---

# 2. Why State Exists?

Without state:

- UI cannot update dynamically
- No re-render on data change
- Static applications only

### Example Problem:

If counter value changes, UI should update automatically.

State solves this:

```jsx
setCount(count + 1);
```

---

# 3. State Lifecycle

State goes through 3 main phases:

## 1. Initialization

```jsx
const [count, setCount] = useState(0);
```

---

## 2. Update Phase

```jsx
setCount(5);
```

---

## 3. Re-render Phase

React re-renders component with updated state.

---

### Flow:

```text
State Change
   ↓
Component Re-render
   ↓
UI Update
```

---

# 4. State vs Props

| Feature | State | Props |
|--------|------|------|
| Managed by | Component | Parent |
| Mutable | Yes | No |
| Purpose | Dynamic data | Data passing |
| Updates UI | Yes | Yes |

---

### Example:

```jsx
// Props
<User name="Shreya" />

// State
const [name, setName] = useState("Shreya");
```

---

# 5. State Updates

State updates are NOT immediate.

### Example:

```jsx
setCount(count + 1);
console.log(count); // may not reflect updated value
```

---

### Why?

React batches state updates for performance.

---

# 6. Batching

Batching means React **groups multiple state updates into a single re-render**.

---

### Example:

```jsx
setCount(c => c + 1);
setFlag(true);
setName("React");
```

React will:

```text
Combine updates → Single Re-render
```

---

### Benefits:

- Better performance
- Fewer re-renders
- Optimized UI updates

---

# 7. Functional Updates

Used when new state depends on previous state.

---

### Problem:

```jsx
setCount(count + 1);
setCount(count + 1);
```

May NOT give correct result due to batching.

---

### Solution:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

---

### Why it works:

React guarantees correct previous state value.

---

# 8. State Management Patterns

Different ways to manage state depending on app size.

---

## 1. Local State

State inside a component.

```jsx
const [count, setCount] = useState(0);
```

### Use case:
- Small components
- Forms
- Toggles

---

## 2. Lifting State Up

Move state to common parent.

```text
Child A ← Parent → Child B
```

### Use case:
- Shared data between components

---

## 3. Props Passing

Pass state as props to child components.

```jsx
<Child count={count} />
```

---

## 4. Context API (Global State)

Used to avoid props drilling.

```jsx
const ThemeContext = createContext();
```

### Use case:
- Auth state
- Theme
- User data

---

## 5. External State Management (Redux)

Used for large applications.

### Use case:
- Complex global state
- Large scale apps

---

# 9. Key Interview Points

### Q1. What is state?

State is a built-in object that stores dynamic data in a component.

---

### Q2. Why state is needed?

To make UI dynamic and interactive.

---

### Q3. Does state update immediately?

No. State updates are asynchronous and batched.

---

### Q4. What is batching?

Grouping multiple state updates into a single re-render.

---

### Q5. What are functional updates?

Updating state using previous state value:

```jsx
setCount(prev => prev + 1);
```

---

### Q6. Difference between state and props?

| State | Props |
|------|------|
| Internal data | External data |
| Mutable | Immutable |
| Controlled by component | Controlled by parent |

---
# React Event Handling, Forms, Lists & Keys (Placement Notes)

> This section covers how React handles user interactions, forms, and dynamic rendering—very important for interviews and real-world projects.

---

# SECTION 6: EVENT HANDLING

---

# 1. Synthetic Events

React wraps native browser events into a **Synthetic Event system**.

### Why?

To ensure:
- Cross-browser compatibility
- Consistent behavior
- Better performance

---

### Example:

```jsx
function handleClick(e) {
  console.log(e); // SyntheticEvent
}

<button onClick={handleClick}>Click</button>
```

---

### Key Point:
Synthetic events behave like native events but are standardized by React.

---

# 2. Event Pooling (Older Concept)

React used to reuse event objects for performance.

### Meaning:
Event object was cleared after event handler execution.

```jsx
e.target.value // may become null later (old React versions)
```

---

### Note:
Event pooling is **removed in React 17+**, but still asked in interviews.

---

# 3. Event Bubbling

Event moves from **child → parent**.

### Example:

```jsx
<div onClick={() => console.log("Parent")}>
  <button onClick={() => console.log("Child")}>
    Click
  </button>
</div>
```

### Output:
```
Child
Parent
```

---

# 4. Event Capturing

Event moves from **parent → child**.

### Syntax:

```jsx
<div onClickCapture={() => console.log("Parent")}>
```

---

### Flow:

```text
Capture Phase → Target → Bubble Phase
```

---

# 5. Prevent Default

Stops default browser behavior.

### Example:

```jsx
function handleSubmit(e) {
  e.preventDefault();
}
```

### Use cases:
- Form submission
- Link navigation

---

# 6. Stop Propagation

Stops event from bubbling to parent.

### Example:

```jsx
function handleChild(e) {
  e.stopPropagation();
}
```

### Effect:
Parent event will NOT trigger.

---

# 7. Passing Parameters in Events

### Wrong:

```jsx
<button onClick={handleClick(id)}>Click</button>
```

---

### Correct:

```jsx
<button onClick={() => handleClick(id)}>
  Click
</button>
```

---

### Alternative:

```jsx
function handleClick(id) {
  return function () {
    console.log(id);
  };
}
```

---

# SECTION 7: FORMS

---

# 1. Controlled Components

Form data controlled by React state.

### Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

### Key Point:
React is the single source of truth.

---

# 2. Uncontrolled Components

DOM handles form data using refs.

### Example:

```jsx
const inputRef = useRef();

<input ref={inputRef} />

console.log(inputRef.current.value);
```

---

### Difference:

| Controlled | Uncontrolled |
|------------|--------------|
| React state | DOM state |
| Re-render | No re-render |
| Recommended | Rare cases |

---

# 3. Form Validation

### Basic Example:

```jsx
if (password.length < 6) {
  alert("Password too short");
}
```

---

### Common validations:
- Required fields
- Email format
- Password strength
- Number range

---

# 4. Dynamic Forms

Forms where fields change dynamically.

### Example:

```jsx
{fields.map((field, i) => (
  <input key={i} value={field.value} />
))}
```

---

### Use cases:
- Multi-step forms
- Survey forms
- Custom input builders

---

# 5. File Upload

### Example:

```jsx
function handleFile(e) {
  const file = e.target.files[0];
  console.log(file);
}

<input type="file" onChange={handleFile} />
```

---

### Key Points:
- Use `FormData` for backend upload
- Files are accessed via `e.target.files`

---

# 6. Interview Questions (Forms)

### Q1. What are controlled components?

Components where form data is controlled by React state.

---

### Q2. Controlled vs Uncontrolled?

| Controlled | Uncontrolled |
|------------|--------------|
| State driven | DOM driven |
| Easy validation | Less control |
| Preferred | Rare use cases |

---

### Q3. Why controlled components?

- Easy validation
- Real-time updates
- Predictable behavior

---

### Q4. How do you handle form validation?

Using state + conditional checks or libraries like Formik/Yup.

---

# SECTION 8: LISTS AND KEYS

---

# 1. Rendering Lists

### Example:

```jsx
const users = ["A", "B", "C"];

users.map((user) => (
  <li>{user}</li>
));
```

---

# 2. Why Keys Exist?

Keys help React identify **which items changed, added, or removed**.

### Why important?

React uses **Virtual DOM diffing**.

---

### Without keys:
- Poor performance
- Incorrect UI updates

---

### With keys:

```jsx
users.map((user) => (
  <li key={user.id}>{user.name}</li>
));
```

---

# 3. Key Selection Strategies

### Best → Stable Unique ID

```jsx
key={user.id}
```

---

### Acceptable → Unique string

```jsx
key={email}
```

---

### Worst → Index (avoid)

```jsx
key={index}
```

---

### Why index is bad?

- Breaks on reordering
- Causes incorrect UI updates

---

# 4. Reconciliation Impact

React compares:

```text
Old Virtual DOM vs New Virtual DOM
```

Keys help React:
- Match elements
- Avoid full re-render
- Optimize updates

---

# 5. Performance Issues

### Without keys:
- Full list re-render
- UI glitches
- Poor performance

---

### With proper keys:
- Minimal DOM updates
- Efficient rendering
- Smooth UI

---

# React Forms + Lists & Keys (Placement Notes)

> This is a **concise, interview-focused revision sheet** covering Forms and Lists & Keys in React.

---

# SECTION 7: FORMS

---

# 1. Controlled Components

A controlled component is a form element whose value is controlled by **React state**.

### Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Key Idea:
React state is the **single source of truth**.

---

# 2. Uncontrolled Components

Form data is handled by the **DOM itself**, not React state.

### Example:

```jsx
const inputRef = useRef();

<input ref={inputRef} />

console.log(inputRef.current.value);
```

### Key Idea:
DOM manages value, React just reads it when needed.

---

### Controlled vs Uncontrolled

| Feature | Controlled | Uncontrolled |
|--------|------------|--------------|
| State | React state | DOM |
| Updates | On every change | On submit/read |
| Validation | Easy | Hard |
| Preferred | Yes | Rare cases |

---

# 3. Form Validation

Used to ensure correct user input.

### Example:

```jsx
if (!email.includes("@")) {
  alert("Invalid email");
}
```

---

### Common validations:
- Required fields
- Email format
- Password length
- Number range checks

---

### Better approach:
- Manual validation (small apps)
- Libraries like Formik / Yup (large apps)

---

# 4. Dynamic Forms

Forms where fields are generated dynamically.

### Example:

```jsx
{fields.map((field, index) => (
  <input
    key={index}
    value={field.value}
  />
))}
```

---

### Use cases:
- Surveys
- Multi-step forms
- Custom input builders

---

# 5. File Upload

### Example:

```jsx
function handleFile(e) {
  const file = e.target.files[0];
  console.log(file);
}

<input type="file" onChange={handleFile} />
```

---

### Important points:
- Use `e.target.files`
- Use `FormData` for backend upload
- Can upload images, PDFs, etc.

---

# 6. Interview Questions (Forms)

### Q1. What is a controlled component?

A component where form value is controlled by React state.

---

### Q2. Difference between controlled and uncontrolled?

| Controlled | Uncontrolled |
|------------|--------------|
| Uses state | Uses DOM |
| Easy validation | Hard validation |
| Preferred | Rare use |

---

### Q3. Why controlled components are preferred?

- Predictable
- Easy validation
- Real-time updates

---

### Q4. How do you handle form validation?

- Manual checks
- Libraries like Formik/Yup

---

---

# SECTION 8: LISTS AND KEYS

---

# 1. Rendering Lists

React uses `.map()` to render lists.

### Example:

```jsx
const users = ["A", "B", "C"];

users.map((user) => (
  <li>{user}</li>
));
```

---

# 2. Why Keys Exist?

Keys help React identify which items:
- Changed
- Added
- Removed

### Key Role:
Efficient **Virtual DOM diffing**

---

### Without keys:
- Full re-render of list
- Poor performance
- UI inconsistencies

---

# 3. Key Selection Strategies

### Best Practice:

```jsx
key={user.id}
```

---

### Acceptable:

```jsx
key={email}
```

---

### Worst Practice (Avoid):

```jsx
key={index}
```

---

### Why index is bad?

- Breaks when list order changes
- Causes wrong UI updates
- Poor reconciliation

---

# 4. Reconciliation Impact

React compares:

```text
Old Virtual DOM
      vs
New Virtual DOM
```

Keys help React:
- Match elements correctly
- Update only changed items
- Avoid full re-render

---

# 5. Performance Issues

### Without keys:
- Slow rendering
- Unnecessary DOM updates
- UI bugs in dynamic lists

---

### With proper keys:
- Optimized rendering
- Minimal DOM updates
- Smooth UI performance

---

# React Advanced Core (Lists + Virtual DOM + Lifecycle)

> This section combines three **very high-frequency interview topics**:
> Lists & Keys, Virtual DOM, and React Lifecycle.

---

# SECTION 8: LISTS AND KEYS

---

# 1. Rendering Lists

React renders lists using `.map()`.

### Example:

```jsx
const users = ["A", "B", "C"];

users.map((user) => (
  <li>{user}</li>
));
```

---

# 2. Why Keys Exist?

Keys help React identify each element uniquely during updates.

### Purpose:
- Track items in list
- Optimize updates
- Support efficient Virtual DOM diffing

---

# 3. Key Selection Strategies

### Best Practice:

```jsx
key={user.id}
```

---

### Acceptable:

```jsx
key={user.email}
```

---

### Avoid:

```jsx
key={index}
```

---

### Why avoid index?

- Breaks on reordering
- Incorrect UI updates
- Poor reconciliation performance

---

# 4. Reconciliation Impact

React compares:

```text
Old Virtual DOM
        vs
New Virtual DOM
```

Keys help React:
- Match same elements
- Detect changes
- Avoid full re-render

---

# 5. Performance Issues

Without proper keys:
- Whole list re-renders
- UI glitches in dynamic lists
- Slow updates

With proper keys:
- Minimal updates
- Better performance
- Stable UI behavior

---

---

# SECTION 9: VIRTUAL DOM (VERY IMPORTANT)

> One of the MOST asked React interview topics.

---

# 1. Real DOM

Real DOM is the actual browser DOM.

### Characteristics:
- Heavy
- Slow updates
- Repaints entire tree on change

### Example:

```text
Change in one element → Whole DOM may re-render
```

---

# 2. Virtual DOM

Virtual DOM is a **lightweight copy of Real DOM** stored in memory.

### Key Idea:
React updates Virtual DOM first, not Real DOM directly.

---

# 3. Diffing Algorithm

Diffing = comparing old Virtual DOM with new Virtual DOM.

### Purpose:
Find exactly what changed.

```text
Old VDOM → New VDOM
         ↓
   Differences detected
```

---

# 4. Reconciliation

Reconciliation = process of updating Real DOM based on differences.

### Steps:
1. Compare Virtual DOMs
2. Identify changes
3. Update only required parts of Real DOM

---

# 5. Fiber Architecture

Fiber is React’s internal engine for rendering.

### Features:
- Breaks rendering into small units
- Prioritizes updates
- Improves responsiveness

### Why Fiber is important:
- Enables smooth UI
- Supports concurrent rendering

---

# 6. Render Phase

### What happens:
- React builds Virtual DOM
- Calculates changes (diffing)
- No DOM update yet

### Key Point:
This phase is **pure and interruptible**

---

# 7. Commit Phase

### What happens:
- Changes are applied to Real DOM
- UI is updated on screen

### Key Point:
This phase is **not interruptible**

---

# VIRTUAL DOM FLOW

```text
State Change
    ↓
Render Phase (Virtual DOM + Diffing)
    ↓
Reconciliation
    ↓
Commit Phase (Real DOM Update)
    ↓
UI Update
```

---

---

# SECTION 10: REACT LIFECYCLE

---

# 1. Class Component Lifecycle

React class components have 3 phases:

---

# A. Mounting Phase (Component loads first time)

### Methods:

```text
constructor()
render()
componentDidMount()
```

### Flow:

```text
constructor → render → componentDidMount
```

---

### Use cases:
- API calls
- Initial setup
- DOM operations

---

# B. Updating Phase (State/props change)

### Methods:

```text
shouldComponentUpdate()
render()
componentDidUpdate()
```

### Flow:

```text
Update → shouldComponentUpdate → render → componentDidUpdate
```

---

### Use cases:
- Optimizing re-renders
- Responding to state changes

---

# C. Unmounting Phase (Component removed)

### Method:

```text
componentWillUnmount()
```

### Use cases:
- Cleanup timers
- Remove event listeners
- Cancel API calls

---

# D. Error Handling Phase

### Method:

```text
componentDidCatch()
```

### Use case:
- Catch UI errors
- Show fallback UI

---

---

# 2. Functional Lifecycle Mapping (VERY IMPORTANT)

React Hooks replaced lifecycle methods.

---

## Mounting Equivalent

```jsx
useEffect(() => {
  // componentDidMount
}, []);
```

---

## Updating Equivalent

```jsx
useEffect(() => {
  // componentDidUpdate
}, [dependency]);
```

---

## Unmounting Equivalent

```jsx
useEffect(() => {
  return () => {
    // componentWillUnmount
  };
}, []);
```

---

# LIFECYCLE MAPPING TABLE

| Class | Functional |
|------|------------|
| componentDidMount | useEffect(() => {}, []) |
| componentDidUpdate | useEffect(() => {}, [dep]) |
| componentWillUnmount | cleanup function |
| componentDidCatch | Error Boundaries (still class-based) |

---

````md id="react-hooks-rendering-context"
# React Hooks + Rendering + Context API (Placement Notes)

> This section covers **the most important React interview topics**:
Hooks, Rendering behavior, and Context API.

---

# SECTION 11: REACT HOOKS (MOST IMPORTANT)

---

# 1. useState

Used to store **local component state**.

### Example:

```jsx
const [count, setCount] = useState(0);
```

---

## Internal Working

- State is stored per component instance
- React keeps a hook list internally
- On re-render, hook order is preserved

---

## Batching

React groups multiple state updates into one render.

```jsx
setCount(c => c + 1);
setFlag(true);
```

→ Only **one re-render**

---

## Functional Updates

Used when new state depends on previous state.

```jsx
setCount(prev => prev + 1);
```

---

## Common Mistakes

### ❌ Direct mutation

```jsx
count = count + 1;
```

### ❌ Wrong state dependency

```jsx
setCount(count + 1);
setCount(count + 1);
```

(Incorrect due to batching)

---

---

# 2. useEffect

Used for **side effects**.

---

## Side Effects Examples

- API calls
- DOM manipulation
- Timers
- Event listeners

---

## Dependency Array

### 1. No dependency

```jsx
useEffect(() => {});
```

Runs on every render ❌

---

### 2. Empty array

```jsx
useEffect(() => {}, []);
```

Runs only once (mount)

---

### 3. With dependencies

```jsx
useEffect(() => {}, [count]);
```

Runs when `count` changes

---

## Cleanup Function

```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
```

---

## Infinite Loop Problem

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

→ Causes infinite re-renders ❌

---

## API Calls Example

```jsx
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

---

---

# 3. useRef

Used for:

- DOM access
- Mutable values
- Persistent storage

---

## DOM Reference

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

---

## Access Value

```jsx
inputRef.current.focus();
```

---

## Mutable Values (No re-render)

```jsx
const countRef = useRef(0);
countRef.current++;
```

---

## Previous State Tracking

```jsx
const prevCount = useRef();
useEffect(() => {
  prevCount.current = count;
}, [count]);
```

---

---

# 4. useMemo

Used for **memoizing expensive calculations**.

---

## Example:

```jsx
const result = useMemo(() => {
  return expensiveFunction(data);
}, [data]);
```

---

## Purpose:

- Avoid recalculation
- Improve performance

---

## Use Cases:
- Large loops
- Filtering big arrays
- Computations

---

---

# 5. useCallback

Used to memoize functions.

---

## Example:

```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

---

## Why needed?

Prevents **child re-renders** due to new function reference.

---

---

# 6. useContext

Used for **global state sharing**.

---

## Example:

```jsx
const ThemeContext = createContext();
```

---

## Provider:

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

---

## Consumer:

```jsx
const theme = useContext(ThemeContext);
```

---

---

# 7. useReducer

Alternative to useState for **complex state logic**.

---

## Example:

```jsx
const reducer = (state, action) => {
  switch(action.type) {
    case "INC":
      return state + 1;
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, 0);
```

---

## Use Cases:
- Complex state transitions
- Redux-like logic
- Multiple state actions

---

---

# 8. Custom Hooks

Used for **reusability of logic**.

---

## Example:

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
}
```

---

## Rules:
- Must start with `use`
- Can use other hooks inside

---

---

# SECTION 12: REACT RENDERING (VERY IMPORTANT)

---

# 1. What causes re-render?

- State change
- Props change
- Context change
- Parent re-render

---

# 2. Parent Re-render Effect

If parent re-renders → child also re-renders (default behavior)

---

# 3. Child Re-render Effect

Child re-renders when:
- props change
- parent re-renders
- state changes

---

# 4. State Update Re-render

```jsx
setCount(count + 1);
```

→ triggers re-render

---

# 5. Context Re-render

Any context update causes all consumers to re-render.

---

# 6. Memoization

Used to prevent unnecessary re-renders:

- React.memo
- useMemo
- useCallback

---

## Why is my component re-rendering?

### Common reasons:
- State update
- Parent re-render
- New props reference
- Context update
- New function/object reference

---

# SECTION 13: CONTEXT API

---

# 1. Problem Statement

Props drilling problem:

```text
App → A → B → C → D
```

Unnecessary prop passing.

---

# 2. Solution: Context API

---

# 3. Create Context

```jsx
const UserContext = createContext();
```

---

# 4. Provider

```jsx
<UserContext.Provider value="Shreya">
  <App />
</UserContext.Provider>
```

---

# 5. Consumer

```jsx
const user = useContext(UserContext);
```

---

# 6. useContext Hook

Simplifies consuming context.

---

# 7. Context Limitations

- Causes unnecessary re-renders
- Not suitable for large complex state
- Not a full state management solution
- Hard to optimize deeply

---

# QUICK REVISION SUMMARY

---

## Hooks
- useState → local state
- useEffect → side effects
- useRef → DOM + mutable values
- useMemo → memoized values
- useCallback → memoized functions
- useContext → global state sharing
- useReducer → complex state logic
- Custom hooks → reusable logic

---

## Rendering
- Re-render caused by state/props/context changes
- Parent re-render affects children
- Memoization reduces unnecessary renders
- Context updates re-render consumers

---

## Context API
- Solves props drilling
- Provider + Consumer model
- useContext simplifies usage
- Not ideal for large-scale state management
````
````md id="react-router-api-performance-error-boundaries"
# React Router + API Integration + Performance Optimization + Error Boundaries (Placement Notes)

> This is a **high-frequency React interview revision sheet** covering routing, data fetching, optimization, and error handling.

---

# SECTION 14: REACT ROUTER

> React Router is used for **client-side routing in SPA applications**.

---

# 1. React Router DOM

Library used for navigation without page reload.

```bash
npm install react-router-dom
```

---

# 2. BrowserRouter

Wraps the entire app and enables routing.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

# 3. Routes

Container for all routes.

```jsx
import { Routes, Route } from "react-router-dom";
```

---

# 4. Route

Defines a single route.

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

---

# 5. Link

Used for navigation without reload.

```jsx
<Link to="/about">About</Link>
```

---

# 6. NavLink

Same as Link but provides active styling.

```jsx
<NavLink to="/home">Home</NavLink>
```

---

# 7. useNavigate

Programmatic navigation.

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

---

# 8. useParams

Used to read URL parameters.

```jsx
<Route path="/user/:id" element={<User />} />
```

```jsx
const { id } = useParams();
```

---

# 9. Nested Routes

Routes inside routes.

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

# 10. Protected Routes

Used for authentication-based routing.

### Example:

```jsx
const ProtectedRoute = ({ children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};
```

---

# 11. Lazy Routes

Used for code splitting.

```jsx
const Home = React.lazy(() => import("./Home"));
```

---

---

# SECTION 15: API INTEGRATION

---

# 1. Fetch API

```jsx
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

# 2. Async/Await

```jsx
const fetchData = async () => {
  const res = await fetch("/api/data");
  const data = await res.json();
};
```

---

# 3. Error Handling

```jsx
try {
  const res = await fetch("/api/data");
} catch (error) {
  console.log(error);
}
```

---

# 4. Loading States

```jsx
const [loading, setLoading] = useState(true);
```

```jsx
{loading ? "Loading..." : "Data Loaded"}
```

---

# 5. AbortController

Used to cancel API requests.

```jsx
const controller = new AbortController();

fetch("/api", {
  signal: controller.signal
});

controller.abort();
```

---

# 6. Axios

Popular HTTP client.

```bash
npm install axios
```

```jsx
axios.get("/api/data")
  .then(res => console.log(res.data));
```

---

# 7. CRUD Operations

### Create
```jsx
axios.post("/api/data", data);
```

### Read
```jsx
axios.get("/api/data");
```

### Update
```jsx
axios.put("/api/data/1", data);
```

### Delete
```jsx
axios.delete("/api/data/1");
```

---

---

# SECTION 16: PERFORMANCE OPTIMIZATION

---

# 1. React.memo

Prevents unnecessary re-renders.

```jsx
const Component = React.memo(function Component(props) {
  return <h1>{props.name}</h1>;
});
```

---

# 2. useMemo

Memoizes computed values.

```jsx
const result = useMemo(() => compute(data), [data]);
```

---

# 3. useCallback

Memoizes functions.

```jsx
const handleClick = useCallback(() => {}, []);
```

---

# 4. Code Splitting

Split app into smaller bundles.

```jsx
const Home = React.lazy(() => import("./Home"));
```

---

# 5. Lazy Loading

Load components only when needed.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <Home />
</Suspense>
```

---

# 6. Suspense

Handles lazy loading fallback UI.

---

# 7. Tree Shaking

Removes unused code during bundling.

---

# 8. Bundle Optimization

Techniques:
- Code splitting
- Lazy loading
- Removing unused dependencies
- Memoization

---

---

# SECTION 17: ERROR BOUNDARIES

---

# 1. Why Needed?

React components can crash due to runtime errors.

Error Boundaries prevent full app crash.

---

# 2. Working

Error Boundaries catch errors in child components.

---

# 3. Lifecycle Methods

Must be class component.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
```

---

# 4. Limitations

- Cannot catch errors in:
  - Event handlers
  - Async code
  - setTimeout
- Only class components support it
- Needs fallback UI

---

# QUICK REVISION SUMMARY

---

## React Router
- BrowserRouter wraps app
- Routes define routing structure
- Route maps path → component
- Link for navigation
- NavLink for active styling
- useNavigate for programmatic navigation
- useParams for dynamic routes
- Nested routes supported
- Protected routes control access
- Lazy routes improve performance

---

## API Integration
- Fetch / Axios for API calls
- Async/await preferred
- Handle loading + error states
- AbortController cancels requests
- CRUD = Create, Read, Update, Delete

---

## Performance Optimization
- React.memo prevents re-renders
- useMemo memoizes values
- useCallback memoizes functions
- Code splitting reduces bundle size
- Lazy loading loads components on demand
- Suspense handles fallback UI
- Tree shaking removes unused code

---

## Error Boundaries
- Catch UI errors in React tree
- Prevent full app crash
- Uses class components
- Cannot catch async or event errors
````
