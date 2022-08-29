import React,{useEffect, useState} from "react";
import "./App.css";

const App = () => {
   const [list, setList] = useState([]);
   let [index, setIndex] = useState(1);
   useEffect(() =>{
      fetchData();
   },[]);
   const fetchData = async() =>{
      let data = await fetch("http://stream-menu-svc-v3.herokuapp.com/category");
      let dataJson = await data.json();
      setList(dataJson);
   }
   return ( 
      <div>
         <p>Welcome to andrew's chef restaurant</p>
         <button onClick={() => setIndex(1)}>Home</button>
         <button onClick={() => setIndex(2)}>Category</button>
      <div>
      {
         index === 1 && (
            <>
             <h3>LOCATION & HOUR</h3>
             <div>
               <p>1067 N San Antonio Rd Los Altos, CA 94022</p>
               <p>Phone: (650) 948-2696</p>
               <p>Fax: (650) 948-0121</p>
               <p>Sunday - Thursday: 11:30am - 9:30pm</p>
               <p>Friday: 11:30am - 10pm</p>
               <p>Saturday: 12pm (noon) - 10pm</p>
             </div>
            </>
         )
      }
      {
         index === 2 && (
          <div>
            <p>menu categories</p>
            <ul>
            {
              list.map((one) =>{
                 return(
                    <li>
                       <span>{one.name}</span>
                       <span> - </span>
                       <span>{one.short_name}</span>
                    </li>
                  )
              })
            }
            </ul>
          </div>
         )
      }


    </div>
      </div>
    );
}
 
export default App;