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
* CRUD operations manage data.## 6) CRUD Operations (Continue)

### iv) Delete Data

#### deleteOne:
```javascript
db.users.deleteOne({ name: "Shreya" });
```

#### deleteMany:
```javascript
db.users.deleteMany({ age: { $lt: 25 } });
```

🎯 **Interview Answer:**  
deleteOne removes a single document, while deleteMany removes multiple documents matching a condition.

---

### v) Delete Current Database

```javascript
db.dropDatabase();
```

🎯 **Interview Answer:**  
dropDatabase() deletes the currently selected database permanently.

---

### vi) Delete All Data from Collection

```javascript
db.users.deleteMany({});
```

🎯 **Interview Answer:**  
deleteMany({}) removes all documents from a collection without deleting the collection itself.

---

## ✅ 7) Query Operators

### 📘 Notes:
* Used to filter data based on conditions.

### Common Operators:

```javascript
db.users.find({ age: { $gt: 20 } });  // greater than
db.users.find({ age: { $lt: 30 } });  // less than
db.users.find({ age: { $gte: 21 } }); // >=
db.users.find({ age: { $lte: 25 } }); // <=
db.users.find({ name: { $in: ["Shreya", "Rahul"] } });
db.users.find({ age: { $ne: 22 } });  // not equal
```

🎯 **Interview Answer:**  
Query operators like $gt, $lt, $in, and $ne are used to filter documents in MongoDB queries.

---

## ✅ 8) Nesting

### 📘 Notes:
* MongoDB allows storing data inside objects (nested documents).

### Example:
```javascript
db.users.insertOne({
  name: "Shreya",
  address: {
    city: "Pune",
    pincode: 411001
  }
});
```

### Access Nested Data:
```javascript
db.users.find({ "address.city": "Pune" });
```

🎯 **Interview Answer:**  
Nesting allows storing structured data inside documents using embedded objects.

---

## ✅ 9) What is Mongoose

### 📘 Notes:
* Mongoose is an ODM (Object Data Modeling) library.
* Helps interact with MongoDB using JavaScript objects.
* Provides schema-based structure.

🎯 **Interview Answer:**  
Mongoose is a library that simplifies MongoDB interactions by providing schemas and models in Node.js.

---

## ✅ 10) What is Schema

### 📘 Notes:
* Schema defines the structure of documents.

### Example:
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
```

🎯 **Interview Answer:**  
A schema defines the structure, data types, and rules for documents in MongoDB.

---

## ✅ 11) What are Models & How to Create Model

### 📘 Notes:
* Model is a wrapper around schema.
* Used to interact with database.

### Example:
```javascript
const User = mongoose.model("User", userSchema);
```

🎯 **Interview Answer:**  
A model is a constructor created from a schema that allows CRUD operations on a collection.

---

## ✅ 12) Insert Data in Mongoose

### 📘 Notes:

### Example:
```javascript
const user = new User({
  name: "Shreya",
  age: 21,
  email: "shreya@gmail.com"
});
```

🎯 **Interview Answer:**  
Data is inserted by creating an instance of a model and saving it to the database.

---

## ✅ 13) save() Method

### 📘 Notes:
* Saves document into database.

### Example:
```javascript
user.save()
  .then(() => console.log("Data saved"))
  .catch(err => console.log(err));
```

🎯 **Interview Answer:**  
The save() method stores a document in MongoDB using a Mongoose model.

---

# ⭐ MongoDB + Mongoose Interview Revision Summary

* deleteOne/deleteMany remove documents.
* dropDatabase deletes entire DB.
* Query operators filter data.
* Nesting stores structured data.
* Mongoose simplifies MongoDB usage.
* Schema defines structure.
* Model performs operations.
* save() inserts data.

