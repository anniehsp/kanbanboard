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

interface Props {
    list: any;
}

export default function List({ list }: Props) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline/>
                <Title title={list.title} />
                {
                    list.cards.map((card: any) => (
                        <Card card={card} key={card.id} />
                    ))
                }
                <InputCard />
            </Paper>
        </div>
    )
}