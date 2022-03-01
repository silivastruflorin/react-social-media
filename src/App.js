//React imports
import React, { useEffect, useState } from 'react';

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
  
  useEffect(()=>{
    document.title = user.username ? `${user.username} 's feed` : 'Please login'
  },[user.username])

  if (!user.username) {
    return <Login setUser={setUser}/>
  }else{
    return (
        <>
         <Header currentUser={user} setUser={setUser}/>
         <CreatePost currentUser={user.username}  setPosts={setPosts} posts={posts}/>
         <PostList posts={posts}/>
        </>
       
       
    );
  }

}

export default App;
