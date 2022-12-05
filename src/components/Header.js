import './Header.css';
import logo from '../SVG/icon.svg';

function Header() {

    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <a href="#main">Main</a>
                <a href="#products">Products</a>
                <a href="#about">About us</a> 
            </nav>
        </header>
    );
    
}

export default Header;