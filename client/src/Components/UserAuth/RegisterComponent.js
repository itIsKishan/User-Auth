import React ,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { RegisterUser } from '../../Action/AuthAction'

const RegisterComponent = (props) =>{

    const [ userName , setUserName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ phoneNumber , setPhoneNumber ] = useState('')
    const [ password , setPassword ] = useState('')
    
    const dispatch = useDispatch()

    const handleChangeInInput = (e) =>{
        const name = e.target.name
        if(name === 'name'){
            setUserName(e.target.value)
        } else if (name === 'email'){
            setEmail(e.target.value)
        } else if(name === 'phoneNumber'){
            setPhoneNumber(e.target.value)
        } else if(name === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit =  (e) =>{
        e.preventDefault()
        const info = {
            userName : userName,
            email : email,
            phoneNumber : phoneNumber,
            password : password
        }
        dispatch(RegisterUser(info,props))
        setUserName('')
        setPassword('')
        setPhoneNumber('')
        setEmail('')
    }

    return(
        <div>
            <h3>Register Now</h3>
            <form onSubmit = {(e) =>{handleSubmit(e)}} >
                <input type = 'text' placeholder = 'Enter Name' value = { userName } name = 'name' onChange = {(e) =>{handleChangeInInput(e)} } /><br/><br/>
                <input type = 'email' placeholder = 'Enter Email' value = { email } name = 'email' onChange = { (e) =>{handleChangeInInput(e)} } /><br/><br/>
                <input type = 'text' placeholder = 'Enter Phone Number' value = { phoneNumber } name = 'phoneNumber' onChange = { (e) =>{handleChangeInInput(e)}} /><br/><br/>
                <input type = 'password' placeholder = 'Enter Password' value = { password } name = 'password' onChange = { (e) =>{handleChangeInInput(e)}} /><br/><br/>
                <input type = 'submit' value = 'Register'  />
            </form>
        </div>
    )
}

export default RegisterComponent