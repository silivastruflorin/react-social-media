import React from 'react';


function Header({currentUser,setUser}) {
    return(
        <div>Welcome {currentUser.username} !
            <button onClick={()=> setUser({username:''})} >Logout</button> 
        </div>      
    );
}

export default Header;