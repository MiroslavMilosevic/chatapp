import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid'
 import { BrowserRouter as Router, Link } from 'react-router-dom'
//import { BrowserRouter as Link } from 'react-router-dom'
import LogOut from './LogOut'

export default function Home({ usersArray,setUser }) {
   // const [isLoged, setIsLoged] = useState(localStorage.getItem('isLoged'));
   // const [userLocal, setUserLocal] = useState({});

    useEffect(() => {
        setUser(
            { id: localStorage.getItem('id'), username: localStorage.getItem('username'), password: localStorage.getItem('password'), isLoged:localStorage.getItem('isLoged')}
        )
     //   setIsLoged(localStorage.getItem('isLoged'));
   
    },[])


    return (
        
        <div className='homeWraper'>
            <LogOut setUser={setUser}/>
             <h1>Home</h1>
              <> <button className='noneDisplay' onClick={() => { console.log(localStorage.getItem('isLoged')) }}>DUGME</button>
               <div className='homeSpanWraper'> 
               {usersArray.filter(el=>{return el.id!==Number(localStorage.getItem('id')) })
               .map(el => <span className='chatsHomeSpan' key={uuid()}>Idi na Chat sa: <Link key={uuid()} to={`chat/${el.id}`}  >{el.username}</Link> </span>)} 


               </div> </> 
        </div>    
   
      
        )
}
