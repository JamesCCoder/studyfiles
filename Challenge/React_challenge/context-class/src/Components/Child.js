import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:0,
        }
    }
    changeHandler = (e) =>{
        this.setState({
            value: e.target.value,
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => this.changeHandler(e)}/>
            </div>
        )
    }
}

export default Child;