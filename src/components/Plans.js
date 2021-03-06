import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../styled/styledcomponents';
import { setPrice } from '../features/counter/PriceSlice';
import { useHistory } from 'react-router';

const Plans = ({ cost, children, color, wide }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = (cost) => {
        dispatch(setPrice(cost))
        history.push('/checkout')
    }
    return (
        <div className={classes.root}>
            <Typography variant="h5">{children}</Typography>
            <NetflixButton wide={wide} color={color} onClick={() => handleClick(cost)}>Subcribe</NetflixButton>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& button': {
            marginBottom: theme.spacing(2),
        },
    },
    standard: {
        fontSize: '1.2rem'
    }
}))

export default Plans
