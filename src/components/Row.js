import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const classes = useStyles()
    const [movies, setMovies] = useState([])


    const base_url = 'https://image.tmdb.org/t/p/original';

    console.log(movies)
    useEffect(() => {

        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className={classes.root}>
            <Typography variant='h4'>{title}</Typography>
            <div className={classes.posters}>
                {
                    movies.map((movie) =>
                        (isLargeRow && movie.poster_path)

                    )
                }
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        marginLeft: theme.spacing(4),
    },
}))
export default Row
