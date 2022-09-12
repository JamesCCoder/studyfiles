import React,{useState} from "react";

const App = () => {
   const [value, setValue] = useState("");
   const [list, setList] = useState([]);
   const addHandler = () =>{
      const newValue = {
         id:Math.random()*1000,
         content:value,
         style:false,
      }
      setList(pre => [...pre, newValue]);
      setValue("");
   }
   const deleteHandler = (id) =>{
       const newList1 = list.filter((one) => one.id !== id);
       setList(newList1);
   }

   return ( 
      <div>
         <input type="text" value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key==="Enter" ? addHandler() : ""}
                />
         <button onClick={addHandler}>add</button>
         <ul>
         {
            list.map((one,i) =>{
               return(
                  <>
                    <li key={i}>
                       {one.content}
                       <button onClick={() => deleteHandler(one.id)}>delete</button>
                    </li>
                    
                  </>

               )
            })
         }
         </ul>

      </div>
    );
}
 
export default App;