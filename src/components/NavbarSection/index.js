import "./index.css"

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="icon-cont">
                <img className="icon" alt="icon" src="https://res.cloudinary.com/ccbp-tech-hanu/image/upload/v1680455357/photo_6145657262509765746_m_tl6bgc.jpg"/>
            </div>
            <div className="tabs-cont">
                <ul className="list-cont">
                    <li className="tab-select">Home</li>
                    <li>Our Offerings</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className="register-con">
                <button className="register-button" type="button">Register Now</button>
            </div>
        </div>
    )
}

export default Navbar