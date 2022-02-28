import { makeStyles } from '@mui/styles'
import React from 'react'
import theme from '../../styles/themeConfig'

const styles = makeStyles({
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    }
})

export default function Container({children}) {
    const classes = styles();
    return (
    <div className={classes.content}>
        <div className={classes.toolbar}></div>
        {children}
    </div>
  )
}
