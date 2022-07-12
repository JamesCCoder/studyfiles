import React from "react";

import Child from "./Child";

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            parentvalue:0,
            gettedvalue:0,
        }
    }
    parentchangeHandler = (e) =>{
        this.setState({
            parentvalue: e.target.value,
        })
    }
    getValue = (one) =>{
        this.setState({
            gettedvalue: one,
        })
    }

    render(){
        return(
            <div>
                <p>The value from child is: {this.state.gettedvalue}</p>
                <input type="text" value={this.state.parentvalue} onChange = {(e) => this.parentchangeHandler(e)}/>
                <Child value={this.state.parentvalue} getValue={this.getValue}/>
            </div>
        )
    }
}

export default Parent;