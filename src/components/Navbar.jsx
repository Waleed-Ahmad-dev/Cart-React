import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <div className='navabar'>
            <div className='logo-contanier'>
                <img href='/' className="logo" src="/Logo.svg" alt="Logo" />
                <label className='label'>Shadow Store</label>
            </div>
            <ul className='nav-links'>
                <li ><Link className='links' to="/">Home</Link></li>
                <li ><Link className='links' to="/shop">Shop</Link></li>
                <li ><Link className='links' to="/cart">Cart</Link></li>
            </ul>
            <div className="github-container">
                <Link to="https://github.com/Waleed-Ahmad-dev" target="_blank" rel="noopener noreferrer">
                    <img className="github-logo" src="/github.svg" alt="GitHub" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;