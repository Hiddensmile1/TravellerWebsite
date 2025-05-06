import "./style.css"
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Traveler from "../../assets/image/travelerImg.png"
const Content = () => {

    return (
        <div>
            <section className="parentContent">
                <div className="subContent">
                    <div className="leftContent">
                        <div className="heading">
                            Our travel agents are with the best
                            service we have.
                        </div>
                        <div className="subHead">
                            The best place in the budget. Premier Travel Going.
                            The Distance for you.
                            The best vacation is the one you will never forget.
                        </div>
                        <div className="started">
                            <button type="submit">Get Started</button>
                            <a href="https://youtu.be/LRQBzLq279c?si=NPplgiIdMG5J5Go_"><MdOutlinePlayCircleOutline /></a>
                            <p><b>Play video</b></p>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="travelerImg">
                            <img src={Traveler} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content