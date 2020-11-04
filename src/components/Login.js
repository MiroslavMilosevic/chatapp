import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Link, Redirect,  useHistory } from 'react-router-dom'

export default function Login({usersArray,setUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const myHistory= useHistory();
    useEffect(() => {

    }, [])

    return (
        <div>
                     
            <input type='text' placeholder='username' value={username}  onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type='password' placeholder='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={
                ()=>{console.log(username, password)
                    let isSuccessful=false;
                   usersArray.forEach(element => {
                       if(element.username===username.trim() && element.password===password.trim()){
                           console.log('uspesno');
                           isSuccessful=true;
                           localStorage.setItem('id', element.id.toString())
                           localStorage.setItem('username', element.username)
                           localStorage.setItem('password', element.password)
                           localStorage.setItem('isLoged', 'true')
                           setUser(
                            {id:localStorage.getItem('id'), username:localStorage.getItem('username'),
                             password:localStorage.getItem('password'), isLoged:true}
                            )
                    
                        //  console.log(localStorage.getItem('username'))
                        //  console.log(   localStorage.getItem('password'))
                        //  console.log(   localStorage.getItem('id'))
                         setTimeout(() => {
                             myHistory.push('home')
                         }, 150);
                      
                       }
                   });
                if(!isSuccessful){
                    console.log('neuspesno');
                }
                      
            }
            }>Uloguj se</button>
            <button onClick={()=>{
                localStorage.setItem('username', null)
                localStorage.setItem('password', null)
                localStorage.setItem('id', null)
                localStorage.setItem('isLoged', null)
                setUser(
                    { id:localStorage.getItem('id'), username:localStorage.getItem('username'),
                     password:localStorage.getItem('password'), isLoged:null }
                    )
        
            }}>Set to null</button>

        </div>
    )
}
