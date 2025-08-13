import { Link } from "react-router-dom"

const Home = ({ posts }) => {
  return (
    <div className="home w-full h-full">
      {posts && posts.length > 0 ? (
        <div className="w-full h-full overflow-y-scroll p-1.5">
          {posts.map(post => (
            <Link 
              key={post.id} 
              to={`/post/${post.id}`}
              className="block mb-4 p-4 border rounded mr-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.time}</p>
              <p className="line-clamp-3">{post.body}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}

export default Home