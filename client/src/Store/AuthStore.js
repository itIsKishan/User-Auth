import { createStore, combineReducers, applyMiddleware } from 'redux'
import AuthReducer from '../Reducer/AuthReducer'
import thunk from 'redux-thunk'

const AuthStore = () =>{
    const store = createStore(combineReducers({
        user : AuthReducer 
    }),applyMiddleware(thunk))

    return store
}

export default AuthStore