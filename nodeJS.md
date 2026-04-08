# Web Development Notes: The "Show" Route

The **Show** route is one of the standard RESTful routes. Its purpose is to display the details of a **single, specific resource** using its unique identifier (ID).

---

## 1. Technical Implementation (Express.js)

This code demonstrates how to use **Path Parameters** to capture an ID from the URL and search for data.

```javascript
const express = require('express');
const app = express();

// Mock Data (Simulating a database)
const posts = [
    { id: 1, title: 'Node.js Basics', content: 'Node.js is built on the V8 engine.' },
    { id: 2, title: 'Express Routing', content: 'Routes define how the app responds to requests.' },
    { id: 3, title: 'RESTful APIs', content: 'REST is an architectural style for APIs.' }
];

/**
 * THE SHOW ROUTE
 * Purpose: Retrieve ONE specific post by its ID
 * Path: /posts/:id
 * Method: GET
 */
app.get('/posts/:id', (req, res) => {
    // 1. Capture the ID from the URL (req.params)
    // Note: Path parameters are always strings by default
    const { id } = req.params;

    // 2. Search for the post with the matching ID
    // We use parseInt() to convert the string ID to a number for comparison
    const foundPost = posts.find(p => p.id === parseInt(id));

    // 3. Error Handling: What if the ID doesn't exist?
    if (!foundPost) {
        return res.status(404).json({ 
            success: false, 
            message: "Post not found. Please check the ID and try again." 
        });
    }

    // 4. Success Response: Send the single post object
    res.status(200).json(foundPost);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
