import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import FooterFunction from './components/FooterFunction'
import MainFunction from './components/MainFunction';
//Router
import { Navigate, Route, Routes } from 'react-router-dom';


function RouterBlog() {
  return ( 
    <React.Fragment>

      <HeaderFunction name="Omer Mercan"/>
      <div className='container'>
        <Routes>
          <Route path={"/"} elementName= {<MainFunction/>}/>
          <Route path={"/index"} elementName= {<MainFunction/>}/>
          <Route path={"*"} elementName= {<Navigate to={"/"}/>}/>
        </Routes>
      </div>
      
      <MainFunction/>
      <FooterFunction/>

    </React.Fragment>
  )
}
export default RouterBlog