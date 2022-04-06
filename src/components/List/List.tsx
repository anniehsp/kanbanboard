import React from 'react';
import { CssBaseline, Paper, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import InputCard from '../Input/InputContainer';
import Title from './Title';
import Card from './Card';
import {Droppable} from "react-beautiful-dnd";

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
}

export default function List({ list }: Props) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
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
