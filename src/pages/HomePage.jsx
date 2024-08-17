import { Link } from "react-router-dom";
import '../styles/global.css'

function HomePage() {
    return (
        <div className="home-container">
            <img className="bg-image" src="/Bacground-cover.svg" alt="background Image" />
            <div className="overlay">
                <h1 className="headline">Welcome to Shadow Store</h1>
                <p className="tagline">Your one-stop shop for everything awesome</p>
                <Link to="/shop" className="cta-btn">Shop Now</Link>
            </div>
        </div>
    );
}

export default HomePage
