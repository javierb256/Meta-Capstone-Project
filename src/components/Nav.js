import Logo from '../assets/Logo .svg'
import { Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home"
import Reserve from "../pages/Reserve"

function Nav(){
    return (
        <>
        
        <nav className='navbar'>
            <Link to="/">
            <img src={Logo} alt="Logo with yellow lemon"></img>
            </Link>
            <ul className='navbar-links'> 
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link href='/'>Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link href='/'>Order Online</Link>
                </li>
                <li>
                    <Link href='/'>Log In</Link>
                </li>
                   
            </ul>
        </nav>
        <Routes>
            <Route path="/home" element ={<Home />}/>
            <Route path="/reservations" element ={<Reserve />}/>
            
        </Routes>
        </>
    )
}

export default Nav;