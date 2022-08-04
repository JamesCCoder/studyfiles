import React,{useState} from "react";
import "./Tabs.css";

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

const Tabs = () => {
    const [cities, setCities] = useState(information);
    const [index, setIndex] = useState(-1);

    const clickHandler = (index) =>{
        setIndex(index);
    }
    return ( 
        <div>
            <div className="header">
            {
                cities.map((city, i) =>{
                    return(
                        <>
                          <div key={i} className="header__city" onClick={() => clickHandler(i)}>
                              <p>{city.key}</p>
                          </div>
                        </>
                    )
                })
            }
            </div>
            
            {  
                cities.map((city,i) =>{
                    return( index === i && 
                        <div key={i}>
                         <p>{city.key}</p>
                         <p>{city.content}</p>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Tabs;