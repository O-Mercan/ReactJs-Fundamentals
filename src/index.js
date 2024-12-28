import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponentsTutorials from './components/FunctionComponentsTutorials'
import FunctionComponentsTutorials from './components/FunctionComponentsTutorials';
import RouterBlog from './RouterBlog';
// Router
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from './ThemeContext'; 

// Redux
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComponentsTutorials /> */}
    {/* <FunctionComponentsTutorials/> */}
    <BrowserRouter>
    {/* Redux Login */}
  <Provider store={store}>

      {/* Context Api import */}
    <ThemeProvider>
      <RouterBlog />
    </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
