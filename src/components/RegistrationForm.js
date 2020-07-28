import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });
const style ={
    margin:"1rem"
};
export class RegistrationForm extends Component {

    render() {

        return (
            <React.Fragment>
                 <ThemeProvider theme={theme}>
                 <AppBar >
                 <Toolbar style={{margin:"auto"}}>REGISTRATION  FORM</Toolbar>
                 </AppBar>
                 
                  <TextField 
                    style={style}
                    label="Login"
                    variant="outlined"
                    />
                   <TextField 
                     label="Password"
                     variant="outlined"
                    />
                        </ThemeProvider>
                    <Button 
                        style={style}
                        variant="contained"
                        color="primary"
                        
                    >Register
                    </Button>
                    
                    <p style={{color:"black"}}>Go <Link to="/"><strong>log in</strong></Link> if already registered</p>
            </React.Fragment>
        
        )
    }
}


export default RegistrationForm
