import React from 'react';
import Container from '@mui/material/Container';
import Logo from '../../VectorLogo.svg';

export default function Heading(props) {
    return (
        <Container sx={{color: "white", height: "20vh", marginTop:"100px", paddingTop:"20px"}}>
            <div style={{margin: "auto", width: "50%"}}>
                <img style={{display:"block", margin: "auto", width: "100px", height:"100px"}} src={Logo}></img>
            </div>
        </Container>
    )
}