import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: false,
      item:""
    }
  }
  changeHandler = () =>{
    this.setState({
      value:!this.state.value,
    })
  }
  changeHandler1 = (e) =>{
    this.setState({
      item:e.target.value,
    })
  }
  render(){
    return(
      <>
      {this.state.value && <p>hide and show</p>}
      <button onClick={() => this.changeHandler()}>toggle</button>
      <input type="text" value={this.state.item} onChange={(e) => this.changeHandler1(e)}/>
      <button disabled={this.state.item.length === 0}>add</button>
      </>
    )
  }
}

export default App;
