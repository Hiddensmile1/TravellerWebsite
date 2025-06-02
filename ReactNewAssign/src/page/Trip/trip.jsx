import "./style.css";
// import Gallery from "../../components/Gallery/gallery";
import { useState, useEffect } from "react";

const Trip = () => {
    const[data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch ("https://restcountries.com/v3.1/all")
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
                    <div><h1>Available Countries</h1></div>
                    <div className="CardCon">
                       {data.map((value)=> {
                        return (
                            <div className="card">
                                <div className="cardImg">
                                    <img src={value.flags?.png} alt={value.name?.common} />
                               <div className="contents">
                                    <div>
                                    Name: {value.name?.common}
                                </div>
                                 <div>
                                    Region: <span style={{ color: "green" }}>{value.region}</span>
                                   
                                </div>
                                <div>
                                    Map: {value.maps?.googleMaps ? <a href={value.maps.googleMaps} target="_self" rel="noopener noreferrer">View Map</a> : "N/A"}
                                </div>
                                <div>
                                    Capital: {value.capital ? value.capital[0] : "N/A"}
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