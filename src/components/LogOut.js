import React from 'react'
import { BrowserRouter as Router, Link, Redirect,  useHistory } from 'react-router-dom'
export default function LogOut({setUser}) {
    const history = useHistory();
    const logOutFnk =()=>{
        localStorage.setItem('username', null)
        localStorage.setItem('password', null)
        localStorage.setItem('id', null)
        localStorage.setItem('isLoged', null)
        setUser(
            { id:null, username:null,
             password:null, isLoged:null }
            )
            history.push('/login')
    }
    
    return (
        <div>
            <button onClick={()=>{
                     logOutFnk()

            }}>LogOut</button>
        </div>
    )
}
