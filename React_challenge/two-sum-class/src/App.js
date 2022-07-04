import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value1:0,
      value2:0,
      sum:0,
    }
  }
  change1 = (e) =>{
     this.setState({
       value1: +e.target.value,
     })
  }
  change2 = (e) =>{
     this.setState({
       value2: +e.target.value,
     })
  }
  addHandler = () =>{
     this.setState({
       sum: this.state.value1 + this.state.value2,
     })
  }
  render(){
    return(
      <div>
        <input type="number" value={this.state.value1} onChange={(e) => this.change1(e)}/>
        <input type="number" value={this.state.value2} onChange={(e) => this.change2(e)}/>
        <button onClick={() => this.addHandler()}>add</button>
        <p>The sum is : {this.state.sum}</p>
      </div>
    )
  }
}

export default App;
