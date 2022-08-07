import React,{useState} from "react";
import './App.css';

const info = ["Inbox", "Other", "Saved", "Stuff", "Old"];
const content = ["This is inbox","This is other","This is saved", "This is stuff", "This is old"];

function App() {
  const [value, setValue] = useState(
    info.map((oneInfo, i) =>{
      return {id: Math.floor(Math.random()*1000), key:oneInfo, content: content[i], index: 0}
    })
  )

  const [lists, setLists] = useState([]);

  const plusHandler = (index) =>{
      const newValue = [...value];
      newValue[index].index = newValue[index].index + 1;
      setValue(newValue);

      const newList = {
        id:Math.floor(Math.random()*1000),
        content:newValue[index].content,
      }
      setLists(pre => [...pre, newList]);
  }

  const minusHandler = (index) =>{
       const newValue = [...value];
       newValue[index].index = newValue[index].index > 0 ? newValue[index].index - 1 : newValue[index].index;
       setValue(newValue);

  }

  const clickHandler = (id) =>{
       const filterList = lists.filter((one) => one.id !== id);
       setLists(filterList);
  }
  return (
    <div>
        {
          value.map((oneValue, i) =>{
            return(
              <div key={i} className="list__overall">
                <div className="list__left">
                   <p className="list__key">{oneValue.key}</p>
                   <div className="list__badge">{oneValue.index}</div>
                </div>
                <div className="list__right">
                  <p onClick={() => plusHandler(i)}>+</p>
                  <p onClick={() => minusHandler(i)}>-</p>
                </div>
              </div>
            )
          })
        }
        <ul>
        {
           lists.map((list, i) =>{
             return(
                <li key={i} onClick = {() => clickHandler(list.id)}>{list.content}</li>
             )
           })
        }
        </ul>

    </div>
  );
}

export default App;

