import React from 'react';
import { CssBaseline, Paper, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import InputCard from '../Input/InputContainer';
import Card from '../Card';
import Title from './Title';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),
    },
    cardContainer: {
      marginTop: theme.spacing(4),
    },
}));

interface Props {
    list: any;
    index: number;
    updateCard: (name: string, value: string, listId: string, cardId: string) => void;
}

export default function List({ list, index, updateCard }: Props) {
    const classes = useStyles();

    return (
        <Draggable draggableId={list.id} index={index}>
            {
                (provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <Paper
                            className={classes.root}
                            {...provided.dragHandleProps}
                        >
                            <CssBaseline/>
                            <Title
                                title={list.title}
                                listId={list.id}
                            />
                            <Droppable droppableId={list.id}>
                                {
                                    (provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={classes.cardContainer}
                                        >
                                            {
                                                list.cards.map((card: any, index: number) => (
                                                    <Card
                                                        card={card}
                                                        key={card.id}
                                                        index={index}
                                                        updateCard={updateCard}
                                                    />
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                    )
                                }
                            </Droppable>
                            <InputCard
                                listId={list.id}
                                type="card"
                            />
                        </Paper>
                    </div>
                )
            }
        </Draggable>
    );
}
