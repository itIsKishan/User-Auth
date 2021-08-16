import React, { useState, useEffect } from 'react'
import { Link, Route} from 'react-router-dom'
import ImageComponent from '../DisplayImage/ImageComponent'
import LoginComponet from './LoginComponent'
import RegisterComponent from './RegisterComponent'

const AuthComponent = (props) =>{
    const [ toggle, setToggle ]  = useState(true)

    const logout = () =>{
        setToggle(!toggle)
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            logout()
        }
    },[])
    
    return(
        <div>
            {
                toggle ? (
                    <div>
                        <h3>To Watch The Beautiful Image <Link to = '/login'>Login</Link> or <Link to = '/register' >Register</Link></h3>
                        <Route path = '/login' render = { (props) =>{
                            return <LoginComponet {...props} logout = {logout} />
                        }} exact = {true} />
                        <Route path = '/register' component = {RegisterComponent} exact = {true} />
                    </div>
                ) : (
                    <div>
                        <h1><Link to = '/logout' onClick = {logout} >Logout</Link></h1>
                        <ImageComponent />
                    </div>
                )
            }
            
        </div>
    )
}

export default AuthComponent