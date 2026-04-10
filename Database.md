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
