import React from "react";
import "./Article.css";

const Article = ({children}) => {
    return ( 
        <div className="article">{children}</div>
     );
}
 
export default Article;