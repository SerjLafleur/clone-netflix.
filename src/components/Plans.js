import React from 'react'
import { makeStyles } from '@material-ui/core';

const Plans = () => {
    const classes = useStyles()
    return (
        <div>
            plans
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#111",
        minHeight: "100vh"
    },
}))

export default Plans
