import React,{useState} from "react";
import "./Accordion.css";

const information = [{
     id:1,
     content:"aaaaaaaaaaaa",
     sign:"+",
},{
     id:2,
     content:"bbbbbbbbbbbbb",
     sign:"+",
},{
     id:3,
     content:"cccccccccccc",
     sign:"+",
}]

const Accordion = () => {
      const [value, setValue] = useState(information);
      const clickHandler = (index) =>{
          const newValue = [...value];
          newValue[index].sign = newValue[index].sign === "+" ? "-" : "+";
          setValue(newValue);
      }
    return ( 
        <div>
            {
              value.map((oneValue,i) =>{
                  return(
                      <div key={oneValue.id} className="accordion">
                          <div className="accordion__header" onClick={() => clickHandler(i)}>
                              <p>Section {oneValue.id}</p>
                              <p>{oneValue.sign}</p>
                          </div>
                          <p className="accordion__content" aria-expanded={oneValue.sign !== "+"}>{oneValue.content}</p>
                      </div>
                  )
              })
            }
        </div>
     );
}
 
export default Accordion;