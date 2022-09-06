import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return ( 
        <nav>
            {pageNumbers.map((number) =>{
                return(
                    <li>
                        <a href="#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                )
            })}
        </nav>
     );
}
 
export default Pagination;