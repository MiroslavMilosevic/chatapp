import React from 'react'
import { BrowserRouter as Redirect,  useHistory } from 'react-router-dom'

export default function GoToLogin() {
    const myHistory = useHistory();
    return (
        <button className='goToLoginBtn' onClick={()=>{
            setTimeout(() => {
                myHistory.push('login')
            }, 150);
        }}>
            Idi na Login Stranicu
        </button>
    )
}
