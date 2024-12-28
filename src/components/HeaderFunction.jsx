import React, { useContext } from 'react'
import background from '../images/Under The Milky Way.jpg'

import '../style.css'
import { ThemeContext } from '../ThemeContext'



export default function HeaderFunction() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  {/* start Header */}
    {/* Option 1 (Styling) */}
    <header style= {{color:"blue"}}></header>

    {/* Option 2 (Styling) */}
    // const headerCss={
    //   "background-image":"url('../images/Under The Milky Way.jpg')",
    //   "background-size":"cover",
    //   "background-positinon":"center",
    //   "height":"50vh",
    //   "width":"100%",
    //   "background-color":"black",
    //   "color":"white",
    // }

  return (
    <div>
      {/* Nav start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button
      data-mdb-collapse-init=""
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarLeftAlignExample"
      aria-controls="navbarLeftAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        {/* Navbar dropdown */}
        <li className="nav-item dropdown">
          <a
            data-mdb-dropdown-init=""
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
          {/* Dropdown menu */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <button onClick={toggleTheme} className="btn btn-warning ms-2" >  Dark Mode</button>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>
{/* end Nav */}

    {/* start Header */}
    {/* Option 1 (Styling) */}
    {/* <header style= {{color:"blue"}}></header> */}

    {/* Option 2 (Styling) */}
    {/* <header style= {headerCss}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate pariatur asperiores corrupti facilis incidunt omnis placeat maiores amet, accusantium nam, temporibus ut mollitia exercitationem illum harum fugit quae voluptatem!
      Sint, pariatur. Nisi accusantium sunt ullam magni recusandae necessitatibus voluptatum ut voluptas, aliquam sequi nam, odio commodi voluptates. Vel esse impedit modi tenetur mollitia sequi maxime! Quae dolorum beatae adipisci.
      Tempore ab, nisi numquam excepturi dolorum error labore ullam repellendus. Ipsa, sunt culpa id hic minima repudiandae dolore corporis nisi voluptates! Quas quis id est nemo eum delectus sit animi.
      Obcaecati autem ipsum optio minus sint incidunt possimus sed veniam est laudantium unde recusandae dolorem modi natus perferendis tempora, molestias ea hic odio in excepturi eaque aperiam dignissimos tempore. Cum.
    </header>
    <img src={background} alt="" /> */}

    {/* option 3 */}
      <header className='backgroundExternal'>
        <p className='specialParag'>Welcome to React Tutorial</p>
    </header>

    {/* end Header */}

    </div>
  )
}
