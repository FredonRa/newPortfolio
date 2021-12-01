import React from 'react';

const Footer = () => {
    const date = new Date()
    return (  
        <footer>
            <p>Hecho con 💜 por 
                <a 
                style={{textDectoration: "none"}} 
                href="https://github.com/FredonRa"> Federico Leiva </a>
                | {date.getFullYear()} ©
            </p>
        </footer>
    );
}
 
export default Footer;