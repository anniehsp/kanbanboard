import React, {useContext, useState} from 'react';
import {Box, Button, Fade, Paper, TextField, Theme, Modal, Backdrop} from '@mui/material';
import {createStyles, makeStyles} from '@mui/styles';
import {Draggable} from 'react-beautiful-dnd';
import dayjs from 'dayjs';
import {Delete} from '@mui/icons-material';
import {DesktopDatePicker, LocalizationProvider} from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import storeApi from "../utils/storeApi";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}));

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Props {
    listId: string;
    card: any;
    index: number;
}

export default function Card({ listId, card, index }: Props) {
    const classes = useStyles();

    const [openModal, setOpenModal] = useState<boolean>(false);

    // @ts-ignore
    const { deleteCard, updateCard } = useContext(storeApi);

    const handleChangeData = (name: string, value: any) => {
        updateCard(name, value, listId, card.id);
    };

    const handleDeleteCard = () => {
        deleteCard(listId, card.id);
        setOpenModal(false);
    };

    return (
        <>
            <Draggable draggableId={card.id} index={index}>
                {
                    (provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            <Paper
                                className={classes.card}
                                onDoubleClick={() => setOpenModal(true)}
                            >
                                {card.title}
                            </Paper>
                        </div>
                    )
                }
            </Draggable>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <TextField
                            value={card.title}
                            onChange={(e) => handleChangeData('title', e.target.value)}
                            onBlur={() => setOpenModal(false)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Deadline"
                                value={card.date? card.date : dayjs()}
                                inputFormat="YYYY-MM-DD"
                                mask="____-__-__"
                                onChange={(newValue) => {
                                    handleChangeData('date', dayjs(newValue))
                                }}
                                onClose={() => setOpenModal(false)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button onClick={handleDeleteCard}>
                            <Delete />
                            Delete
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
