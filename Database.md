# ⭐ SQL Fundamentals — Important for Web Development & Placements

---

## ✅ 1. What is Database?

### 📘 Notes:

* A database is a structured collection of data.
* It is used to **store, manage, and retrieve data efficiently**.
* Data is organized in a way that makes it easy to access and update.

### Examples:

* Student records
* Banking systems
* E-commerce websites

### Types of Databases:

* Relational Database (SQL)
* Non-Relational Database (NoSQL)

### 🎯 Interview Answer:

> A database is an organized collection of data that can be easily accessed, managed, and updated.

---

## ✅ 2. SQL vs NoSQL

### 📘 Notes:

SQL and NoSQL are two types of databases.

### 🔹 SQL (Structured Query Language)

* Data stored in **tables (rows & columns)**
* Fixed schema (structure)
* Uses SQL queries
* Examples: MySQL, PostgreSQL

### 🔹 NoSQL (Not Only SQL)

* Data stored as JSON, key-value, or documents
* Flexible schema
* Scalable for large data
* Examples: MongoDB, Firebase

---

### 📊 Difference Table:

| Feature | SQL | NoSQL |
|--------|-----|------|
| Structure | Tables | Documents / Key-Value |
| Schema | Fixed | Flexible |
| Scalability | Vertical | Horizontal |
| Query Language | SQL | No fixed language |
| Example | MySQL | MongoDB |

---

### 🎯 Interview Answer:

> SQL databases use structured tables with fixed schemas, while NoSQL databases use flexible data models like documents and key-value pairs.

---

## ✅ 3. What are Tables?

### 📘 Notes:

* A table is a collection of related data stored in rows and columns.
* It is the basic unit of a relational database.

### Structure:

* Rows → Records (data entries)
* Columns → Fields (attributes)

---

### Example Table:

| ID | Name   | Age |
|----|--------|-----|
| 1  | Shreya | 21  |
| 2  | Rahul  | 22  |

---

### SQL Example:

```sql
CREATE TABLE students (
  id INT,
  name VARCHAR(50),
  age INT
);
## 4) CREATE TABLE

### 📘 Notes:
* Used to create a new table in a database.
* Defines column names and their data types.

### Syntax:
```sql
CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  column3 datatype
);
```

### Example:
```sql
CREATE TABLE students (
  id INT,
  name VARCHAR(50),
  age INT
);
```

🎯 **Interview Answer:**  
`CREATE TABLE` is used to create a new table with specified columns and data types.

---

## 5) What are Constraints?

### 📘 Notes:
* Constraints are rules applied to table columns to ensure **data accuracy and integrity**.

### Common Constraints:
* **NOT NULL** → Column cannot be empty  
* **UNIQUE** → Values must be unique  
* **PRIMARY KEY** → Uniquely identifies each row  
* **FOREIGN KEY** → Links two tables  
* **CHECK** → Validates values  
* **DEFAULT** → Assigns default value  

### Example:
```sql
CREATE TABLE users (
  id INT NOT NULL,
  email VARCHAR(100) UNIQUE
);
```

🎯 **Interview Answer:**  
Constraints enforce rules on table data to maintain correctness and reliability.

---

## 6) Key Constraints

### 📘 Notes:
* Key constraints are used to uniquely identify records and define relationships between tables.

### Types:
* Primary Key  
* Foreign Key  
* Unique Key  

🎯 **Interview Answer:**  
Key constraints prevent duplicate records and maintain relationships between tables.

---

## 7) Primary Key and Foreign Key

### 📘 Notes:

### 🔹 Primary Key
* Uniquely identifies each record in a table.  
* Cannot be NULL and must be unique.

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
```

### 🔹 Foreign Key
* Connects one table to another using a reference to a primary key.

```sql
CREATE TABLE orders (
  order_id INT,
  student_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

🎯 **Interview Answer:**  
A primary key uniquely identifies a record, while a foreign key creates a link between tables.

---

## 8) INSERT INTO Table

### 📘 Notes:
* Used to add new rows to a table.

### Syntax:
```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

### Example:
```sql
INSERT INTO students (id, name, age)
VALUES (1, 'Shreya', 21);
```

### Multiple Rows:
```sql
INSERT INTO students VALUES
(2, 'Rahul', 22),
(3, 'Sam', 23);
```

🎯 **Interview Answer:**  
`INSERT INTO` is used to add new records to a table.

---

## 9) SELECT Command

### 📘 Notes:
* Used to fetch data from a table.

### Syntax:
```sql
SELECT column1, column2 FROM table_name;
```

### Example:
```sql
SELECT * FROM students;
```

### With Condition:
```sql
SELECT * FROM students WHERE age > 20;
```

🎯 **Interview Answer:**  
`SELECT` retrieves data from one or more tables based on conditions.
## 10) mysql2 package to connect Node.js with MySQL

### 📘 Notes:
* `mysql2` is a Node.js package used to connect Node.js applications with MySQL database.
* It supports promises and is faster than older `mysql` package.

### Installation:
```bash
npm install mysql2
```

### Example:
```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "test_db"
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});
```

🎯 **Interview Answer:**  
`mysql2` is a Node.js package used to establish a connection between a Node application and a MySQL database.

---

## 11) Using SQL from CLI

### 📘 Notes:
* MySQL can be accessed using Command Line Interface (CLI).
* Used to run queries directly without any application.

### Login Command:
```bash
/usr/local/mysql/bin/mysql -u root -p
```

### Steps:
1. Enter password  
2. Select or create database  
3. Run SQL queries  

---

### Create SQL File:

Create a file:
```
schema.sql
```

Add queries inside it:
```sql
CREATE DATABASE test_db;
USE test_db;

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
```

---

### Run SQL File (Source Command):

```sql
SOURCE schema.sql;
```

🎯 **Interview Answer:**  
MySQL CLI allows executing SQL queries directly, and the `SOURCE` command is used to run SQL scripts from a file.

---

## 12) Closing the Connection

### 📘 Notes:
* After completing database operations, connection should be closed.
* Prevents memory leaks and improves performance.

### Example:
```javascript
connection.end();
```

### With Callback:
```javascript
connection.end((err) => {
  if (err) {
    console.log("Error closing connection:", err);
  } else {
    console.log("Connection closed");
  }
});
```

🎯 **Interview Answer:**  
`connection.end()` is used to safely terminate the database connection in Node.js.

---
