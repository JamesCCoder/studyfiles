import React,{useState, useEffect} from "react";
import "./App.css";

const App = () => {
   const [show, setShow] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if(window.pageYOffset > 200){
            setShow(true);
         }else{
            setShow(false);
         }
      })
   }, [])
   const clickHandler = () =>{
      window.scrollTo({
         top:0,
         behavior:"smooth"
      })
   }
   return ( 
      <div>
         <header style={{height:"20px", width:"100%", backgroundColor:"green"}}></header>
         {show && <button onClick={clickHandler} className="button">top</button>}
      </div>
    );
}
 
export default App;