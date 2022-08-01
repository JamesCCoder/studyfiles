import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       count : 0,
     }
  }
  addHandler = () =>{
     this.setState({
       count: this.state.count + 1,
     })
  }
  minusHandler = () =>{
     this.setState({
       count: this.state.count - 1,
     })
  }

  render(){
    return(
      <div>
        <p>The number is : {this.state.count}</p>
        <button onClick={(e) => this.addHandler(e)}>add</button>
        <button onClick={(e) => this.minusHandler(e)}>add</button>
      </div>
    )
  }
}

export default App;
