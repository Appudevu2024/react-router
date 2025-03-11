import React from 'react'
import App from '../App'
import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function root() {
    return (
        <>
            <header className='headerSection'>
                <Nav>
                    <Nav.Item>
                        My Store
                    </Nav.Item>
                </Nav>
            </header>

            <Outlet />

            <footer className='footerSection'>
               
                <p className='text-center '>Mystore &copy; 2025</p>
            </footer>
        </>
    )
}

export default root