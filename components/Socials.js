import React from 'react';
import { SocialsArray } from '../components/SocialsArray'

const _renderSocials = SocialsArray.map((social, index) => {
    return(
        <a target="_blank" href={social.link} key={index} rel="noreferrer">
            {social.icon}
        </a>
    )
})

const Socials = () => {
    return (  
        <div className="socials">
            {_renderSocials}
        </div>
    );
}
 
export default Socials;