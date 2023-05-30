import Logo from '../assets/Logo .svg'

function Nav(){
    return (
        <nav>
            <img src={Logo} alt="Logo with yellow lemon"></img>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Log In</a>
                </li>
                   
            </ul>
        </nav>
    )
}

export default Nav;