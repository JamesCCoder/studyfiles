import React from "react";
import './App.css';

import Parent from "./Components/Parent";
import Child from "./Components/Child";

export const MyContext = React.createContext();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:0,
    }
  }
  getValue=(one)=>{
    this.setState({
      value: one,
    })
  }
  render(){
    return (
      <MyContext.Provider value={this.state.value, this.getValue}>
      <Parent>
         <Child />
      </Parent>
      </MyContext.Provider>

    );
    }
}

export default App;
