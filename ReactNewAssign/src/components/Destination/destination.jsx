import "./style.css"
import { IoSearchSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";

const Destination = () => {
    return (
        <div>
            <div className="mainDestine">
                <div className="subdestine">
                    <h1>The Best Destination</h1>
                    <p>We have the best destination for you. The best place in the budget. Premier Travel Going. The Distance for you.</p>
                    <div className="info">
                        <div className="details">
                            <div className="location">
                                <h3>Location</h3>
                                <p>Dubai</p>
                            </div>
                            <div className="date">
                                <h3>Date</h3>
                                <p>06 Dec</p>
                            </div>
                            <div className="travellers">
                                <h3>Travellers</h3>
                                <p>20 Adults</p>
                            </div>
                            <div className="price">
                                <h3>Price Range</h3>
                                <p>$5,000</p>
                            </div>
                            <div>
                                <IoSearchSharp className="search" />
                            </div>
                        </div>
                        <div className="scroll">
                            <IoChevronBackSharp className="back" />
                            <IoChevronForwardSharp className="forward" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destination