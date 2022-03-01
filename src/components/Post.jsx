//React imports
import React from 'react';

//custom imports 

function Post({post}) {
    return (
                <>
                    <h5 >{post.content}</h5>
                    <img src={URL.createObjectURL(post.image)} />
                </>
    )
    
}

export default Post;