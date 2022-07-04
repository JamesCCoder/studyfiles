import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            childvalue: 0,
        }
    }
    childchangeHandler = (e) =>{
        this.setState({
            childvalue:e.target.value,
        })
    }
    render(){
        return(
            <div>
                <p>The value from parent is: {this.props.value}</p>
                <input value={this.state.childvalue} onChange={(e) => {this.childchangeHandler(e);this.props.getValue(e.target.value)}}/>
            </div>
        )
    }
}

export default Child;