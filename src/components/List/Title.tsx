import React, {useState} from 'react';
import {InputBase, Theme, Typography} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import {MoreHoriz} from "@mui/icons-material";

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

export default function Title() {
    const [open, setOpen] = useState<boolean>(false);

    const classes = useStyles();

    return (
        <div>
            {
                open ? (
                        <div>
                            <InputBase
                                autoFocus
                                value="Todo"
                                inputProps={{
                                    className: classes.input,
                                }}
                                fullWidth
                                onBlur={() => setOpen(!open)}
                            />
                        </div>
                    ) : (
                        <div className={classes.editableTitleContainer}>
                            <Typography
                                onClick={() => setOpen(!open)}
                                className={classes.editableTitle}
                            >
                                Todo
                            </Typography>
                            <MoreHoriz />
                        </div>
                    )
            }
        </div>
    );
}