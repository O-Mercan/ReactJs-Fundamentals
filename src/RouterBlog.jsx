import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import FooterFunction from './components/FooterFunction'
import MainFunction from './components/MainFunction';
//Router
import { Navigate, Route, Routes } from 'react-router-dom';
// Redux Login
import LoginForm from '../src/components/login/loginForm';

import RegisterForm from './components/register/RegisterForm';


// RouterBlog
function RouterBlog() {
  return ( 
    <React.Fragment>

      <HeaderFunction name="Omer Mercan"/>
      <div className='container'>
        <Routes>
          <Route path={"/"} elementName= {<MainFunction/>}/>
          <Route path={"/index"} elementName= {<MainFunction/>}/>
          <Route path={"/login"} elementName={<LoginForm />} />
          <Route path={"/register"} elementName={<RegisterForm />} />
          <Route path={"*"} elementName= {<Navigate to={"/"}/>}/>
        </Routes>
      </div>
      
      {/* MainFunction */}
      <MainFunction/>

      {/* FooterFunction */}
      <FooterFunction/>

    </React.Fragment>
  )
}
export default RouterBlog