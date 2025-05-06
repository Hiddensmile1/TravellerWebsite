import "./style.css"
import MorningView from "../../assets/image/morningView.jpg"
import NightView from "../../assets/image/nightView.jpg"
import Train from "../../assets/image/Train.jpg"

const Gallery = () => {
    return (
        <div>
            <div className="galleryCon">
                <div className="gallerySubCon">
                    <div className="card">
                        <img src={MorningView} />
                        <div className="cardContent">
                            <h3>Morning View</h3>
                            <p>The best place in the budget. Premier Travel Going. The Distance for you.</p>
                        </div>
                    </div>


                    <div className="card">
                        <img src={NightView} />
                        <div className="cardContent">
                            <h3>Night View</h3>
                            <p>The best place in the budget. Premier Travel Going. The Distance for you.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={Train} />
                        <div className="cardContent">
                            <h3>Train View</h3>
                            <p>The best place in the budget. Premier Travel Going. The Distance for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery