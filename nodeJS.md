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
# Web Development Notes: The "Update" Route (PATCH /posts/:id)

The **PATCH** route is used to perform a **partial update** on a specific resource. Unlike **PUT**, which typically replaces the entire resource, **PATCH** only modifies the specific fields provided by the client.

---

## 1. Theoretical Concepts

### PATCH vs. PUT
* **PUT**: Replaces the entire resource. If you send only the `title`, the `content` might be lost or set to null depending on the implementation.
* **PATCH**: Updates only the fields you send. If you send a new `title`, the `content` remains exactly as it was.

### The Role of the Update Route
In a RESTful architecture, the Update route identifies the resource via a **Path Parameter** (`:id`) and receives the new data via the **Request Body** (`req.body`).



### The Logical Workflow
1.  **Extraction**: The server gets the `id` from `req.params`.
2.  **Data Retrieval**: The server finds the existing resource in the database.
3.  **Merging**: The server takes the new data from `req.body` and applies it to the existing object.
4.  **Response**: The server sends back the updated resource or a success message.

---

## 2. Technical Implementation (Express.js)

This code demonstrates how to find a post by ID and update only the fields that the user provides in the request.

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // Essential for reading req.body

let posts = [
    { id: 1, title: 'Initial Title', content: 'Original content.' },
    { id: 2, title: 'Second Post', content: 'More original content.' }
];

/**
 * THE UPDATE ROUTE (Partial Update)
 * Method: PATCH
 * URL: /posts/:id
 */
app.patch('/posts/:id', (req, res) => {
    // 1. Get the ID from params
    const { id } = req.params;
    
    // 2. Find the post in the array
    const post = posts.find(p => p.id === parseInt(id));

    // 3. Handle 404 if post doesn't exist
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    // 4. Update specific fields if they exist in req.body
    // Using the logical OR (||) ensures we keep the old value if the new one is missing
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    // 5. Respond with the updated post
    res.status(200).json({
        message: "Post updated successfully",
        updatedPost: post
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
# Web Development Notes: The "Edit" Route (GET /posts/:id/edit)

The **Edit** route is the standard RESTful pattern used to serve an HTML form to the user. This form is pre-filled with the existing data of a specific resource, allowing the user to make changes before submitting them to the server.

---

## 1. Theoretical Concepts

### Purpose of the Edit Route
In a full-stack application, you need a way for users to see the current data before they change it. 
* **The Edit Route (GET)**: Shows the form with existing data.
* **The Update Route (PATCH/PUT)**: Processes the data submitted from that form.

### Method Overriding
HTML forms natively only support `GET` and `POST`. To perform a `PATCH` or `DELETE` request from a browser form, we typically use a package like `method-override`.



### Logical Workflow
1.  **Request**: User clicks an "Edit" button, sending a GET request to `/posts/:id/edit`.
2.  **Retrieval**: The server finds the specific post in the database using the ID.
3.  **Rendering**: The server renders a template (like EJS) and passes the post object to it.
4.  **Display**: The HTML form displays the current title and content in the input fields.

---

## 2. Technical Implementation (Express & EJS)

### The Express Route (`app.js`)
```javascript
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mock Data
let posts = [
    { id: 1, title: 'Learning Node', content: 'It is a runtime.' },
    { id: 2, title: 'Learning EJS', content: 'It is a templating engine.' }
];

/**
 * THE EDIT ROUTE
 * Method: GET
 * URL: /posts/:id/edit
 * Purpose: Serve a form pre-filled with existing post data
 */
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).send("Post not found");
    }

    // Render the edit.ejs file and pass the post object
    res.render('edit', { post });
});

app.listen(3000, () => console.log("Server running on port 3000"));
