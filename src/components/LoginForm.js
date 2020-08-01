import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AppBar, Grid } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { TextField } from '@material-ui/core';

import Button from '@material-ui/core/Button';
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
const formValidation = (errors) =>{
    let isValid=true;
    Object.values(errors).forEach(error =>{
        if (error.length>0) {
            (isValid=false);
        } return isValid
    })
}

export class LoginForm extends Component {
    state={
        login:"",
        password:"",
        confirmPassword:"",
        errors:{
            login:"",
            password:"",
            confirmPassword:""
        }
    }
     
    
    
    handleSubmitClick = (e) =>{
        e.preventDefault();

        if(formValidation(this.state.errors)){
            console.log(`
            SUbmitting:
            -Login-${this.state.login}
            -Password-${this.state.password}
            `            )
        } else {
            console.error("Form invalid!")
        } };

         
    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log(value);
        
         let errors = this.state.errors;
        
        switch (name) {
            case "login":
                errors.login = value.length < 3 && value.length > 0 ? "minimum 3 characters" :"";
                break;
            case "password":
                errors.password = value.length < 3 && value.length > 0 ? "Enter password" :"";
                break;   
               default:
                break;
        }
        this.setState({
            [name]:value
        }, () =>console.log(this.state));
    }
    
    
    
    render() {
        console.log(`login:${this.state.login}, password:${this.state.password} `)
        
        return (
            <React.Fragment>
                 <ThemeProvider theme={theme}>
                 <AppBar style={{marginBottom:"2rem"}}>
                 <Toolbar style={{margin:"auto"}}>LOGIN FORM</Toolbar>
                 </AppBar>
                 </ThemeProvider>
                  <form noValidate autoComplete="off">
                  <Grid container spacing={3}
                        direction="column"
                        justify="center"
                        alignItems="center">
                  <TextField 
                    required
                    name="login"
                    style={{marginTop:"3rem"}}
                    label="Login"
                    variant="outlined"
                    onChange={this.handleChange}
                    />
                   <TextField 
                     required
                     name="password"
                     type="password"
                     style={style}
                     label="Password"
                     variant="outlined"
                     onChange={this.handleChange}
                    />
                   <TextField 
                     required
                     name="confirmPassword"
                     type="password"
                     label="Confirm password"
                     variant="outlined"
                     onChange={this.handleChange}
                    />
                    <Button 
                        type="submit"
                        style={style}
                        variant="contained"
                        color="primary"
                        onClick= {(e) =>{this.handleSubmitClick(e)}}
                    >Log In
                    </Button>
                  </Grid>
                    <p style={{color:"black"}}>If not registered, go <Link to="/register"><strong>register</strong></Link></p>
                  
                    </form>
                    
                
            </React.Fragment>
        
        )
    }
}

export default LoginForm
