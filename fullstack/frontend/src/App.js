import axios from "axios";
import React,{useState, useEffect} from "react";
import './App.css';

import SideBar from "./component/SideBar";
import Price from "./component/Price";
import Item from "./component/Item";
import Article from "./component/Article";
import Permission from "./component/Permission";
import UserSearch from "./component/UserSearch";
import SuperAdmin from "./component/SuperAdmin";

const API = "http://localhost:999/user";

function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState("");
  const [validUser, setValidUser] = useState("");
  const [permission, setPermission] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() =>{
   getData();
  },[])

  const getData = async () =>{
    const res = await axios.get(API);
    setUsers(res.data);
  }

  const loginHandler = () =>{
    const user = {
      username: userName,
      password: passWord,
    }
    axios.post("http://localhost:999/user/signin", user)
    .then(() => {
      setPass(true);
      setValidUser(userName);
      for(let i = 0; i<users.length; i++){
        if(users[i].username === userName){
          setPermission(users[i].restricted_access);
        }
      }
      console.log(permission);
    })
    .catch(() => console.log("wrong"));
  }

  const itemHandler = () =>{
    setShow("item");
  }
  const priceHandler = () =>{
    setShow("price");
  }
  const userHandler = () =>{
    setShow("user");
  }
  const permissionHandler = () =>{
    setShow("permission");
  }

  return (
    <div>
      {
        users.map((one, i) =>{
          return (
            <p key={i}>{one.username}<p>|||||</p>{one.restricted_access}</p>
            
          )
        })
      }
      <div></div>
      {
        permission.map((one, i) =>{
          return(
            <p>{one}</p>
          )
        })
      }
      {
        !pass && (
          <>
             <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
             <input type="text" value={passWord} onChange={e => setPassWord(e.target.value)}/>
             <button onClick={() => loginHandler()}>login</button>
          </>

        ) 
      }
      {
        pass && (
          <div className="wrapper">
             <SideBar>
                {
                  permission.map((one, i) =>{
                    return(
                      <>
                        {
                          one === "item_management" ? <Item value="item" onClick={() => itemHandler()}/>
                        : one === "price_management" ? <Price value="price" onClick={() => priceHandler()}/>
                        : one === "userSearch_management" ? <UserSearch value="user" onClick={() => userHandler()}/>
                        : ""
                        }
                      </>
                    )
                  })
                }
                <Permission value="permission" onClick={() => permissionHandler()}/>        
             </SideBar>
             <Article>
                 {
                   show === "item" ? <p>This is item</p>
                  :show === "price" ? <p>This is price</p>
                  :show === "user" ? <p>This is user</p>
                  : (
                    <>
                      <div>
                        <span>username:</span>
                        <span>{validUser}</span>
                      </div>
                      <span>permission:</span>
                      <span>
                        {
                          permission.map((one, i) =>{
                            return (
                              <span>{one === "item_management" ? "item "
                                   : one === "price_management" ? "price "
                                   : one === "userSearch_management" ? "user "
                                   : one === "permission_management" ? "permission "
                                   : ""
                            }</span>

                            )
                          })
                         
                        }
                                                                        {
                          permission.map((one, i) =>{
                            return (
                              <span>{
                                   one === "permission_management" ?  <SuperAdmin users={users}
                                                                      onClick={() => console.log(users)}
                                   />
                                   : ""
                            }</span>

                            )
                          })           
                        }
                      </span>
                    
                    </>
                  )
                 }

             </Article>

          </div>
        )
      }
    </div>
  );
}

export default App;

