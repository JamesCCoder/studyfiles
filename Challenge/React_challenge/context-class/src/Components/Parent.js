import React from "react";
import { MyContext } from "../App";

class Parent extends React.Component{

    render(){
        let value = this.context;
        return(
            <div>{this.props.children}
            <p>The value from child is: {value}</p>
            </div>
        )
    }
}
Parent.contextType = MyContext;

export default Parent;