import React,{useState} from "react";
import "./Pagination.css";

const page = ["<","1","2","3","4","5","6","7","8","9",">"];

const Pagination = () => {
    const [value, setValue]=useState(
        page.map((onePage, i) =>{
            return {id:Math.floor(Math.random()*1000), content:onePage, show:false};
        })
    )
    const clickHandler =(id) =>{
        const newValue = [...value];
        for(let i = 0; i<newValue.length; i++){
           newValue[i].show = false;
        }
        newValue[id].show = true;
        setValue(newValue);
    } 
    return ( 
        <div className="pagination">
            {
            value.map((onePage, i) =>{
                 return(
                    <div key={onePage.id} 
                         className="page" 
                         style={{backgroundColor: onePage.show ? "green" : "", color: onePage.show ? "white": ""}}
                         onClick={() => clickHandler(i)}>{onePage.content}</div>
                 )
            })
            }
        </div>
     );
}
 
export default Pagination;