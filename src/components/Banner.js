import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';
import HeroBanner from '../img/hero-banner2.jpg'
import axios from 'axios';
import requests from '../Requests';

const Banner = () => {
    const classes = useStyles()
    // este método es para acortar la descripción para que no sea tan larga
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ... ` : string
    const [movie, setMovie] = useState([])

    useEffect(() => {

        axios.get(requests.fetchNetflixOriginals)
            .then(request => {
                const random = Math.floor(Math.random() * request.data.results.length - 1)
                setMovie(request.data.results[random])
            })


        // const fetchData = async () => {

        //     const request = await axios.fetch(requests.fetchNetflixOriginals)
        //     const random = Math.floor(Math.random() * request.data.results.length - 1)
        //     setMovie(request.data.results[random])
        //     return request
        // }
        // fetchData()
    }, [])

    console.log('movies --->', movie)
    return (
        <div className={classes.root} style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        }}>
            <div className={classes.content}>
                <Typography variant='h2' component='h1'>
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div className={classes.buttons}>
                    <Button>play</Button>
                    <Button>My List</Button>
                </div>
                <Typography style={{ wordWrap: 'break-word' }} variant='h6' className={classes.description}>
                    {
                        truncate(movie?.overview, 160)
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
    description: {
        marginTop: theme.spacing(5),
        width: '45rem',
        lineHeight: '1.3',
        maxWidth: '380px',
        height: '80px',
    },
    content: {
        marginLeft: theme.spacing(4),
        paddingTop: theme.spacing(16,),
        '& h2': {
            fontweight: 800,
            paddingBottom: theme.spacing(3),
        },
    },
}))

export default Banner
