import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0,
    }
  }
  addHandler = () =>{
    this.setState({
      num: this.state.num + 1,
    })
  }
  minusHandler = () =>{
    this.setState({
      num: this.state.num - 1,
    })
  }
  resetHandler = () =>{
    this.setState({
      num: 0,
    })
  }
  if(){
    alert("you passes");
  }
  render(){
    return(
      <div>
        <p>The number is:{
        this.state.num % 15 === 0 ? "fizzbuzz" : this.state.num % 5 === 0 ? "buzz" 
        : this.state.num % 3 === 0 ? "fizz" : this.state.num
        }</p>
        <button onClick={(e) => this.addHandler(e)}>add</button>
        <button onClick = {(e) => this.minusHandler(e)}>minus</button>
        <button onClick = {(e) => this.resetHandler(e)}>reset</button>
      </div>
    )
  }
}

export default App;
