# Web Development Notes: The "Show" Route (Full Overview)

The **Show** route is the standard RESTful pattern used to display a specific resource from a collection. It uses a unique identifier (ID) to pick one item out of many.

---

## 1. Theoretical Concepts

### The Role of the Show Route
While the **Index** route (`GET /posts`) provides an overview of all items, the **Show** route (`GET /posts/:id`) focuses on the detailed data of a single entity. 

### Path Parameters (`req.params`)
To identify which resource the user wants, we use **Path Parameters**. These are dynamic segments in the URL defined by a colon (`:`).
* **Route Definition**: `/posts/:id`
* **Actual URL**: `/posts/5`
* **Mechanism**: Express captures `5` and stores it in the `req.params` object as `{ id: "5" }`.



### The Logical Workflow
1.  **Request**: The client sends a GET request to a dynamic URL.
2.  **Extraction**: The server retrieves the ID from `req.params`.
3.  **Data Retrieval**: The server searches the data source (array or database) for a matching ID. 
    * *Note*: Since URL parameters are strings, you must often convert them (e.g., `parseInt()`) to match numerical IDs.
4.  **Response**: 
    * **Success (200 OK)**: Send the single object.
    * **Failure (404 Not Found)**: Send an error message if the ID doesn't exist.



---

## 2. Technical Implementation

Here is how you implement the Show route in an Express application:

```javascript
const express = require('express');
const app = express();

// Mock Data
const posts = [
    { id: 1, title: 'JavaScript', content: 'The language of the web.' },
    { id: 2, title: 'Node.js', content: 'JavaScript on the server.' },
    { id: 3, title: 'Express', content: 'Web framework for Node.' }
];

/**
 * THE SHOW ROUTE
 * Method: GET
 * URL: /posts/:id
 */
app.get('/posts/:id', (req, res) => {
    // Extract the ID from params (comes as a string)
    const { id } = req.params;

    // Search for the post
    // We use Number() or parseInt() to ensure types match
    const foundPost = posts.find(p => p.id === Number(id));

    // Handle the case where the post is not found
    if (!foundPost) {
        return res.status(404).json({ error: "Post not found" });
    }

    // Return the specific post
    res.status(200).json(foundPost);
});

app.listen(3000, () => console.log("Server running on port 3000"));
