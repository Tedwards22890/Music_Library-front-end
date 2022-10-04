import React, { useEffect, useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import axios from 'axios';



function App() {

useEffect(() => {
  const response = await axios.get('http://127.0.0.1:8000/music/')
})

const [posts, setPosts] = useState([])

function addNewPost(post){
  let tempPost=[...posts,post];

  setPosts(tempPost);
}

  return (
    <div className="parent">
      <DisplayPosts parentPost={posts}/>
      <PostEntry addnewPostProperty={addNewPost} />

    </div>
  );
}

export default App;
