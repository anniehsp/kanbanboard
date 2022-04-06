import React, { useState } from 'react';
import './App.css';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { v4 as uuid } from 'uuid';
import {DragDropContext, DropResult, ResponderProvided} from 'react-beautiful-dnd';

import List from './components/List/List';
import InputCard from './components/Input/InputContainer';
import Data from './utils/store';
import StoreApi from './utils/storeApi';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: 'green',
        width: '100%',
        overflowY: 'auto'
    },
}));

function App() {
    const classes = useStyles();

    const [data, setData] = useState<any>(Data);

    const addMoreCard = (title: string, listId: string) => {
        const newCardId = uuid();
        const newCard = {
            id: newCardId,
            title,
        };

        const newList = data.lists[listId];
        newList.cards = [...newList.cards, newCard];

        const newData = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: newList,
            }
        };

        setData(newData);
    };

    const addMoreList = (title: string) => {
        const newListId = uuid();
        const newList = {
            id: newListId,
            title,
            cards: [],
        };

        const newData = {
            listIds: [...data.listIds, newListId],
            lists: {
                ...data.lists,
                [newListId]: newList,
            },
        };

        setData(newData);
    };

    const updateListTitle = (title: string, listId: string) => {
        const list = data.lists[listId];
        list.title = title;

        const newData = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            }
        };

        setData(newData);
    }

    const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
        const { destination, source, draggableId } = result;

        if(!destination) {
            return;
        }

        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId];
        const draggingCard = sourceList.cards.filter((card: any) => card.id === draggableId)[0];

        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);

            const newData = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id] : destinationList,
                },
            };

            setData(newData);
        }
    }

    return (
        // @ts-ignore
        <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className={classes.root}>
                    {
                        data && data.listIds && data.listIds.map((listId: string) => {
                            const list = data.lists[listId];
                            return <List list={list} key={listId}/>
                        })
                    }
                    <InputCard type="list"/>
                </div>
            </DragDropContext>
        </StoreApi.Provider>
    );
}

export default App;
