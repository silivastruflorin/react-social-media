import React from 'react';
import { useState } from 'react';

function Login ({setUser}) {
    const [userCredentials, setUserCredentials] = useState(
        {
            username: '',
            password: ''
        }
    ) 


    function handleSubmit(e){
        e.preventDefault();
        setUser(userCredentials)
    }

    return(
        <div>
           <h1>Login Page</h1>
           <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder='username' onChange={
                    (e)=> setUserCredentials(
                            {...userCredentials, //keep what was before
                                username: e.target.value
                            }
                        )
                }></input>   

                <input placeholder='password' onChange={
                    (e) => setUserCredentials(
                        {...userCredentials, //keep what was before
                            password: e.target.value
                        }
                    )
                }></input>      
                <button type='submit'>Login</button>
            </form> 
        </div>
        
    )
}

export default Login;