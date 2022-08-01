import React from "react";

class Parent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.children}
                <p>The value from child is : {this.props.num}</p>
            </div>
        )
    }
}

export default Parent;