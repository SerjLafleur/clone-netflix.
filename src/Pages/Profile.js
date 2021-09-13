import React from 'react'
import { useHistory } from 'react-router';
import { makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import ImgProfile from '../img/img-profile.png'
import Plans from '../components/Plans'
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';

const Profile = () => {
    const classes = useStyles()
    const history = useHistory()

    const signOut = () => {
        auth.signOut()
        history.push('/login')

    }
    return (
        <div className={classes.root}>
            <Header />
            <Typography variant='h3'>Edit Profile</Typography>
            <div className={classes.info}>
                <img src={ImgProfile} alt='profile-img' />
                <div className={classes.details}>
                    <div className={classes.plans}>
                        <Typography variant='h6'>email usuario</Typography>
                        <Typography variant='h5' gutterBottom className={classes.plansText}>Plans</Typography>
                        <Plans cost={7.99}>Netflix Standard</Plans>
                        <Plans cost={11.99}>Netflix Basic</Plans>
                        <Plans wide='medium' color='gray' cost={15.99}>Netflix Premium</Plans>
                        <NetflixButton onClick={signOut} wide='fulWidth'>Sign Out</NetflixButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        minHeight: '100vh',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        width: '80%',
        display: 'flex',
        '& img': {
            height: '100px',
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            }
        },
    },
    details: {
        width: '100%',
        marginLeft: theme.spacing(3),
        '& h6': {
            backgroundColor: '#aaa',
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: '18px',
        },
    },
    plans: {
        width: '100%',
    },
    plansText: {
        borderBottom: '1px solid lightgray'
    }
}))

export default Profile
