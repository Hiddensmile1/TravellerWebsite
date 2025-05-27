import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="subHeader">
                    <div className="logo">
                        Traveler
                    </div>
                    <nav className="navBar">
                        <Link to="/" className="home nav">Home</Link>
                        <Link to="/trip"  className="nav" >Trip</Link>
                        <Link to="/services" className="nav" >Services</Link>
                        <Link to="/PicGallery" className="nav" >Gallery</Link>
                        <Link to="blog" className="nav" >Blog</Link>
                    </nav>
                    <div>
                        <button className="register" type="submit">Register</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header