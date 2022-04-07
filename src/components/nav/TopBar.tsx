import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
    title: {
        flexGrow: 1,
    },
    button: {
      color: '#fff',
      backgroundColor: '#000',
    },
}));

interface Props {
    onChangeSideMenu: (value: boolean) => void;
}

export default function TopBar({ onChangeSideMenu }: Props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar
                position="static"
                style={{ background: 'none' }}
                elevation={0}
            >
                <Toolbar>
                    <h1 className={classes.title}>Kanban Board</h1>
                    <Button onClick={() => onChangeSideMenu(true)} className={classes.button}>Change Background</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}