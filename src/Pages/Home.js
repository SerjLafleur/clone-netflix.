import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../Requests';

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <Banner />
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
            <Row title='ACTION MOVIE' fetchUrl={requests.fetchActionMovies} />
            <Row title='COMEDY MOVIE' fetchUrl={requests.fetchComedyMovies} />
            <Row title='HORROR MOVIE' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='ROMANCE MOVIE' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}
const useStyles = makeStyles((theme) => ({

}))

export default Home;