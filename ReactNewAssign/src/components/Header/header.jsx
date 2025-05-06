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
                        <a href="" className="home">Home</a>
                        <a href="">Trip</a>
                        <a href="">Services</a>
                        <a href="">Gallery</a>
                        <a href="">Blog</a>
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