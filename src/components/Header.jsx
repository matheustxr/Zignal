import React, { useState } from 'react'
import '../styles/main.css';

/*ROUTER*/
import {BrowserRouter as Router, Routes , Route, Link} from "react-router-dom" 
import Home from "../pages/Home"
import About from "../pages/About"
import Discograph from "../pages/Discograph"
import Videos from "../pages/Videos"

/*REACTSTRAP*/
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <Router>
        <header className="w-full relative z-50 bg-black/25 ">
          <Navbar className='transparent navbar-expand-md navbar-dark' color="faded" light>
            <NavbarBrand href="/" className="me-auto">
              <Link to="/">
                <img className='w-170' src="https://gusttavolima.site/wp-content/themes/gusttavo-lima/assets/img/logo-GL.png" alt="" />
              </Link>
            </NavbarBrand>

            <NavbarToggler onClick={toggleNavbar} className="me-2" />

            <Collapse  isOpen={!collapsed} navbar>
              <Nav navbar className='w-full flex justify-around'>
                <NavItem className='borderBottomAnimation'>
                  <NavLink href="/">Inicio</NavLink>
                </NavItem>

                <NavItem className='borderBottomAnimation'>
                  <NavLink href="/sobre">Sobre </NavLink>
                </NavItem>

                <NavItem className='borderBottomAnimation'>
                  <NavLink href="/discografia">Discografia </NavLink>
                </NavItem>

                <NavItem className='borderBottomAnimation'>
                  <NavLink href="/videos">Videos </NavLink>
                </NavItem>

                <NavItem className='borderBottomAnimation'>
                  <NavLink href="https://onerpm.link/602547483084" target='_blank' >Onde Ouvir </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>

        <main>
          
            <Routes >
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/sobre" element={<About/>} />
              <Route exact path="/discografia" element={<Discograph/>} />
              <Route exact path="/videos" element={<Videos/>} />
            </Routes >
          
        </main>
      </Router>
  )
}
  