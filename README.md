# 🛍️ CodeAlpha Internship - Task 1  
## **MERN E-Commerce Store — By Sameer Kumar**

A complete full-stack E-Commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This project includes secure authentication, dynamic product handling, cart functionality, and protected API routes — showcasing end-to-end full-stack development skills.

## ✨ Features

✔ Product Catalog — fetched from MongoDB  
✔ Product Details Page  
✔ Shopping Cart — add / remove / update items  
✔ JWT-based Authentication & Authorization  
✔ Secure Password Hashing  
✔ Protected Routes  
✔ Responsive UI with Tailwind CSS  
✔ RESTful API Architecture  
✔ Clean folder structure following industry best practices  

---

## 🏗️ System Architecture

```mermaid
graph TD
    Client[React Frontend] -->|HTTP Requests| API[Node.js & Express Backend]
    API -->|CRUD Operations| DB[(MongoDB Database)]
    API -->|Sends JWT Token| Client
    Client -->|Authorization Header| API
