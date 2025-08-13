require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./models/post.model.js");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "This is the API for Bloggy. Welcome :)" });
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      return res
        .status(404)
        .json({ message: "Couldn't Load Posts From Database" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { id, title, time, body } = req.body;

    //validation
    if (!title || !body) {
      return res.status(400).json({ message: "Title and body are required" });
    }
    if (id) {
      const existingPost = await Post.findOne({ id });
      if (existingPost) {
        return res
          .status(409)
          .json({ message: "A post with this ID already exists" });
      }
    }
    //posting to database
    const post = await Post.create({
      id,
      title,
      time,
      body,
    });
    if (!post) {
      return res.status(404).json({ message: "Post Couldn't be Submitted" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOneAndDelete({ id: Number(id) });
    if (!post) {
      return res.status(404).json({ message: `Could not find post Id:${id} ` });
    }
    res.status(200).json({ message: `Post Id: ${id} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Bloggy",
  })
  .then(() => {
    console.log("Database Connection Successfull");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ DATABASE CONNECTION FAILED')
    console.error('━'.repeat(50))
    console.error('ERROR: Unable to connect to MongoDB database')
    console.error('REASON:', error.message)
    console.error('━'.repeat(50))
    console.error('TROUBLESHOOTING STEPS:')
    console.error('1. Check if MONGO_URI is correctly set in your .env file')
    console.error('2. Verify MongoDB Atlas connection string format')
    console.error('3. Ensure your IP address is whitelisted in MongoDB Atlas')
    console.error('4. Check if MongoDB service is running (if using local MongoDB)')
    console.error('5. Verify your database username and password are correct')
    console.error('━'.repeat(50))
    console.error('Expected .env format:')
    console.error('MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/databasename')
    console.error('PORT=5000')
    console.error('━'.repeat(50))
    console.error("FALLING BACK TO SAMPLE DATA")
    console.error("FRONTEND RUNNING ON: http://localhost:5173/")

    
    // Exit the process since we can't run without database
    process.exit(1)  
  });
