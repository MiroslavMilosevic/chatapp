import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import LogOut from './LogOut'

export default function Home({ usersArray,setUser }) {
   // const [isLoged, setIsLoged] = useState(localStorage.getItem('isLoged'));
    const [userLocal, setUserLocal] = useState({});

    useEffect(() => {
        setUser(
            { id: localStorage.getItem('id'), username: localStorage.getItem('username'), password: localStorage.getItem('password'), isLoged:localStorage.getItem('isLoged')}
        )
     //   setIsLoged(localStorage.getItem('isLoged'));
   
    },[])


    return (
        
        <div>
            <LogOut setUser={setUser}/>
              {localStorage.getItem('isLoged') !==null&&localStorage.getItem('isLoged')!=='null' ?   <> <button onClick={() => { console.log(localStorage.getItem('isLoged'));console.log(userLocal.isLoged); }}>DUGME</button>
               <div> {usersArray.map(el => <p key={uuid()}>Idi na Chat sa: <Link key={uuid()} to={`chat/${el.id}`}  >{el.username}</Link> </p>)} </div> </>
              : "adfdfasdfas"}        

         
   
            
           
        </div>    
   
      
        )
}
