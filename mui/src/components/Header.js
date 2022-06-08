import React from "react";
import styled from "styled-components";

import {AppBar, Toolbar, Tabs, Tab, Button} from "@mui/material";

const StyledAppBar = styled(AppBar)`
      background-color:green;
`

const StyledTab = styled(Tab)`
      color:white;
      margin:0 3rem;
`

const StyledButton = styled(Button)`
      background-color: orange;
      color:white;
      position:absolute;
      right:1.25rem;
`

const Header = () => {
    return ( 
        <StyledAppBar>
            <Toolbar>
                <Tabs>
                    <StyledTab label="Home"/>
                    <StyledTab label="Services"/>
                    <StyledTab label="Revolution"/>
                    <StyledTab label="About Us"/>
                    <StyledTab label="Contact Us"/>
                </Tabs>
                <StyledButton>Free Estimate</StyledButton>
            </Toolbar>
        </StyledAppBar>
     );
}
 
export default Header;