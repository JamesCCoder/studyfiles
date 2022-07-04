import React from "react";

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
    this.setState({
           count: this.state.count - 1
    });
  };
    render(){
        return <div>
          <p>{this.state.count}</p>
          <button onClick={(e) => this.increment(e)}>add</button>
          <button onClick={(e) => this.decrement(e)}>minus</button>
        </div>
    }
}



export default Parent;