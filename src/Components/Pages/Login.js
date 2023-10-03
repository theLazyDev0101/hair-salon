import React, {Fragment, useState} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCut } from "@fortawesome/free-solid-svg-icons";

import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
  } from '@material-ui/core';

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { ImageName } from '../enums'

import '../Style/css/style.css'
import '../Style/css/bootstrap.min.css'
import '../Style/lib/animate/animate.min.css'
import '../Style/lib/owlcarousel/assets/owl.carousel.min.css'

const Login = (props) => {
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(true);
    const {loggedInStatus, loggedInName, updateLoggedInStatus, updateLoggedInName} = props
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const loginHandler = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        updateLoggedInStatus(true)
        updateLoggedInName(username)
        navigate('/')

    }
    const nameChangeHandler = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        if(username != '' && password != '') {
            document.getElementsByClassName('loginButton')[0].classList.remove('disabled')
            document.getElementById('loginButton').disabled = false
        }
        else {
            document.getElementsByClassName('loginButton')[0].classList.add('disabled')
        }
    }
    const passwordChangeHandler = () => {}
    return (
        <React.Fragment>
            <Header loggedInStatus={loggedInStatus} loggedInName={loggedInName} />
            <div style={{ padding: 30 }}>
                
                <Paper>
                    <a href="index.html" className="navbar-brand ms-4 ms-lg-0" style={{justifyContent : 'center', display : 'flex', marginBottom : '40px'}}>
                        <h1 className="mb-0 text-primary text-uppercase">HairCut</h1>
                    </a>
                    <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                    >
                    <Grid item xs={12}>
                        <TextField label="Username" id="username" onChange={nameChangeHandler}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" id="password" type={'password'} onChange={nameChangeHandler}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            label={'Keep me logged in'}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        }
                        label="Keep me logged in"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth style={{backgroundColor : '#bc1212', color : 'white'}} className="disabled loginButton" onClick={loginHandler} id='loginButton'> Login </Button>
                    </Grid>
                    </Grid>
                </Paper>
            </div>
            <Footer />
        </React.Fragment>
    )

}

export default Login