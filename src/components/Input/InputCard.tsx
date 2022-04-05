import React from 'react';
import {Button, IconButton, InputBase, Paper, Theme} from "@mui/material";
import {Clear} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";
import {fade} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing()
    },
    input: {
      margin: theme.spacing(1),
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: fade('#5AAC44', 0.75),
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));

interface Props {
    closeCard: (value: boolean) => void;
}

export default function InputCard({ closeCard }: Props) {
    const classes = useStyles();

    return (
        <div>
            <div>
            <Paper className={classes.card}>
                <InputBase
                    autoFocus
                    multiline
                    fullWidth
                    inputProps={{
                        className: classes.input,
                    }}
                    placeholder="Enter a title of new card"
                    onBlur={() => closeCard(false)}
                />
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button
                    className={classes.btnConfirm}
                    onClick={() => closeCard(false)}
                >
                    Add Card
                </Button>
                <IconButton onClick={() => closeCard(false)}>
                    <Clear />
                </IconButton>
            </div>
        </div>
    );
}