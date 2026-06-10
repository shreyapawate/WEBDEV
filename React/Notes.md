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

