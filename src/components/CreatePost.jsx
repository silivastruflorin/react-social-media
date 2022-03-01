import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

//custom iports


function CreatePost({user, setPosts, posts}) {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const imageInputRef = useRef()

    function handleSubmit(event){
        event.preventDefault();
        // const post = { content: content, image: image, user: user}; //equivalent
        const post = { content, image, user}; //new posts
        setPosts([...posts, post]); //add new post to the existing

        //clear the submit to be ready for the next input
        setContent(''); //input value ={content}
        imageInputRef.current.value = ""
    }


    return(
        <div>
            <h1>CreatePost</h1>    
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add post Content"
                     onChange={(e)=> setContent(e.target.value) }
                     value={content}
                     />
                <input type="file" 
                    onChange={(e)=> setImage(e.target.files[0])} 
                    ref={imageInputRef}    
                />
                <button type='submit'>Submit Post</button>
            </form>
        </div>       
    );
}

export default CreatePost;