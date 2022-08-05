import React,{useState} from "react";
import "./ReadMore.css";

const ReadMore = () => {
    const [value, setValue] = useState("Read more");
    const [expanded, setExpanded] = useState(false);
    const clickHandler = () =>{
        setValue(pre => pre === "Read more" ? "Read less" : "Read more");
        setExpanded(pre => !pre);
        console.log(expanded);
    }
    return ( 
        <div className="readmore">
            <p className="readmore__content" aria-expanded = {expanded}>fsofhfihdsifuhudsifhdiffhsdiufhdsiufhsduifhdsffhsduifhdsuifuhdsif</p>
            <button onClick={() => clickHandler()}>{value}</button>
        </div>
     );
}
 
export default ReadMore;