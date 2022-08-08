import React,{useState} from "react";
import "./Res_Sub_Menu.css";

const Res_Sub_Menu = () => {
    const [index, setIndex] = useState(-1);
    return ( 
        <div className="Menu__overall">
            <p className="Menu__menu">Home</p>
            <p className="Menu__menu about">About</p>
            <div className="Menu__dropdown1">
                <p className="Dropdown__item">Company</p>
                <p className="Dropdown__item">Team</p>
                <p className="Dropdown__item">Career</p>
            </div>
            <p className="Menu__menu service">Services</p>
            <div className="Menu__dropdown1">
                <p className="Dropdown__item">Bring</p>
                <p className="Dropdown__item">Deliver</p>
                <p className="Dropdown__item">Package</p>
                <p className="Dropdown__item">Express</p>
            </div>
            <p className="Menu__menu">Partners</p>
            <p className="Menu__menu">Contact</p>
        </div>
     );
}
 
export default Res_Sub_Menu;