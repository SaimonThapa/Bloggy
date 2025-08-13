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

### ⁉️Quick Start without MongoDB (Optional)

If you don’t want to set up MongoDB, you can Skip 3️⃣!!run the app using your fallback JSON file with json-server:
```bash
npx json-server --watch frontend/data/db.json --routes frontend/data/routes.json --port 3000
```

### 3️⃣ Setup environment variables to run mongoDB & Express server(Preffered)
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
├── backend/              # Express API + MongoDB models
│   ├── models/           # Mongoose schemas
│   ├── server.js         # App entry point
│   ├── package.json      # Backend dependencies & scripts
│   └── .env              # MongoDB URI, PORT
├── frontend/             # React + Tailwind SPA
│   ├── data/             # Fallback JSON data (db.json)
│   ├── src/              # Components & pages
│   ├── public/           # Static assets
│   ├── vite.config.js    # Vite config
│   ├── index.html        # HTML entry
│   └── package.json      # Frontend dependencies & scripts
└── package.json          # Root scripts (install,dev)
```