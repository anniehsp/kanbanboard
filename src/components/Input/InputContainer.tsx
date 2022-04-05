import React, {useState} from 'react';
import {Collapse, Paper, Theme, Typography} from '@mui/material';
import {createStyles, makeStyles} from '@mui/styles';
import {fade} from '@material-ui/core';
import InputCard from './InputCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '300px',
        marginTop: theme.spacing(1),
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

interface Props {
    listId?: string;
    type: string;
}

export default function InputContainer({ listId, type }: Props) {
    const classes = useStyles();

    const [openNewCard, setOpenNewCard] = useState<boolean>(false);

    return (
        <div className={classes.root}>
            <Collapse in={openNewCard}>
                <InputCard
                    closeCard={setOpenNewCard}
                    listId={listId}
                    type={type}
                />
            </Collapse>
            <Collapse in={!openNewCard}>
                <Paper
                    className={classes.addCard}
                    elevation={0}
                    onClick={() => setOpenNewCard(!openNewCard)}
                >
                    <Typography>{ type === 'card' ? '+ Add a Card' : '+ Add another List'}</Typography>
                </Paper>
            </Collapse>
        </div>
    );
}