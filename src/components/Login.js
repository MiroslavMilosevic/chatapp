import React, { useState, useEffect} from 'react'
// import { BrowserRouter as Router, Link, Redirect,  useHistory } from 'react-router-dom'
import { BrowserRouter as Redirect,  useHistory } from 'react-router-dom'
import '../services/style.css'
export default function Login({usersArray,setUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const myHistory= useHistory();
    useEffect(() => {

    }, [])

    return (
        <div>
            <div className='inputWraper'>         
            <input className='inputUsername inputLogin' type='text' placeholder='username' value={username}  onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className='inputPassword inputLogin' type='password' placeholder='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button className='ulogujSeBtn' onClick={
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
                    alert('Uneti username ili password nisu ispravni')
                }
                      
            }
            }>Uloguj se</button>
            <button className='noneDisplay' onClick={()=>{
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
