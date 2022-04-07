import React, {useContext, useState} from 'react';
import { InputBase, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { MoreHoriz } from '@mui/icons-material';
import storeApi from '../../utils/storeApi';

const useStyles = makeStyles((theme: Theme) => createStyles({
    editableTitleContainer: {
        marginLeft: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
        "&:focus": {
            background: '#ddd',
        }
    }
}));

interface Props {
    title: string;
    listId: string;
}

export default function Title({ title, listId }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(title);

    // @ts-ignore
    const { updateListTitle } = useContext(storeApi);
    const classes = useStyles();

    const handleOnChange = (e: any) => {
        setNewTitle(e.target.value);
    };

    const handleOnBlur = () => {
      setOpen(!open);
      setNewTitle(newTitle);
      updateListTitle(newTitle, listId);
    };

    return (
        <div>
            {
                open ? (
                        <div>
                            <InputBase
                                autoFocus
                                inputProps={{
                                    className: classes.input,
                                }}
                                fullWidth
                                onBlur={handleOnBlur}
                                onChange={handleOnChange}
                                value={newTitle}
                            />
                        </div>
                    ) : (
                        <div className={classes.editableTitleContainer}>
                            <Typography
                                onClick={() => setOpen(!open)}
                                className={classes.editableTitle}
                            >
                                {title ? title : ''}
                            </Typography>
                            <MoreHoriz />
                        </div>
                    )
            }
        </div>
    );
}