import React from "react";
import {Grid} from "@mui/material";

const Footer = () => {
    return ( 
        <footer>
            <Grid container direction="row">
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>1</Grid>
                        <Grid item>1</Grid>
                        <Grid item>1</Grid>
                        <Grid item>1</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>2</Grid>
                        <Grid item>2</Grid>
                        <Grid item>2</Grid>
                        <Grid item>2</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>3</Grid>
                        <Grid item>3</Grid>
                        <Grid item>3</Grid>
                        <Grid item>3</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>4</Grid>
                        <Grid item>4</Grid>
                        <Grid item>4</Grid>
                        <Grid item>4</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer> 
    );
}
 
export default Footer;