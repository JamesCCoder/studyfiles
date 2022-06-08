import React,{useState} from "react";

import {AppBar, Toolbar, Tabs, Tab, Button, Menu, MenuItem } from "@mui/material";


const Header = () => {
    const [value ,setValue] = useState(0);
    const changeHandler = (e, value) => {
        setValue(value);
    }


    return ( 
        <AppBar position="foxed">
            <Toolbar>
                <Tabs value={value} onChange={changeHandler}>
                    <Tab label="Home"/>
                    <Tab label="Services"/>
                    <Tab label="Revolution"/>
                    <Tab label="About Us"/>
                    <Tab label="Contact Us"/>
                </Tabs>
                <Button variant="contained" >Free Estimate</Button>
                <Menu open={false}>
                    <MenuItem>Service 1</MenuItem>
                    <MenuItem>Service 2</MenuItem>
                    <MenuItem>Service 3</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;