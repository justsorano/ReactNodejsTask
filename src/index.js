import React from 'react'
import {createStore,compose} from 'redux'
import {render} from 'react-dom'
import {Provider,} from 'react-redux'
import { rootReducer } from './Redux/rootReducer'
import './assets/scss/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
const store = createStore(rootReducer,compose())
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)
render(app,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
