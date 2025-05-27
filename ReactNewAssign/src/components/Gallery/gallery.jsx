import "./style.css"
import MorningView from "../../assets/image/morningView.jpg"
import NightView from "../../assets/image/nightView.jpg"
import Train from "../../assets/image/Train.jpg"
import { MdOutlineStarPurple500 } from "react-icons/md";

const Gallery = () => {
    return (
        <div>
            <div className="galleryCon">
                <div className="gallerySubCon">
                    <div className="card">
                        <img src={MorningView} />
                        <div className="cardContent">

                            <div className="subCard">
                                <h3>Enjoy the beautiful view</h3>
                                <p style={{ fontSize: "19px" }}>Indonesia</p>
                            </div>
                            <div className="starbtn">
                                <div className="star">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <div style={{}}>4.9</div>
                                <div className="btn">
                                    <button type="submit">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <img src={NightView} />
                        <div className="cardContent">
                            <div className="subCard">
                                <h3>Cool environment</h3>
                                <p style={{ fontSize: "19px" }}>Switzerland</p>
                            </div>
                            <div className="starbtn">
                                <div className="star">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <div>4.9</div>
                                <div className="btn">
                                    <button type="submit">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Train} />
                        <div className="cardContent">
                            <div className="subCard">
                                <h3>Easy transporting experience</h3>
                                <p style={{ fontSize: "19px" }}>Italy</p>
                            </div>
                            <div className="starbtn">
                                <div className="star">
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                    <MdOutlineStarPurple500 />
                                </div>
                                <div>5.0</div>
                                <div className="btn">
                                    <button type="submit">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery