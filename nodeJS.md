# Web Development Notes: The "Show" Route (GET /posts/:id)

The **Show** route is one of the seven standard RESTful routes. Its primary responsibility is to display a single, specific resource from a collection using a unique identifier (ID).

---

## 1. Technical Implementation (Express.js)

In Express, we use **Path Parameters** to capture dynamic values from the URL to identify which specific post the user wants to see.

```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mock Data (Representing our Database)
const posts = [
    { id: 1, title: 'Understanding Node', content: 'Node is a runtime environment.' },
    { id: 2, title: 'Mastering Express', content: 'Express simplifies backend routing.' },
    { id: 3, title: 'RESTful Design', content: 'REST stands for Representational State Transfer.' }
];

/**
 * THE SHOW ROUTE
 * Method: GET
 * Path: /posts/:id
 * Purpose: Fetch one specific post based on its ID
 */
app.get('/posts/:id', (req, res) => {
    // 1. Access the dynamic ID from the URL using req.params
    // Note: Data from req.params is always a string!
    const { id } = req.params;

    // 2. Find the post that matches the ID
    // We convert the string ID to a Number to match the data type in our array
    const foundPost = posts.find(p => p.id === parseInt(id));

    // 3. Handle 404 Case: If the ID does not exist
    if (!foundPost) {
        return res.status(404).json({ 
            message: "Error: Post with that ID was not found." 
        });
    }

    // 4. Success Case: Send the individual post data
    res.status(200).json(foundPost);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});
###2. Theoretical BreakdownWhat is a Path Parameter?A path parameter is a part of the URL that is dynamic. By prefixing a segment with a colon (:), you tell Express to treat that part as a variable rather than a literal string.Defined Route: /posts/:idIncoming URL: /posts/101Extraction: Express automatically creates an object req.params where { id: '101' }.The Workflow of a Show RouteThe Request: The client sends a GET request to a specific endpoint (e.g., /posts/1).The Extraction: The server extracts the value 1 from the URL.The Search: The server queries the data source for an item with a matching ID.The Response: - Found: Server sends the object with a 200 OK status.Not Found: Server sends a 404 Not Found status code to indicate the resource doesn't exist.3. Important Notes for RevisionType Safety: Always remember that req.params.id is a string. If your database uses integers, use parseInt() or Number(). If your database uses UUIDs or strings, you can compare them directly.Naming: You can name the parameter anything (e.g., /posts/:postId), but you must access it using that exact name in your code (req.params.postId).Route Order: Placement matters! If you have a route like /posts/new, and your show route /posts/:id is placed above it, Express will think "new" is an :id and try to find a post with the ID of "new". Always put specific routes above dynamic ones.4. Testing the RouteToolActionExpected ResultBrowserVisit http://localhost:3000/posts/1JSON object for Post #1PostmanGET request to /posts/2JSON object for Post #2cURLcurl http://localhost:3000/posts/99404 Not Found JSON message
