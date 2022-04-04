import React from 'react';
import {Paper, Theme, Typography} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import {fade} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: '#EBECF0',
        '&:hover': {
            backgroundColor: fade('#000', 0.25),
        }
    }
}));

export default function InputContainer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper
                className={classes.addCard}
                elevation={0}
            >
                <Typography>+ Add a card</Typography>
            </Paper>
        </div>
    );
}