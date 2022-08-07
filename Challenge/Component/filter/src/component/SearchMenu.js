import React,{useState} from "react";
import "./SearchMenu.css";

const key = ["html","css", "javascript", "react", "node", "sql", "bootstrap"];
const content = ["this is html","this is css","this is javascript", "this is react", "this is node", "this is sql", "this is bootstrap"];

const SearchMenu = () => {
    const [value, setValue] = useState(
        key.map((oneKey,i) =>{
            return {id: Math.floor(Math.random()*1000), key: oneKey, content: content[i]}
        })
    )
    const [index, setIndex] = useState(-1);
    const clickHandler = (index) =>{
       setIndex(index);
       console.log(value);
       console.log(index);
    }

    const [filterValue, setFilterValue] = useState();

    return ( 
        <div className="search__overall">
            <div className="search__left">
                <p className="search__menu">Menu</p>
                <input className="search__search" 
                       placeholder="Search" 
                       value={filterValue}
                       onChange={(e) => setFilterValue(e.target.value)}
                       />
                {
                    value
                    .filter((oneValue) => filterValue ? 
                    filterValue && oneValue.key.toString().includes(filterValue)
                   : oneValue.key)
                    .map((oneValue, i) =>{
                        return(
                            <p className="search__key" key={oneValue.id} onClick={() => clickHandler(oneValue.id)}>{oneValue.key}</p>
                        )
                    })
                }
            </div>
            <div className="search__right">
                 {
                     value.map((oneValue, i) =>{
                         return(
                             oneValue.id === index && 
                             <p className="search__content" key={oneValue.id}>{oneValue.content}</p>
                         )
                     })
                 }
            </div>
        </div>
     );
}
 
export default SearchMenu;