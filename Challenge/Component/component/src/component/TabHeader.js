import React,{useState} from "react";
import "./TabHeader.css";

const information = [{
     id:1,
     key:"London",
     content:"London is the capital of England"
},{
     id:2,
     key:"Paris",
     content:"Paris is the capital of France"
},{
    id:3,
    key:"Tokyo",
    content:"Tokyo is the capital of Japan"
},{
    id:4,
    key:"Oslo",
    content:"Oslo is the capital of Norwat"
}]

const TabHeader = () => {
    const [value, setValue] = useState(information);
    const [index, setIndex] = useState(1);

    const clickHandler = (i) =>{
        setIndex(i);
    }
    return ( 
      <>
        <div>
        {
          value.map((city,i) =>{
              return(
                  index === i && 
                  <div key={i}>
                   <p>{city.key}</p>
                   <p>{city.content}</p>
                  </div>
              )
          })
        }
        </div>
        <div className="tab-header__header">
            {
                value.map((city,i) =>{
                    return(
                          <p style={{backgroundColor : index === 1 ? "blue" : index === 2 ? "green" : index === 3 ? "red" : "orange"}} 
                          key={i} 
                          className="tab-header__city" 
                          onClick={() => clickHandler(i)}>{city.key}</p>                        
                    )
                })
            }
        </div>
      </>
);
}
 
export default TabHeader;