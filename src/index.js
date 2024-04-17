import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxApp from "./App-redux";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./redux/reducers";
import { logging } from "./redux/middlewares/logging";

const store = createStore(reducer,
    compose(applyMiddleware(logging),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




// const testButton =document.querySelector(".testButton")
// const items = document.querySelector(".testUl")
// const inputValue = document.querySelector(".testInput")
//
// store.subscribe(() => {
//     // console.log('subscribe', store.getState())
//
//
//     items.innerHTML=''
//     inputValue(".testInput").value = ''
//
//     store.getState().map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         items.appendChild(li)
//     })
// })
//
// testButton.addEventListener('click', () => {
//     console.log('INPUT', inputValue.value)
//     store.dispatch({type: 'WRITE', payload: inputValue.value})
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <ReduxApp />
          </Provider>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
