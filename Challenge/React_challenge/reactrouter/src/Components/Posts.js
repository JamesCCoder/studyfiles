import React from "react";
import {Outlet} from "react-router-dom";

const Posts = () => {
    return ( 
    <div>
        this is posts
        <Outlet />
    </div> );
}
 
export default Posts;