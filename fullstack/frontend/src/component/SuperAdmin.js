import React from "react";
import "./SuperAdmin.css";

const SuperAdmin = ({users, onClick}) => {
    return ( 
        <div className="super">
            <ul style={{listStyle:"none", color:"white"}}>
            {
                users.map((one, i) =>{
                    return(
                        <li onClick={onClick}>{one.username}</li>
                    )
                })
            }
            </ul>
            <form>
              <input type="checkbox" name="vehicle" value="Bike"/>item<br/>
              <input type="checkbox" name="vehicle" value="Car"/>price<br />
              <input type="checkbox" name="vehicle" value="Bike"/>user<br/>
              <input type="checkbox" name="vehicle" value="Car"/>permission<br />
            </form>
            <button>update</button>
            <div>
                <input placeholder="username"/>
                <input placeholder="role"/>
                <button>add</button>
            </div>
        </div>
     );
}
 
export default SuperAdmin;