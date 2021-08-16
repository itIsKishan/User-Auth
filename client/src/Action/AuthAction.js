import axios from 'axios'

export const Regsiter = (data) =>{
    return {
        type : 'REGISTER_USER',
        payload : data
    }
}

export const Login = (data) =>{
    return {
        type : 'LOGIN_USER',
        payload : data
    }
}

export const RegisterUser = (data,props) =>{
    return (disptach) =>{
        axios.post('http://localhost:3050/register',data)
        .then((user) =>{
            console.log(user)
            const data = user.data
            props.history.push('/login')
            disptach(Regsiter(data))
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const LoginUser = (data,logout) =>{
    return (dispatch) =>{
        axios.post('http://localhost:3050/login',data)
        .then((res) =>{
            const token = res.data
            dispatch(Login(token))
            localStorage.setItem('token',token.token)
            logout()
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}