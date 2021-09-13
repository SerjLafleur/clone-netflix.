import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { auth } from '../firebase';

const SignUp = () => {
    const classes = useStyles()
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const history = useHistory()

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(history.push("/"))
            .catch(err => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(history.push("/"))
            .catch(err => alert(err.message))
    }
    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>
                Sign In
            </Typography>
            <form className={classes.form}>
                <NetflixInput value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                    className={classes.email}
                />
                <NetflixInput value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                    className={classes.password}
                />
                <NetflixButton
                    onClick={signIn}
                    type='submit'
                    wide='medium'
                    radius
                >Sign In</NetflixButton>
                <Typography variant='subtitle2'>
                    New to Netflix? {' '}
                    <span
                        className={classes.signupLink}
                        onClick={register}
                    > Sign Up now. {' '}</span>
                </Typography>
            </form>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '350px',
        width: '20rem',
        height: '25rem',
        background: 'rgba(0,0,0,0.65)',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        '& h5': {
            marginTop: theme.spacing(2),
            width: '70%',
        }
    },
    email: {
        marginBottom: theme.spacing(2)
    }, password: {
        marginBottom: theme.spacing(2)
    },
    signupLink: {
        color: '#fff',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'undeline',
        }
    }

}))

export default SignUp
