# 📝 Bloggy

**Bloggy** is a full-stack blog app that I built while learning **React**, **Tailwind CSS**, and basic **CRUD** operations.  
It uses **React Router** for navigation, a **MongoDB** database to store posts, and **Express.js** to handle backend HTTP requests.  

What started as “nothing fancy” grew into a **full-stack application**. 

---

## ✨ Features

- ✅ Add posts  
- 📝 Edit posts  
- ❌ Delete posts  
- 📦 MongoDB database integration  
- 🎨 Responsive UI with Tailwind CSS  
- 🔗 React Router for smooth navigation  

---

## 📂 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/SaimonThapa/Bloggy.git
cd bloggy
```
### 2️⃣ Create .env in /backend Install dependencies for backend & frontend
```bash
npm install
```
This will install dependencies for both /backend and /frontend.

⁉️Note: If you just want to see how the website looks and works without loading the backend/database. Skip to 4️⃣!! the server will show sample data instead.

### 3️⃣ Setup environment variables
To run the server with the backend, before running the server, create a .env file inside the /backend folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
❗Note:
  Replace "your_mongodb_connection_string" with your actual MongoDB Atlas or local URI. If the backend doesn't run, the website will load sample data otherwise which are immutable, therefore any action will reset after refresh.

### 4️⃣ Run the app (backend + frontend)
```bash
npm run dev
```
This starts both the backend API and the frontend React app in parallel.


### 5️⃣ Open in your browser

Frontend runs at:
```
http://localhost:5173
```

## 📂 Project Structure
```bash
bloggy/
├── backend/          # Express API + MongoDB models
│   |── .env          # Backend environment variables
│   ├── models/       # Mongoose schemas
│   |── server.js     # App entry point
│   └── package.json
├── frontend/         # React + Tailwind SPA
│   ├── src/          # Components & pages
│   ├── vite.config.js
│   ├── index.html
│   └── package.json
└── package.json      # Root scripts (install, dev)
```