# ⭐ MongoDB Fundamentals — Important for Web Development & Placements

---

## ✅ 1) Connect .js file to MongoDB using Node.js

### 📘 Notes:
* Use MongoDB driver or mongoose to connect Node.js with MongoDB.
* Most common → `mongoose`

### Installation:
```bash
npm install mongoose
```

### Example:
```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));
```

🎯 **Interview Answer:**  
Node.js connects to MongoDB using libraries like mongoose by providing the database URL.

---

## ✅ 2) Commands: help, show, quit

### 📘 Notes:

### help
```bash
help
```
* Shows available MongoDB commands.

### show
```bash
show dbs
show collections
```
* Displays databases and collections.

### quit
```bash
quit()
```
* Exits MongoDB shell.

🎯 **Interview Answer:**  
Basic MongoDB shell commands include help, show, and quit for navigation and usage.

---

## ✅ 3) To Create Database

### 📘 Notes:
* MongoDB creates database automatically when data is inserted.

### Command:
```bash
use myDatabase
```

* If DB doesn't exist → it will be created when data is added.

🎯 **Interview Answer:**  
MongoDB creates databases dynamically using the `use` command when data is inserted.

---

## ✅ 4) What is BSON Data

### 📘 Notes:
* BSON = Binary JSON.
* Internal format used by MongoDB.
* Faster and more efficient than JSON.

### Example:
```json
{
  "name": "Shreya",
  "age": 21
}
```

🎯 **Interview Answer:**  
BSON is a binary representation of JSON used internally by MongoDB for storage and speed.

---

## ✅ 5) What is Collection

### 📘 Notes:
* A collection is like a table in SQL.
* Stores multiple documents (records).

### Example:
```bash
db.users.insertOne({ name: "Shreya", age: 21 })
```

🎯 **Interview Answer:**  
A collection is a group of documents stored in MongoDB, similar to a table in relational databases.

---

## ✅ 6) CRUD Operations

### 📘 Notes:
CRUD = Create, Read, Update, Delete

---

### i) Insert Data

#### insertOne:
```javascript
db.users.insertOne({ name: "Shreya", age: 21 });
```

#### insertMany:
```javascript
db.users.insertMany([
  { name: "Rahul", age: 22 },
  { name: "Sam", age: 23 }
]);
```

---

### ii) Read Data

#### find:
```javascript
db.users.find();
```

#### findOne:
```javascript
db.users.findOne({ name: "Shreya" });
```

---

### iii) Update Data

#### updateOne:
```javascript
db.users.updateOne(
  { name: "Shreya" },
  { $set: { age: 25 } }
);
```

#### updateMany:
```javascript
db.users.updateMany(
  {},
  { $set: { active: true } }
);
```

#### replaceOne:
```javascript
db.users.replaceOne(
  { name: "Rahul" },
  { name: "Rahul", age: 30 }
);
```

---

🎯 **Interview Answer:**  
CRUD operations in MongoDB include insertOne/insertMany for creating data, find/findOne for reading, and updateOne/updateMany/replaceOne for updating data.

---

# ⭐ MongoDB Interview Revision Summary

* MongoDB is a NoSQL database.
* Uses BSON format.
* Collections store documents.
* CRUD operations manage data.
