import React,{useState} from "react";
import "./Navtop.css";

const infor = ["Home","News","Contact","About"];

const Navtop = () => {
    const [btn, setBtn] = useState(
        infor.map((oneValue) =>{
            return {content: oneValue, id:Math.floor(Math.random()*1000)};
        })
    );
    const addHandler = () =>{
        setBtn((pre) => [...pre, {content: value, id:Math.floor(Math.random()*1000)}]);
        setValue("");
    }

    const [value, setValue] = useState();
    return ( 
     <>
        <div className="navtop__overall">
            {
                btn.map((oneBtn, i) =>{
                    return(
                        <button className="navtop__button" data-color={oneBtn.content}>{oneBtn.content}</button>
                    )
                })
            }
        </div>
        <button onClick={() => addHandler()}>add</button>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
     </>

     );
}
 
export default Navtop;