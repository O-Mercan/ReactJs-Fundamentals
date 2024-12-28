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
import {ThemeProvider} from './ThemeContext'; // Eğer kendi oluşturduğunuz bir dosyadan kullanıyorsanız


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComponentsTutorials /> */}
    {/* <FunctionComponentsTutorials/> */}
    <BrowserRouter>
    {/* Context Api import */}
    <ThemeProvider>
      <RouterBlog />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
