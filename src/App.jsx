import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

import PageLayout from "./PageLayout"
import apiRequest from "./apiRequest"
import Home from "./assets/Pages/Home"
import NewPost from "./assets/Pages/NewPost"
import PostPage from "./assets/Pages/PostPage"
import About from "./assets/Pages/About"

const App = () => {

  const Api_Url = 'http://localhost:3500/posts'

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])
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
      console.log(retrivedPosts);
      // retrive 1
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