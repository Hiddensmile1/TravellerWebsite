import "./style.css";
// import Gallery from "../../components/Gallery/gallery";
import { useState, useEffect } from "react";

const Trip = () => {
    const[data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch ("https://fakestoreapi.com/products")
        .then((response) => {
            return response.json();
        })
        .then((value) => {
            console.log(value);
            setData(value);
            // setData(value?.name);
        });
    }, []);

    return (
        <div>
           
           <div className="Container">
            <div className="subCon">
                <div className="trips">
                    <div><h1>Our Products</h1></div>
                    <div className="CardCon">
                       {data.map((value)=> {
                        return (
                            <div className="card">
                                <div className="cardImg">
                                    <img src={value.image} />
                               <div className="contents">
                                    <div>
                                    Number: {value.id}
                                </div>
                                 <div>
                                     Name: <span style={{ color: "green" }}> title: {value.title}</span>
                                   
                                </div>
                                {/* <div>
                                    description: {value.description}
                                </div> */}
                                <div>
                                    Category: {value.category}
                                </div>
                                
                                
                                </div>
                            </div>
                               </div>
                        );
                       })}
                      
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Trip