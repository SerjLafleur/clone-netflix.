import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import logo from '../img/netflix-logo.png'
import NetflixLogin from '../img/netflix-login.jpeg'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents'
import SignUp from './SignUp';

const Login = () => {
    const classes = useStyles()
    const [sigIn, setSigIn] = useState(false);
    return (
        <div className={classes.root}>
            <img src={logo} alt='logo' className={classes.logo} />
            <NetflixButton className={classes.session}>Iniciar sesión</NetflixButton>
            <div className={classes.info}>
                {
                    !sigIn ? (<SignUp />) :
                        (
                            <>
                                <Typography variant='h4' gutterBottom>Unlimited films, TV programmes and more.</Typography>
                                <Typography variant='h5' >Watch anywhere. Cancel at any time.</Typography>
                                <Typography variant='h6' gutterBottom >Ready to watch? Enter your email to create or restart your membership.</Typography>
                                <div className={classes.inputBlock}>
                                    <NetflixInput placeholder='Email Adress' />
                                    <NetflixButton>GET STARTED</NetflixButton>
                                </div>
                            </>
                        )
                }

            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${NetflixLogin})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: 'fixed',
        top: 20,
        left: 20,
        width: '150px',
        cursor: 'pointer',
    },
    session: {
        position: 'fixed',
        zIndex: 15,
        right: 20,
        top: 20,
    },
    info: {
        color: '#fff',
        zIndex: 15,
        textAlign: 'center',
        '& h4': {
            fontWeight: 800,
        },
        '& h5': {
            fontWeight: 400,
        },
    },
}))

export default Login
