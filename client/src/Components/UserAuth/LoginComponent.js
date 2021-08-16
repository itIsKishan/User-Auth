import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../Action/AuthAction'

const LoginComponet = (props) =>{
    const { logout } = props
    const [ loginpassword, setLoginPassword ] = useState('')
    const [ loginEmail, setLoginEmail ] = useState('')

    const dispatch = useDispatch()

    const handleLoginChange = (e) =>{
        let name = e.target.name
        if(name === 'email'){
            setLoginEmail(e.target.value)
        } else if(name === 'password'){
            setLoginPassword(e.target.value)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const loginInfo = {
            email : loginEmail,
            password : loginpassword
        }
        console.log(loginInfo)
        dispatch(LoginUser(loginInfo,logout))
    }
    return(
        <div>
            <h1>Login Now</h1>
            <form onSubmit = {handleSubmit}>
                <input type = 'email' autoFocus = {true} placeholder = 'Enter Email' name = 'email' value = { loginEmail } onChange = { handleLoginChange} />
                <input type = 'email' placeholder = 'Enter Password' name = 'password' value = { loginpassword } onChange = { handleLoginChange } />
                <input type = 'submit' value = 'Login' />
            </form>
        </div>
    )
}

export default LoginComponet