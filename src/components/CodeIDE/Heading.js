import React from 'react';
import Container from '@mui/material/Container';
import Logo from '../../LogoVector.png';

export default function Heading(props) {
    return (
        <Container sx={{color: "white"}}>
            <div style={{margin: "auto", width: "50%"}}>
                <img style={{display:"block", margin: "auto", width: 100, height:80}} src={Logo}></img>
            </div>
        </Container>
    )
}