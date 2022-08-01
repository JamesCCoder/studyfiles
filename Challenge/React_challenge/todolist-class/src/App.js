import React,{useState} from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       value: "",
       list: [],
     }
  }

  setValue = (e) => {
     this.setState({
       value: e.target.value,
     })
  }


  
  render(){
    return (
      <div>
         <input type="text" value={this.state.value} onChange={(e) => {this.setValue(e)}}/>
         <button onClick={this.setList}>add</button>
      </div>
    );
  }

}

// export default App;


// const App = () => {
//   let [value, setValue] = useState("");
//   let [list, setList] = useState([]);
//   const changeHandler = () =>{
//     let newValue = {
//       id:Math.random(),
//       content: value,
//     }
//     setList((pre) => [...pre, newValue]);
//     setValue("");
//   }
//   return ( <>
//   <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
//   <button onClick={() => changeHandler()}>add</button>
//   <ul>
//     {
//       list.map((one) =>{
//         return (
//           <li key={one.id}>{one.content}</li>
//         )
//       })
//     }
//   </ul>
//   </> );
// }
 
export default App;