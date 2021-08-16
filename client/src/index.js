import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AuthStore from './Store/AuthStore';

const store = AuthStore()

store.subscribe(() =>{
  console.log(store.getState())
})


ReactDOM.render(
<BrowserRouter>
<Provider store = {store}>
  <App/>
</Provider>
</BrowserRouter>, document.getElementById('root'))
