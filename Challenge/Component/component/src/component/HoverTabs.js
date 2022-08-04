import React,{useState} from "react";
import "./HoverTabs.css";

const information = [{
    id:1,
    key:"London",
    content:"London is the capital of England",
},{
    id:2,
    key:"Paris",
    content:"Paris is the capital of France",
},{
    id:3,
    key:"Tokyo",
    content:"Tokyo is the capital of Japan",
}]

const HoverTabs = () => {
    const [cities, setCities] = useState(information);
    const [index, setIndex] = useState(-1);
    const onMouseOver = (index) =>{
       setIndex(index)
    }
    const onMouseOut = (index) =>{
       setIndex(-1);
    }
    return ( 
        <div className="hovertabs">
            <div className="hovertabs__sidebar__overall">
            {
                cities.map((city, i) =>{
                    return(
                            <p 
                            key={city.id} 
                            className="hovertabs__sidebar__each"
                            onMouseOver={() => onMouseOver(i)}
                            onMouseOut={() => onMouseOut()}
                            >{city.key}</p>

                    )
                })
            }
            </div>
            <div>
            {
                cities.map((city, i) =>{
                    return(
                        (
                        index === i &&
                        <div className="hovertabs__article" key={city.id}>
                            <p>{city.key}</p>
                            <p>{city.content}</p>
                        </div>
                        )
                       
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default HoverTabs;