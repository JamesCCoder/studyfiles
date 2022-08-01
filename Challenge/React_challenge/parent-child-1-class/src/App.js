import React from "react";
import './App.css';

import Parent from "./Components/Parent";
import Child from "./Components/Child";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:0,
        }
    }
    getValue = (one) => {
        this.setState({
            value: one,
        })
    }

    render(){
       return (
          <div>
           <Parent num={this.state.value}>
             <Child getValue={this.getValue}/>
           </Parent>
         </div>
  );
    }

}

export default App;
