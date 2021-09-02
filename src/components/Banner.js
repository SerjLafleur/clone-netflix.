import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';
import HeroBanner from '../img/hero-banner2.jpg'

const Banner = () => {
    const classes = useStyles()
    // este método es para acortar la descripción para que no sea tan larga
    const truncate = (string, n) => string?.length > n ? `${string.subtr(0, n - 1)} ... ` : string
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant='h2' component='h1'>Movie Title</Typography>
                <div className={classes.buttons}>
                    <Button>play</Button>
                    <Button>My List</Button>
                </div>
                <Typography style={{ wordwap: 'break-word' }} variant='h6' className={classes.description}>
                    {
                        truncate('Movie Description', 160)
                    }
                </Typography>
                <div className={classes.fadeBotton} />
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundImage: `url(${HeroBanner})`,
        position: 'relative',
        height: '440px',
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    buttons: {
        '& button': {
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: 'rgba(51,51,51,0.5)',
            fontWeight: 700,
            borderRadius: '5px',
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: '1rem',
        },
        '& button:hover': {
            color: '#000',
            backgroundColor: '#e6e6e6',

        }
    },
    fadeBotton: {
        position: 'absolute',
        top: '30vh',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    },
}))

export default Banner
