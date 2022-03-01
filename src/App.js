//React imports
import React, { useCallback, useEffect, useState } from 'react';

//custom imports 
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  const [user, setUser] = useState(
                                    {
                                        username: '',
                                        password: ''
                                    }) 

  const [posts, setPosts] = useState([])

  const handleAddPosts = useCallback((newPost)=>{
      setPosts([newPost,...posts])
  },[posts])   //creates the arrow function and executes it only when posts array changes
  
  useEffect(()=>{
    document.title = user.username ? `${user.username} 's feed` : 'Please login'
  },[user.username])

  if (!user.username) {
    return <Login setUser={setUser}/>
  }else{
    return (
        <>
         <Header currentUser={user} setUser={setUser}/>
         <CreatePost currentUser={user.username} handleAddPosts={handleAddPosts}/>
         <PostList posts={posts}/>
        </>
       
       
    );
  }

}

export default App;
