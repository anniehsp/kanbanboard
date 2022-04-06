import React from 'react';
import { Paper, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import {Draggable} from "react-beautiful-dnd";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}));

interface Props {
    card: any;
    index: number;
}

export default function Card({ card, index }: Props ) {
    const classes = useStyles();

    return(
        <Draggable draggableId={card.id} index={index}>
            {
                (provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                    >
                        <Paper className={classes.card}>{card.title}</Paper>
                    </div>
                )
            }
        </Draggable>
    )
}
