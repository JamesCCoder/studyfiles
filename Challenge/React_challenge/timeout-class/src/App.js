import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:1,
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      return this.tick();
    }, 100);
  }
  componentWillUnmount(){
     clearInterval(this.interval);
  }

  tick(){
    this.setState({
      value: this.state.value - 0.1,
    })
  }

  render(){
  return (
    <div>
      <p style={{opacity: this.state.value}}>1232132113</p>
    </div>
  );
  }

}

export default App;
