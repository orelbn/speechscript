import React from 'react';
import Container from '@mui/material/Container';
import logo from '../icons/logo.svg';
import logo_react from '../icons/logo_react.svg';
import logo_openAI from '../icons/logo_openAI.svg';
import logo_sass from '../icons/logo_sass.svg';
import logo_azure from '../icons/logo_azure.svg';
import './introPage.css';

export default function IntroPage(props) {
    return (
        <Container maxWidth={false} disableGutters={true} sx={{height: "100vh", scrollSnapAlign: "center", backgroundColor: "#2D1919"}}>
            <div className='flex-column'>
                <div className="logo"><img src={logo} alt="SearchScript Logo" /></div>
                <div className="title"><span className='title-speech'>speech</span><span className='title-script'>Script</span></div>
                <div className='desc-text'></div>
                <div className='desc'>
                    <div className='tech-desc-title'>tech
                            {/* <img src={logo_react} alt="React Icon"/>
                            <img src={logo_openAI} alt="openAI Icon"/>
                            <img src={logo_sass} alt="Sass Icon"/>
                            <img src={logo_azure} alt="Azure Icon"/> */}
                    </div>
                    <div className='insp-desc'>
                        <div className='insp-desc-title'>inspiration
                            <div className='insp-desc-text'>What if you could just say whatever, and the code could just <span className='desc-text-bold'>magically</span> pop out and run? Created for nwHacks 2022, speechScript can take your lovely voice and convert it directly to code.</div>
                        </div>
                        <div class="mouse"></div>
                        <p>scroll down to find out how</p>
                    </div>
                    <div className='team-desc'>team</div>
                </div>
            </div>

        </Container>
    )
}