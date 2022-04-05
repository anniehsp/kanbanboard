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

interface Props {
    title: string;
}

export default function Title({ title }: Props) {
    const [open, setOpen] = useState<boolean>(false);

    const classes = useStyles();

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
                                onBlur={() => setOpen(!open)}
                                value={title}
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