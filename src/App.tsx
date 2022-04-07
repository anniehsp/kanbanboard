import React, { useState } from 'react';
import './App.css';
import { createStyles, makeStyles } from '@mui/styles';

import Wrapper from './components/Wrapper';
import Navigation from './components/nav/Navigation';

const useStyles = makeStyles(() => createStyles({
    root: {
        backgroundColor: 'green',
    },
}));

function App() {
    const classes = useStyles();

    const [backgroundImage, setBackgroundImage] = useState<string>('green');

    return (
        <div
            className={classes.root}
            style={{
                backgroundColor: backgroundImage,
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Navigation
                onChangeBackgroundImage={setBackgroundImage}
            />
            <Wrapper />
        </div>
    );
}

export default App;
