const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <div className="h-full w-full p-3 gap-y-1">
      <h1 className="text-2xl">NewPost</h1>
      {/* Your form here */}
      <form className="flex flex-col gap-1" onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(e);
      }}>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" 
          placeholder="Title Here"
          required
          value={postTitle}
          onChange={(e)=>{setPostTitle(e.target.value)}}
          className="border p-1 pl-2"
        />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="body">Post:</label>
          <textarea name="body" id="body" 
          placeholder="Post Here"
          required
          value={postBody}
          onChange={(e)=>{setPostBody(e.target.value)}}
          className="border p-1 w-full h-50"
          />
        </div>
        <button type="submit"
        className="self-end border rounded-md transition-colors 
        duration-300 cursor-pointer
        bg-amber-600 w-15 active:bg-amber-500 
        active:scale-98 hover:bg-green-600 "
        >Submit</button>
      </form>
    </div>
  )
}

export default NewPost