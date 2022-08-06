/* 1. 区分： 1. hover 改style， 和 click 改 style
   2. 区分： 如何设置默认值style （css hover 和 setIndex 的不同使用场景） 
   3. 区分： style 条件显示 和 component 条件显示的语法区分
*/

import React,{useState} from "react";
import "./ButtonBorder.css";

const info = ["Home", "News", "Contact", "About"];

const ButtonBorder = () => {
    const [index1, setIndex] = useState(0);
    const mouseOver = (i) =>{
        setIndex(i);
    }

    const mouseOut = () =>{
        setIndex(0);
    }

    const clickHandler = (i) =>{
        setIndex(i);
    }
    return ( 
        <>
        <div className="buttonborder__overall">
            {
                info.map((headerName, i) =>{
                      return(
                          <button className="buttonborder__first" 
                          key={i}
                          onMouseOver={() => mouseOver(i)}
                          onMouseOut={() => mouseOut()}
                          style={{borderBottom: i === index1 ? "1px solid red" : ""}}     /* 不是 borderBottom：“1px solid red” && i === index1*/
                          >{headerName}</button>                                          /* 区分component条件显示 和 style 条件显示的不同*/
                      )
                })
            }
        </div>        
        <div className="buttonborder__overall">
            {
                info.map((headerName, i) =>{
                      return(
                          <button className="bottonborder__second" 
                          key={i}
                          style={{borderBottom: i === index1 ? "1px solid red" : ""}}
                          onClick={() => clickHandler(i)}
                          >{headerName}</button>
                      )
                })
            }
        </div>
        </>

     );
}
 
export default ButtonBorder;