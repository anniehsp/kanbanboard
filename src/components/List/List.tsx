import React from 'react';
import {CssBaseline, Paper, Theme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import Title from "./Title";
import Card from "./Card";
import InputCard from '../Input/InputContainer';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),
    }
}));

export default function List() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <InputCard />
            </Paper>
        </div>
    )
}