import React,{useState, useEffect} from "react";
import "./App.css";

import Wrapper from "./Component/Wrapper";
import FactoryButton from "./Component/FactoryButton";
import Property from "./Component/Property";

const App = () => {
    const [factories, setFactories] = useState([{
        name: "base",
        cost: 5,
        rate:1,
        color:"green",
    }])

    const [properties, setProperties] = useState([]);

    const [value, setValue] = useState(0);
    const [incrementValue, setIncrementValue] = useState(0);

    const addFactoryHandler =(cost,rate, color) =>{
        if(value < cost){
            alert("f");
            return;
        }
        setValue((pre) => pre - cost);
        setIncrementValue(pre => pre + (rate));
        setProperties((pre) => [...pre, color]);
        console.log(typeof(rate));
    }
    
    useEffect(() =>{
        let timeout = setInterval(() => {
            setValue((pre) => pre + Number(incrementValue));
        }, 1000);

        return () => clearInterval(timeout);
    },[incrementValue])

    const [name, setName] = useState("");
    const [cost, setCost] = useState(0);
    const [rate, setRate] = useState(0);
    const [color, setColor] = useState("");

    const submitHandler = (name, number,rate, color) =>{
       if(name === "" || number <= 0 || rate <= 0 || color === ""){
           alert("wrong input! Just try input again!");
           return;
       }
       setFactories((pre) => [
          ...pre,
          {
             name,
             cost,
             rate,
             color,
          }
       ])
       setName("");
       setCost(0);
       setRate(0);
       setColor("");
    }

    return ( 
        <Wrapper>
            <div>
            <p>{value} points</p>
               <button className="button__addPoint" onClick={() => setValue(pre => pre + 1)}></button>
               
            </div>
            <div>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input type="number" value={cost} placeholder="cost" onChange={(e) => setCost(+e.target.value)}/>
                <input type="number" value={rate} placeholder="rate" onChange={(e) => setRate(+e.target.value)}/>
                <input type="text" value={color} placeholder="color" onChange={(e) => setColor(e.target.value)} />
                <button onClick={() => submitHandler(name, cost, rate, color)}>submit factory plan</button>   
            </div>
            <div>
                {
                   factories.map((factory, i) =>{
                       return(
                            <FactoryButton key={i}
                                           name={factory.name}
                                           cost={factory.cost}
                                           rate={factory.rate}
                                           onClick={() => addFactoryHandler(factory.cost, factory.rate, factory.color)}
                             />
                       )
                   })
                }
            </div>
            <div>
                {
                    properties.map((property,i) =>{
                        return (
                                 <Property key={i} color={property}/>
                        )
                    })
                }
            </div>
            

        </Wrapper>
     );
}
 
export default App;