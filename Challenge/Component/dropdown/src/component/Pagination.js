import React,{useState} from "react";
import "./Pagination.css";

const page = ["<","1","2","3","4","5","6","7","8","9",">"];

const Pagination = () => {
    const [value, setValue]=useState(
        page.map((onePage, i) =>{
            return {id:Math.floor(Math.random()*1000), content:onePage, show:false};
        })
    )
    const [index, setIndex] = useState(-1);
    const clickHandler =(id) =>{
        setIndex(id);
    } 
    return ( 
        <div className="pagination">
            {
            value.map((onePage, i) =>{
                 return(
                    <div key={onePage.id} 
                         className="page" 
                         style={{backgroundColor: i === index ? "green" : "", color: i === index? "white": ""}}
                         onClick={() => clickHandler(i)}>{onePage.content}</div>
                 )
            })
            }
        </div>
     );
}
 
export default Pagination;