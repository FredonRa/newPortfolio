import React from 'react';
import { HabilitiesArray } from './HabilitiesArray'
import { Fade } from 'react-reveal'

const _renderIcons = HabilitiesArray.map((hability, index) => {
    return(
        <Fade top key={index}>
            {hability.icon}
        </Fade>
    )
})

const Welcome = () => {
    return (  
        <main className="container welcome" id="welcome">
            <div className="containerSaludo">
                <Fade top> 
                    <h1>Hola! Soy Fede</h1>
                </Fade>
                <Fade top>
                    <h2>Desarrollador Front End y Mobile</h2>
                </Fade>
                <div className="containerIcons">
                    {_renderIcons}
                </div>
            </div>
            <div className="photo">
                <Fade top >
                    <img 
                    src='/Sample.png' 
                    style={{maxWidth: 550}}
                    />
                </Fade>
            </div>
        </main>
    );
}
 
export default Welcome;