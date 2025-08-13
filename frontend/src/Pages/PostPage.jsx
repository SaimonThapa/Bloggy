import { useParams, useNavigate } from "react-router-dom"

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const post = posts.find(post => post.id.toString() === id)
  
  if (!post) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Post not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800"
        >
          Back to Home
        </button>
      </div>
    )
  }
  
  const handleDeletePost = () => {
    handleDelete(post.id)
    navigate('/')
  }
  
  return (
<div className="h-full flex flex-col p-6 bg-white rounded shadow-md">
  <button 
    onClick={() => navigate('/')}
    className="self-start mb-6 px-3 py-1 text-sm font-medium border border-amber-600 text-amber-700 rounded hover:bg-amber-100 transition-colors flex items-center gap-1"
  >
    ← Back
  </button>

  <div className="flex-1 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
    <p className="text-gray-500 text-sm mb-6">{post.time}</p>

    <div className="prose prose-base prose-stone max-w-none">
      <p className="whitespace-pre-wrap">{post.body}</p>
    </div>
  </div>

  <div className="flex justify-end pt-6">
    <button 
      onClick={handleDeletePost}
      className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      Delete Post
    </button>
  </div>
</div>

  )
}
  export default PostPage