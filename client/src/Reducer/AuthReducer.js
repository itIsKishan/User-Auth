const initalAuthReducer = []

const AuthReducer = ( state = initalAuthReducer, action) =>{
    switch(action.type){
        case 'REGISTER_USER' : {
            return [...state, action.payload]
        }
        case 'LOGIN_USER' : {
            return [action.payload]
        }
        default : {
            return [...state]
        }
    }
    
}

export default AuthReducer