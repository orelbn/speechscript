import React from 'react';
import IntroPage from './IntroPage';
import Main from './Main';
import Container from '@mui/material/Container';

export default function ApplicationWrapper(props) {

    return (
        <Container maxWidth={false} disableGutters={true} sx={{height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory"}}>
            <IntroPage />
            <Main />
        </Container>
    )
}