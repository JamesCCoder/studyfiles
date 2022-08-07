import React,{useState} from "react";
import './Element.css';

const information = [
  {value:"BMW", cate:"car"},
  {value:"Orange", cate:"fruit"},
  {value:"Volve", cate:"car"},
  {value:"Red", cate:"color"},
  {value:"Mustang", cate:"car"},
  {value:"Blue", cate:"color"},
  {value:"Cat", cate:"animal"},
  {value:"Dog", cate:"animal"},
  {value:"Melon", cate:"fruit"},
  {value:"Kiwi", cate:"fruit"},
  {value:"Banana", cate:"fruit"},
  {value:"Lemon", cate:"fruit"},
  {value:"Cow", cate:"animal"}];

const btnValue = ["Show all", "Cars","Animals","Fruits","Colors"];

function Element() {
  const [show, setShow] = useState(information);
  const [btnNav, setBtnNav] = useState(btnValue);

  const [button, setButton] = useState(-1);
  const clickHandler = (index) =>{
    setButton(index);
  }
  return (
    <div>
        {
          btnNav.map((btn,i) =>{
            return(
              <button key={i} 
              className="chooseButton" 
              onClick={() => clickHandler(i)}
              style={{backgroundColor: i === button ? "gray" :""}}
              >{btn}</button>
            )
          })
        }
        <div>        
          {
           show
           .filter((oneShow, i) => {
             return(
               button === 0 ? oneShow
              :button === 1 ? oneShow && oneShow.cate === "car" 
              :button === 2 ? oneShow && oneShow.cate === "animal"
              :button === 3 ? oneShow && oneShow.cate === "fruit"
              :button === 4 ? oneShow && oneShow.cate === "color"
              :oneShow
             )
           })
           .map((oneShow, i) =>{
             return(
            
               <button className="show" key={i}>{oneShow.value}</button>
             )
           })
        }
        </div>

    </div>
  );
}

export default Element;
