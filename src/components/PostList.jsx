//React imports
import React from 'react';

//custom imports 
import Post from './Post';

function PostList({posts}) {

    return posts.map((post,index)=> <Post key={index} post={post}/> )
                                 
}


export default PostList;