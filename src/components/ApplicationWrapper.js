import React from 'react';
import IntroPage from './IntroPage';
import Main from './Main';
import Container from '@mui/material/Container';

export default function ApplicationWrapper(props) {

    return (
        <Container disableGutters={true} sx={{height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory", paddingLeft: "0px", paddingRight: "0px"}}>
            <IntroPage />
            <Main />
        </Container>
    )
}