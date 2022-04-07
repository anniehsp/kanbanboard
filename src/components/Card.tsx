import React, {useState} from 'react';
import {Box, Button, Fade, Paper, TextField, Theme, Modal} from '@mui/material';
import {createStyles, makeStyles} from '@mui/styles';
import {Draggable} from 'react-beautiful-dnd';
import dayjs from 'dayjs';
import {Delete} from '@mui/icons-material';
import {DesktopDatePicker, LocalizationProvider} from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';

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
    card: any;
    index: number;
    updateCard: (name: string, value: string, listId: string, cardId: string) => void;
}

export default function Card({card, index, updateCard}: Props) {
    const classes = useStyles();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleChangeDate = (e: any, name: string) => {
        updateCard(name, e.target.value, index.toString(), card.id);
        console.log('check e', e);
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
                // BackdropComoponent={Backdrop}
                // BackdropProps={{
                //     timeout: 500,
                // }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Deadline"
                                value={dayjs()}
                                inputFormat="YYYY-MM-DD"
                                mask="____-__-__"
                                onChange={(newValue) => {
                                    console.log('ne', newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button>
                            <Delete/>
                            Delete
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
