import React from 'react';
import {Paper, Theme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}));

interface Props {
    card: any;
}

export default function Card({ card }: Props ) {
    const classes = useStyles();

    return(
        <div>
            <Paper className={classes.card}>{card.content}</Paper>
        </div>
    )
}
