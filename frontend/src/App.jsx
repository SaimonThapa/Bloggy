import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

import PageLayout from "./PageLayout"
import apiRequest from "./apiRequest"
import Home from "./Pages/Home"
import NewPost from "./Pages/NewPost"
import PostPage from "./Pages/PostPage"
import About from "./Pages/About"

const App = () => {

  const Api_Url = 'http://localhost:3000/api/posts'

  const staticPosts = [
    {
      id: 1,
      title: "First Title",
      time: "01/08/2025 - 11:22 PM",
      body: "Hello everyone this is my first blog"
    },
    {
      id: "2",
      title: "Second Title",
      time: "2025-08-01 - 11:22 PM",
      body: "This is my second blog post"
    },
    {
      id: "3",
      title: "3rd Blog",
      time: "2025-08-01 - 1:41 PM",
      body: "This is now connected to the database"
    },
    {
      id: "4",
      title: "AI generated posts from here",
      time: "2025-08-01 - 1:41 PM",
      body: "Populating the page with some fake posts to simulate 'blog' type blogs"
    },
    {
      id: "5",
      title: "Getting Started with React",
      time: "2025-08-01 10:15 AM",
      body: "React is a JavaScript library for building user interfaces. It's component-based and allows you to build reusable pieces of UI. In this post, I’ll walk you through how I got started and what helped me the most as a beginner."
    },
    {
      id: "6",
      title: "CRUD Operations in React Made Simple",
      time: "2025-08-02 3:45 PM",
      body: "CRUD stands for Create, Read, Update, and Delete. I implemented basic CRUD using state and some dummy data before moving on to real database integration. Handling updates and deletes with confirmation modals feels super smooth."
    },
    {
      id: "7",
      title: "React Router is a Game Changer",
      time: "2025-08-02 11:20 PM",
      body: "Navigating between pages without a full reload? Yes, please! React Router lets you build SPAs with dynamic routing, and it feels so natural. Nested routes and route params made this blog project way more powerful."
    },
    {
      id: "8",
      title: "What I Learned Using Tailwind CSS",
      time: "2025-08-02 1:30 PM",
      body: "Tailwind CSS is utility-first, which felt weird at first but now I love it. You don’t write custom CSS as much—just use classes. The learning curve is small, and it speeds up my dev time a lot."
    },
    {
      id: "9",
      title: "Next Steps After Finishing This Blog",
      time: "2025-08-02 6:00 PM",
      body: "Now that this blog is functional, I want to deploy it and maybe even connect authentication. Thinking of using Firebase or Clerk for that. Stay tuned—more features coming soon!"
    },
    {
      id: "10",
      title: "Why I Chose React over Vue",
      time: "2025-08-03 12:00 AM",
      body: "Vue is great, but React’s community and job market are what pulled me in. JSX also feels more intuitive to me after some practice. That said, I still plan to try Vue in another mini project soon."
    },
    {
      id: "11",
      title: "Styling Buttons That Don’t Suck",
      time: "2025-08-03 7:45 AM",
      body: "Buttons are small, but they matter. I spent some time styling the back and delete buttons to feel more modern. Rounded edges, hover effects, and spacing make a huge difference in UX."
    },
    {
      id: "12",
      title: "Learning Through Projects Is Underrated",
      time: "2025-08-04 1:30 PM",
      body: "Tutorials are great, but nothing beats building a full app. This blog project taught me more in a week than hours of videos. You run into real problems—and learn real solutions."
    },
    {
      id: "13",
      title: "Dark Mode? Not Yet, But Soon",
      time: "2025-08-05 2:22 PM",
      body: "I haven’t added dark mode yet, but Tailwind makes it easy with the `dark:` prefix. Once I’m done cleaning up the layout and routes, I’ll probably add it. Dark mode is honestly a must these days."
    },
    {
      id: "14",
      title: "How to Connect to MongoDB Database",
      time: "2025-08-05 9:00 PM",
      body: "Create a .env file in /backend with your MONGO_URI and PORT. Run the server to connect to MongoDB. If the backend fails, the app will load sample data which resets on refresh."
    }
  ]

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState(staticPosts)
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const navigate = useNavigate()


  useEffect(()=>{
    const fetchPosts = async() =>{
    try {
      const response = await fetch(Api_Url);
      if(!response.ok){
        throw new Error("Error Fetching Data from the backend")
      }
      const retrivedPosts = await response.json()
      setPosts(retrivedPosts)
      
    } catch (error) {
      console.log(error.message)
    }
  }
  fetchPosts();
  },[])


  const handleSubmit = async(e) => {
    const dateString = dayjs().format('YYYY/MM/DD - hh:mm A')

    let newId = posts.length ? Math.max(...posts.map(post => parseInt(post.id))) + 1 : 1;
    newId = String(newId)
    const newPost = {
            id:newId,
            title:postTitle,
            time:dateString,
            body:postBody
        }

    const PostOptions = {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    const result = await apiRequest(Api_Url, PostOptions)
    if(result){
      console.log(result)
    }
    
    const updatedPostSList = [...posts, newPost]
    setPosts(updatedPostSList)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = async(id) => {
    const updatedPostSList = posts.filter((post) => id !== post.id)
    setPosts(updatedPostSList)

    const reqUrl = `${Api_Url}/${String(id)}`
    const deleteOption = {method:"DELETE"}
    const result = await apiRequest(reqUrl, deleteOption)
    if(result) console.log("Error Deleting Post BOMBOCLART", result)
}

  return (
      <Routes>
        <Route path="/" element={
          <PageLayout 
            search={search}
            setSearch={setSearch} 
          />
        }>
          {/* Nested routes inside PageLayout */}
          <Route index element={
            <Home posts={posts.filter((post)=>post.title.toLowerCase().includes(search.toLowerCase())).reverse()} />
          } />
          
          <Route path="post" element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          } />
          
          <Route path="post/:id" element={
            <PostPage
              posts={posts}
              handleDelete={handleDelete}
            />
          } />
          
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  )
}

export default App