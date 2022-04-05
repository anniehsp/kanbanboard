import React, { useContext, useState } from 'react';
import { Button, IconButton, InputBase, Paper, Theme } from '@mui/material';
import { Clear } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import { fade } from '@material-ui/core';
import storeApi from '../../utils/storeApi';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(),
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
    listId?: string;
    type: string;
}

export default function InputCard({ closeCard, listId, type }: Props) {
    const classes = useStyles();

    // @ts-ignore
    const { addMoreCard, addMoreList } = useContext(storeApi);
    const [title, setTitle] = useState<string>('');

    const handleOnChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title, listId);
            setTitle('');
            closeCard(false);
        } else {
            addMoreList(title);
            setTitle('');
            closeCard(false);
        }
    };

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
                    placeholder={ type === 'card' ? 'Enter a title of new card' : 'Enter a title of list' }
                    onBlur={() => closeCard(false)}
                    onChange={handleOnChange}
                    value={title}
                />
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button
                    className={classes.btnConfirm}
                    onClick={handleBtnConfirm}
                >
                    { type === 'card' ? 'Add Card' : 'Add List' }
                </Button>
                <IconButton onClick={() => closeCard(false)}>
                    <Clear />
                </IconButton>
            </div>
        </div>
    );
}