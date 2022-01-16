import React from 'react';
import Container from '@mui/material/Container';
import logo from '../icons/logo.svg';
import logo_react from '../icons/logo_react.svg';
import logo_openAI from '../icons/logo_openAI.svg';
import logo_sass from '../icons/logo_sass.svg';
import logo_azure from '../icons/logo_azure.svg';
import logo_github from '../icons/logo_github.svg';
import orel from '../images/orel.png';
import alex from '../images/alex.png';
import seungwon from '../images/seungwon.png';
import weike from '../images/weike.png';
import './introPage.css';

export default function IntroPage(props) {
    return (
        <Container maxWidth={false} disableGutters={true} sx={{height: "100vh", scrollSnapAlign: "center"}}>
            <div className='flex-column'>
                <div className="logo"><img src={logo} alt="SearchScript Logo" /></div>
                <div className="title"><span className='dot' /><span className='title-speech'>speech</span><span className='title-script'>Script</span><span className='dot' /></div>
                <div className='desc'>
                    <div className='tech'>tech
                        <img className='tech-react' src={logo_react}/>
                        <img className='tech-openai' src={logo_openAI}/>
                        <img className='tech-sass' src={logo_sass}/>
                        <img className='tech-azure' src={logo_azure}/>
                    </div>
                    <div className='insp'>
                        <div className='insp-title'>inspiration
                            <div className='insp-text'>What if you could just say whatever, and the code could just <span className='desc-text-bold'>magically</span> pop out and run? Created for nwHacks 2022, speechScript can take your lovely voice and convert it directly to code.</div>
                            <div className='insp-gh-icon'><a href="https://github.com/weikequ/speechscript" target="_blank"><img src={logo_github}></img></a></div>
                        </div>
                        <div class="mouse"></div>
                        <p>scroll down to find out how</p>
                    </div>
                    <div className='team'>team
                        <img className='image-size top-left' src={seungwon}/>
                        <img className='image-size top-center' src={weike}/>
                        <img className='image-size bottom-center-left' src={orel}/>
                        <img className='image-size bottom-right' src={alex}/>
                    </div>
                </div>
            </div>

        </Container>
    )
}