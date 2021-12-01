import React from 'react';

import { HabilitiesArray } from './HabilitiesArray'

import { Fade } from 'react-reveal';

const _renderIcons = HabilitiesArray.map((hability, index) => {
    return(
        <div className="container-hability" key={index}>
            <Fade> 
                {hability.icon}
                <p className="hability-name">{hability.name}</p>
            </Fade>
        </div>
    )
})

const Habilities = () => {
    return (  
        <section className="container habilities" id="habilities">
            <article>
                <h2>Habilidades</h2>
                <div>
                    {_renderIcons}
                </div>
            </article>
        </section>
    );
}
 
export default Habilities;