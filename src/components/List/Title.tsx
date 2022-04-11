import React, {useContext, useState} from 'react';
import {Box, Button, Divider, InputBase, Menu, MenuItem, MenuList, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import {DeleteOutlined, EditOutlined, MoreHoriz } from '@mui/icons-material';
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
    const [showEditBox, setEditBoxVisibility] = useState<boolean>(false);

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
                        <Button onClick={() => setEditBoxVisibility(!showEditBox)}>
                            <MoreHoriz />
                        </Button>
                        {/*<Box my="10px" mr="10px" cursor="grab" display="flex">*/}
                        <Box>
                            <Menu open={showEditBox}>
                                <MenuList style={{ justifyContent: 'center', alignItems: 'center'}}>
                                    <MenuItem onClick={() => {
                                        setOpen(!open);
                                        setEditBoxVisibility(!showEditBox);
                                    }}>
                                        <EditOutlined />
                                        <Typography style={{ marginLeft: '5px' }}>Edit</Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <DeleteOutlined />
                                        <Typography style={{ marginLeft: "5px" }}>Delete</Typography>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </div>
                )
            }
        </div>
    );
}